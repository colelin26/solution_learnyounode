let bl = require('bl');
let http = require('http');

http.get(process.argv[2], (res) => {
    res.pipe(bl((err, data) => {
        if (err) throw Error(err);
        currentString = data.toString();
        console.log(currentString.length);
        console.log(currentString);
    }))
})