let http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.on('error', (err) => {throw Error(err)});
    res.on('data', (data) => console.log(data));
    res.on('end', () => {});
}).on('error', (err) => {throw Error(err)});
