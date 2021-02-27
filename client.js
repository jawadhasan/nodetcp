//load net module
const net = require('net');

// The port number and hostname of the server.
const port = 502;
const host = '127.0.0.1'; //localhost

//bytes Array
var bytesArray = [0x4, 0xFF, 0x01, 0x20, 0x0];
testBuff = new Buffer.from(bytesArray);

var client = net.connect({ host: host, port: port }, connected);


function connected() {
    client.write(testBuff);
  // do other things
}


