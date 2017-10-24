var net = require('net');

// net.connect(3000);
var client = net.connect({host: '127.0.0.1', port: 3000});

client.on('connect', function() {
    client.write('Hello, I am the client!');
});

client.on('data', function(message) {
    console.log(message.toString());
});

client.on('end', function() {
    process.exit();
});

process.stdin.on('readable', function() {
    var message = process.stdin.read();
    
    if (!message) {
        return;
    }

    message = message.toString().replace(/\n/, '');
    client.write(message);
});