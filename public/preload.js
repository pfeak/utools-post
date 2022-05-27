const { createConnection } = require('net');
const { createSocket } = require('dgram');

window.services = {
  tcpSend: (ip, port, message) => {
    const client = createConnection(port, ip, () => {});
    client.write(message);
    return;
  },
  udpSend: (ip, port, message) => {
    const client = createSocket('udp4');
    client.send(message, port, ip, (err) => {
      client.close();
    });
  },
};
