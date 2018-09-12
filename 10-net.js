let net = require('net');
let moment = require('moment');

let server = net.createServer((socket) => {
    let now = moment().format('YYYY-MM-DD HH:mm').toString();
    socket.end(`${now}\n`);


});

server.listen(process.argv[2]);

