// // config
// const ip_address = document.getElementsByClassName('ip')[0];
// const port = document.getElementsByClassName('port')[0];
// const text = document.getElementsByClassName('text')[0];
// const cons = document.getElementsByClassName('console')[0];

// // button
// const btn_tcp = document.getElementById('tcp');
// const btn_udp = document.getElementById('udp');
// const btn_tcpServer = document.getElementById('tcpServer');
// const btn_udpServer = document.getElementById('udpServer');
// const btn_clear = document.getElementById('clear');

// function log(tag, msg) {
//   cons.value += '\n' + tag + ': ' + msg;
//   cons.scrollTop = cons.scrollHeight; // textarea 展示最后一行
// }

// btn_clear.addEventListener('click', () => {
//   cons.value = '>> 日志输出';
// });

// // server
// var server = {
//   tcpServer: null,
//   udpServer: null,
// };

// function startTCPServer(server, ip, port) {
//   server.tcpServer.on('error', (err) => {
//     log('server', err);
//     server.tcpServer = null;
//     btn_tcpServer.style = 'background-color: #747d8c;';
//   });

//   server.tcpServer.on('close', () => {
//     log('server', 'tcp 服务端 (' + ip + ', ' + port + ') 已关闭');
//   });

//   server.tcpServer.on('connection', (socket) => {
//     log(
//       'server',
//       '有新的 tcp 客户端接入 (' +
//         socket.remoteAddress +
//         ', ' +
//         socket.remotePort +
//         ', ' +
//         socket.remoteFamily +
//         ')'
//     );

//     socket.write('你好，这里是 tcp 服务端');

//     socket.on('data', (data) => {
//       log('server receive', data);
//     });

//     socket.close();
//   });

//   server.tcpServer.listen(port, ip, () => {
//     log('server', 'tcp 服务端 (' + ip + ', ' + port + ') 正在监听中...');
//     btn_tcpServer.style = 'background-color: #2f3542;';
//   });
// }

// function stopTCPServer(server) {
//   server.tcpServer.close();
//   server.tcpServer = null;
// }

// function startUDPServer(server, ip, port) {
//   server.udpServer.on('error', (err) => {
//     log('server', err);
//     server.udpServer = null;
//     btn_udpServer.style = 'background-color: #747d8c;';
//   });

//   server.udpServer.on('close', () => {
//     log('server', 'udp 服务端 (' + ip + ', ' + port + ') 已关闭');
//   });

//   server.udpServer.on('message', (msg, rinfo) => {
//     log(
//       'server',
//       '有新的 udp 客户端接入 (' +
//         rinfo.address +
//         ', ' +
//         rinfo.port +
//         ', ' +
//         rinfo.family +
//         ')'
//     );

//     server.udpServer.send('你好，这里是 udp 服务端', rinfo.port, rinfo.address, (err) => {
//       if (err !== null) {
//         log('server', err);
//       }
//     });
//   });

//   server.udpServer.bind(port, ip, () => {
//     log('server', 'udp 服务端 (' + ip + ', ' + port + ') 正在监听中...');
//     btn_udpServer.style = 'background-color: #2f3542;';
//   });
// }

// function stopUDPServer(server) {
//   server.udpServer.close();
//   server.udpServer = null;
// }

// // service
// // tcp client
// btn_tcp.addEventListener('click', () => {
//   window.services.tcpSend(log, ip_address.value, port.value, text.value);
// });

// // udp client
// btn_udp.addEventListener('click', () => {
//   window.services.udpSend(log, ip_address.value, port.value, text.value);
// });

// // tcp server
// btn_tcpServer.addEventListener('click', () => {
//   if (server.tcpServer === null) {
//     server.tcpServer = window.services.tcpServer();
//     startTCPServer(server, ip_address.value, port.value);
//   } else {
//     stopTCPServer(server);
//     btn_tcpServer.style = 'background-color: #747d8c;';
//   }
// });

// // udp server
// btn_udpServer.addEventListener('click', () => {
//   if (server.udpServer === null) {
//     server.udpServer = window.services.udpServer();
//     startUDPServer(server, ip_address.value, port.value);
//   } else {
//     stopUDPServer(server);
//     btn_udpServer.style = 'background-color: #747d8c;';
//   }
// });
