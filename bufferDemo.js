/*If you're working with Node.JS, you may have encountered Buffers, 
which are a way to store binary data as a sequence of its bytes.
But what happens when you have serialised it, and you want to convert it back to a String? */

//Let us assume that we have the following data:

var bytes = new Buffer("Hello World");  //'utf8' is the default encoding
console.log(bytes);//In the above log output, the buffer object contains bytes of data represented in hexadecimal

//We can use Buffer.from to read in the bytes, and then return it as a String:
console.log(new Buffer.from(bytes).toString());

