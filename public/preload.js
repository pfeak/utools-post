const { createConnection, createServer } = require('net');
const { createSocket } = require('dgram');

window.services = {
  tcpSend: (log, ip, port, message) => {
    const client = createConnection(port, ip);

    client.on('error', (err) => {
      log('client', err);
    });

    client.on('data', (data) => {
      log('client receive', data);
    });

    client.write(message);
    log('client', "send tcp (ip: " + ip + ", port: " + port + ", message: \"" + message + "\")");

    return;
  },
  udpSend: (log, ip, port, message) => {
    const client = createSocket('udp4');

    client.on("error", (err) => {
      log('client', err);
    })

    client.on("message", (msg, rinfo) => {
      log('client receive', msg);
    })

    client.send(message, port, ip, (err) => {
      if (err !== null) {
        log('client', err);
      }
    });
    log('client', "send udp (ip: " + ip + ", port: " + port + ", message: \"" + message + "\")");

    return;
  },
  tcpServer: () => {
    const server = createServer();
    return server;
  },
  udpServer: () => {
    const server = createSocket("udp4")
    return server
  }
};
