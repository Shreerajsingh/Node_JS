const net = require('net');

const port = 8000;

const server = net.createServer((socket) => {
    socket.on('data', (clientData) => {
        console.log("Data revieved from client is",clientData.toString());
    });
    socket.write("Data recieved successfully");
});

server.listen(port, (port) => {
    console.log("Node server is up on port",port);
})