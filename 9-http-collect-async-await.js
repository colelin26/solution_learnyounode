let bl = require('bl');
let http = require('http');


let strings = [];

function readData(url, i) {
    http.get(url, (res) => {
        res.pipe(bl((err, data) => {
            if (err) throw Error(err);
            currentString = data.toString();
            strings[i-2] = currentString;
        }))
    })
}

async function printData() {

    for (let i = 2; i <= 4; i++) {
       await  readData(process.argv[i], i);
    }

    for (let i = 0; i <= 2; i++) {
         console.log(strings[i]);
    }

}

printData();

