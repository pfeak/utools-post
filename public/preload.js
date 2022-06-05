const { createConnection, createServer } = require('net');
const { createSocket, Socket } = require('dgram');

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

    return;
  },
  udpSend: (ip, port, message) => {
    const client = createSocket('udp4');
    client.send(message, port, ip, (err) => {
      client.close();
    });
  },
  tcpServer: () => {
    const server = createServer();
    return server;
  },
};
