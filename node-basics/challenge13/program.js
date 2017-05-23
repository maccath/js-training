var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var parsedUrl = url.parse(request.url, true);
    var date = new Date(parsedUrl.query.iso);
    var result = {};

    if (parsedUrl.pathname == '/api/parsetime') {
        result.hour = date.getHours();
        result.minute = date.getMinutes();
        result.second = date.getSeconds();
    }

    if (parsedUrl.pathname == '/api/unixtime') {
        result.unixtime = date.getTime();
    }

    response.end(JSON.stringify(result));
});
server.listen(port);
