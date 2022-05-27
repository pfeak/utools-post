// config
const ip_address = document.getElementsByClassName('ip_address')[0];
const port = document.getElementsByClassName('port')[0];
const text = document.getElementsByClassName('text')[0];

// button
const btn_tcp = document.getElementById('tcp');
const btn_udp = document.getElementById('udp');

// service
btn_tcp.addEventListener('click', () => {
  window.services.tcpSend(ip_address.value, port.value, text.value);
});

btn_udp.addEventListener('click', () => {
  window.services.udpSend(ip_address.value, port.value, text.value);
});
