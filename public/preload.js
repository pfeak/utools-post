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
    client.send(message, port, ip, (err) => {
      client.close();
    });
    log('client', "send udp (ip: " + ip + ", port: " + port + ", message: \"" + message + "\")");
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
