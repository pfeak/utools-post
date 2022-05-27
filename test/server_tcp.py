import socket, sys
from termios import tcsendbreak

address = ("127.0.0.1", 8000)
tcpServer = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print("Server Socket Created.......", address)
tcpServer.bind(address)
print("Wating for connecting.......")
tcpServer.listen(5)
while True:
	clientSock, clientaddr = tcpServer.accept()
	print("Connected from: ", clientSock.getpeername())
	data = clientSock.recv(1024)
	print(f"message: {data}")
	clientSock.send(b'Congratulations........')
	clientSock.close()
tcpServer.close()
