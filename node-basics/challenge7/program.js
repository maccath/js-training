var http = require('http');
var loc = process.argv[2];

http.get(loc, function (response) {
    response.setEncoding('utf8');
    response.on("data", function (data) {
        console.log(data);
    })
});