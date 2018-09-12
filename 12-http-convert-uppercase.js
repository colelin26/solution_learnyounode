let http = require('http');
let map = require('through2-map');

let server = http.createServer((req, res) => {
    if (req.method != 'POST') res.end('need a POST request');
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
})

server.listen(process.argv[2]);