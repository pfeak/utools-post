const ip_address = document.getElementsByClassName('ip_address')[0];
const port = document.getElementsByClassName('port')[0];
const btn_tcp = document.getElementById('tcp');
const text = document.getElementsByClassName('text')[0];

btn_tcp.addEventListener('click', () => {
  window.services.tcpSend(ip_address.value, port.value, text.value);
});
