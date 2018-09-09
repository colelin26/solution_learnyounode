let path = require('path');
let fs = require('fs');

module.exports = function (dirname, provided_extname, callback) {
        let data = [];
        fs.readdir(dirname, (err, list) => {
            if (err) return callback(err);
            list.forEach(function (val) {
                if (path.extname(val) == `.${provided_extname}`) data.push(val);
            });
            return callback(null, data);
        })
        
}
