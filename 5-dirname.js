let fs = require('fs');
let path = require('path');

fs.readdir(process.argv[2], filterExt);

function filterExt(err, list) {
    if (err) throw Error('something wrong here');
    list.forEach(function(val) {
        if (path.extname(val) == `.${process.argv[3]}`) console.log(val); 
    });
}


