var http = require('http');
var loc = process.argv[2];

http.get(loc, function (response) {
    var string = '';
    response.setEncoding('utf8');
    response.on("data", function (data) {
        string += data;
    });
    response.on("end", function (data) {
        console.log(string.length);
        console.log(string);
    })
});