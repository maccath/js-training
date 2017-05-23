var dir = process.argv[2];
var ext = process.argv[3];

var mymodule = require('./module.js')

mymodule(dir, ext, function (err, data) {
    if (err) {
        console.log(err);
        return;
    }

    data.forEach(function (item) {
        console.log(item);
    });
});