import socket

address = ("0.0.0.0", 8000)
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind(address)
print("udp server start on port:", address[1])
while True:
    data, addr = sock.recvfrom(1024)
    print("Receive data = %s" % data)
    if data == b"exit":
        sock.sendto(b"Goodbye!", addr)
        continue
    sock.sendto(b"Hello %s!" % data, addr)
