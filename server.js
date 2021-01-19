//load net module
const net = require('net');

//counter
var clients = 0;


var server = net.createServer(function (socket) {

    //client.setEncoding('utf8');

    //Increment whenever a client connects
    clients++;

    //store the value in local variable
    var clientId = clients;
    console.log(`Client connected: ${clientId}`);

    //wire-up disconnected event
    socket.on('end', function () {
        console.log(`Client dis-connected: ${clientId}`);
    });



    // The client can also receive data from the server by reading from its socket.
    socket.on('data', function (chunk) {
        console.log(`Data received: ${chunk.toString()}`);

        // Request an end to the connection after the data has been received.
        socket.end();
    });


    socket.on('error', function (err) {
        console.error('error: ' + err);
    });

    //greet connected client
    //socket.write(`Welcome client: ${clientId}`);

    //pipe data sent by the client to client
    //client.pipe(client);
});

//bind to port 8000 and start accepcting connections
server.listen(502, function () {
    console.log(`Server started on port: 502`);
})