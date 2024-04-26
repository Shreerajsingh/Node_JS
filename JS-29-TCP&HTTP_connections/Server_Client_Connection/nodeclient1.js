const net = require('net');

const client = net.createConnection({port : 8000}, () => {
    console.log("Client connected on port 8000");
    client.write("Hello from Node Client1");
})

client.on('data', (serverData) => {
    console.log("Data recieved From server", serverData.toString());
})