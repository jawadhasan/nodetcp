//load net module
const net = require('net');

//counter
var clients = 0;


var server = net.createServer(function(client){
    
    //Increment whenever a client connects
    clients++; 

    //store the value in local variable
    var clientId = clients;
    console.log(`Client connected: ${clientId}`);

    //wire-up disconnected event
    client.on('end', function(){
        console.log(`Client dis-connected: ${clientId}`);
    });

    //greet connected client
    client.write(`Welcome client: ${clientId}`);

    //pipe data sent by the client to client
    client.pipe(client);
});

//bind to port 8000 and start accepcting connections
server.listen(8000,function(){
    console.log(`Server started on port: 8000`);
})