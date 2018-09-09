let fs = require('fs');

if (process.argv.length < 3) {
    throw new Error('usage: node fs.js TEXTFILE');
}

fs.readFile(process.argv[2], countNewline);

function countNewline(err, fileData) {
    let string = fileData.toString();
    let count = string.split("\n").length - 1;
    console.log(count);

}



