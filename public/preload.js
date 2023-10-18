const { createConnection, createServer } = require("net");
const { createSocket } = require("dgram");

window.services = {
  tcpSend: (log, ip, port, message) => {
    try {
      const client = createConnection(port, ip);

      client.on("error", (err) => {
        log("Client", "Error", err);
      });

      client.on("data", (data) => {
        log("Client", "Recv ", data);
      });

      client.write(message);
      log("Client", "Info ", "发送 tcp (ip: " + ip + ", port: " + port + ", message: \"" + message + "\")");
    } catch (error) {
      log("Client", "Error", error)
    }

    return;
  },
  udpSend: (log, ip, port, message) => {
    const client = createSocket("udp4");

    client.on("error", (err) => {
      log("Client", "Error", err);
    })

    client.on("message", (msg, rinfo) => {
      log("Client", "Recv ", msg);
    })

    client.send(message, port, ip, (err) => {
      if (err !== null) {
        log("Client", "Error", err);
      }
    });

    log("Client", "Info ", "发送 udp (ip: " + ip + ", port: " + port + ", message: \"" + message + "\")");

    return;
  },
  tcpServer: () => {
    const server = createServer();
    return server;
  },
  udpServer: () => {
    const server = createSocket("udp4")
    return server
  },
  startTCPServer: (log, colorFunc, servers, ip, port, message) => {
    servers.tcpServer.on("error", (err) => {
      log("Server", "Error", err);
      servers.tcpServer = null;
      colorFunc("#747d8c")
    });

    servers.tcpServer.on("close", () => {
      log("Server", "Error", "tcp 服务端 (" + ip + ", " + port + ") 已关闭");
    });

    servers.tcpServer.on("connection", (socket) => {
      log("Server", "Info ", "有新的 tcp 客户端接入 (" + socket.remoteAddress + ", " + socket.remotePort + ", " + socket.remoteFamily + ")");

      socket.write(message);

      socket.on("data", (data) => {
        log("Server", "Recv ", data);
      });

      socket.end();
    });

    servers.tcpServer.listen(port, ip, () => {
      log("Server", "Info ", "tcp 服务端 (" + ip + ", " + port + ") 正在监听中...");
      colorFunc("#2f3542")
    });
  },
  stopTCPServer: (colorFunc, servers) => {
    servers.tcpServer.close();
    servers.tcpServer = null;
    colorFunc("#747d8c")
  },
  startUDPServer(log, colorFunc, servers, ip, port, message) {
    servers.udpServer.on("error", (err) => {
      log("Server", "Error", err);
      servers.udpServer = null;
      colorFunc("#747d8c")
    });

    servers.udpServer.on("close", () => {
      log("Server", "Error", "udp 服务端 (" + ip + ", " + port + ") 已关闭");
    });

    servers.udpServer.on("message", (msg, rinfo) => {
      log("Server", "Info ", "有新的 udp 客户端接入 (" + rinfo.address + ", " + rinfo.port + ", " + rinfo.family + ")");
      log("Server", "Recv ", msg);

      servers.udpServer.send(message, rinfo.port, rinfo.address, (err) => {
        if (err !== null) {
          log("Server", "Error", err);
        }
      });
    });

    servers.udpServer.bind(port, ip, () => {
      log("Server", "Info ", "udp 服务端 (" + ip + ", " + port + ") 正在监听中...");
      colorFunc("#2f3542")
    });
  },
  stopUDPServer: (colorFunc, servers) => {
    servers.udpServer.close();
    servers.udpServer = null;
    colorFunc("#747d8c")
  },
};
