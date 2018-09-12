let http = require('http');
let fs = require('fs');


let server = http.createServer((req, res) => {
    let src = fs.createReadStream(process.argv[3]);
    src.pipe(res);
})

server.listen(process.argv[2]);