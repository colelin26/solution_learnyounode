let dirname_mod = require('./dirname_mod');

dirname_mod(process.argv[2], process.argv[3], (err, data) => {
    if (err) throw Error(err);
    data.forEach((name) => console.log(name));
})