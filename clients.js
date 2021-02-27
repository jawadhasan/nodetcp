

// -----------------creating client using net.connect instead of custom socket-------

const net = require('net');

var bytesArray = [0x0F, 0x81, 0xA6, 0x0E];
var testBuff = new Buffer.from(bytesArray);

const clients = net.connect({port: 502}, () => {
    // 'connect' listener
    console.log('connected to server!');
    clients.write('Hello World!\r\n'); //writing a text string
    clients.write(testBuff); //writing a buffer
  });

  clients.on('data', (data) => {
    console.log(data.toString());
    clients.end();
  });

  clients.on('end', () => {
    console.log('disconnected from server');
  });
  
  clients.on('error', function(err) {
    console.error('error: ' + err);
});