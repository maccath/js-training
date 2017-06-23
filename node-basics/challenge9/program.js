var http = require('http');
var locs = [process.argv[2], process.argv[3], process.argv[4]];

locs.forEach(loc) {
    http.get(loc1, function (response) {
        response.setEncoding('utf8');
        string = '';
        response.on("data", function (data) {
            string += data;
        });
        response.on("end", function () {

        }
}
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