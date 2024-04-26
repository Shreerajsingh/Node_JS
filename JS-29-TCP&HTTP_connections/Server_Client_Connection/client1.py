import socket;

client_socket = socket.socket()

HOST = "localhost"
PORT = 4000

client_socket.connect((HOST, PORT))

client_socket.sendall(b"hello from client1")

data_recv_frm_server = client_socket.recv(2048)

print(data_recv_frm_server)

