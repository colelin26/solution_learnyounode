let bl = require('bl');
let http = require('http');


let strings = [];
let count = 0;

function readData(url, i) {
    http.get(url, (res) => {
        res.pipe(bl((err, data) => {
            if (err) throw Error(err);
            currentString = data.toString();
            strings[i-2] = currentString;
            count++;
            if (count == 3) {
                for (let j = 0; j < 3; j++) {
                    //console.log(strings.length);
                    console.log(strings[j]);
                }
            }
        }))
    })
}

for (let i = 2; i <= 4; i++) {
    readData(process.argv[i], i);
}



