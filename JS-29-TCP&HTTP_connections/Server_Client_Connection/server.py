import socket;
import threading;

def connect_a_client(conn,addr):
    print("New client has been connected!")
    data = conn.recv(2048)
    print("Data received is", data)
    conn.sendall(b"data successfully recieved")

server_socket = socket.socket()

HOST = "localhost"
PORT = 4000

# Binding socket object to Host ans Port
server_socket.bind((HOST,PORT))

# Start listening for new connections
server_socket.listen()

print("server listening on", HOST, PORT)

while True:
    conn,addr = server_socket.accept()
    t = threading.Thread(target=connect_a_client, args=(conn, addr))
    t.start()   # starting the thread
