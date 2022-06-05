// config
const ip_address = document.getElementsByClassName('ip')[0];
const port = document.getElementsByClassName('port')[0];
const text = document.getElementsByClassName('text')[0];
const cons = document.getElementsByClassName('console')[0];

// button
const btn_tcp = document.getElementById('tcp');
const btn_udp = document.getElementById('udp');
const btn_tcpServer = document.getElementById('tcpServer');
const btn_clear = document.getElementById('clear');

function log(tag, msg) {
  cons.value += '\n' + tag + ': ' + msg;
  cons.scrollTop = cons.scrollHeight; // textarea 展示最后一行
}

btn_clear.addEventListener('click', () => {
  cons.value = '>> 日志输出';
});

// server
function startTCPServer(server, ip, port) {
  server.on('error', (err) => {
    log('server', err);
    tcpServer = null;
    btn_tcpServer.style = 'background-color: #747d8c;';
  });

  server.on('close', () => {
    log('server', 'tcp 服务端 (' + ip + ', ' + port + ') 已关闭');
  });

  server.listen(port, ip, () => {
    log('server', 'tcp 服务端 (' + ip + ', ' + port + ') 正在监听中...');
    btn_tcpServer.style = 'background-color: #2f3542;';
  });

  server.on('connection', (socket) => {
    log(
      'server',
      '有新的 tcp 客户端接入 (' +
        socket.remoteAddress +
        ', ' +
        socket.remotePort +
        ', ' +
        socket.remoteFamily +
        ')'
    );

    socket.write('你好，这里是 tcp 服务端');

    socket.on('data', (data) => {
      log('server receive', data);
    });

    socket.close();
  });
}

function stopTCPServer(server) {
  tcpServer.close();
  tcpServer = null;
  log('server', 'tcp 服务端已关闭');
}

// service
// tcp client
btn_tcp.addEventListener('click', () => {
  window.services.tcpSend(log, ip_address.value, port.value, text.value);
});

// udp client
btn_udp.addEventListener('click', () => {
  window.services.udpSend(ip_address.value, port.value, text.value);
});

// tcp server
var tcpServer = null;
btn_tcpServer.addEventListener('click', () => {
  if (tcpServer === null) {
    tcpServer = window.services.tcpServer();
    startTCPServer(tcpServer, ip_address.value, port.value);
  } else {
    stopTCPServer(tcpServer);
    btn_tcpServer.style = 'background-color: #747d8c;';
  }
});
