let fs = require('fs');

if (process.argv.length < 3) {
    throw new Error('usage: node fs.js TEXTFILE');
}

let buf = fs.readFileSync(process.argv[2]);

let string = buf.toString();

let count = string.split("\n").length - 1;

console.log(count);
