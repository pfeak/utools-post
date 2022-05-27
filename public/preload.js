const { createConnection } = require('net');

window.services = {
  tcpSend: (ip, port, message) => {
    const client = createConnection(port, ip, () => {});
    client.write(message);
    return;
  },
};
