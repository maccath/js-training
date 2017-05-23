var http = require('http');
var loc1 = process.argv[2];
var loc2 = process.argv[3];
var loc3 = process.argv[4];

var string = '';

http.get(loc1, function (response) {
    response.setEncoding('utf8');
    string = '';
    response.on("data", function (data) {
        string += data;
    });
    response.on("end", function () {
        console.log(string);
        string = '';
        http.get(loc2, function (response) {
            response.setEncoding('utf8');
            response.on("data", function (data) {
                string += data;
            });
            response.on("end", function () {
                console.log(string);
                string = '';
                http.get(loc3, function (response) {
                    response.setEncoding('utf8');
                    response.on("data", function (data) {
                        string += data;
                    });
                    response.on("end", function () {
                        console.log(string);
                    })
                });
            });
        });
    });
});