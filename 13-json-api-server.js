let http = require('http');
let url = require('url');

let server = http.createServer((req, res) => {
  if (req.method != 'GET') res.end('need a POST request');

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  console.log((url.parse(req.url, true)));
  let time = new Date(url.parse(req.url, true).query.iso);
  if (((url.parse(req.url, true))).pathname === '/api/unixtime') {
    let unixTime = {
      unixtime: time.getTime() ,
    };
    res.end(JSON.stringify(unixTime));

  } else {
    let timeObj = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    }
    res.end(JSON.stringify(timeObj));
  }
})

server.listen(process.argv[2]);
