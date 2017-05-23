var net = require('net');
var port = process.argv[2];

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
};

var server = net.createServer(function (socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getUTCMonth() + 1).pad(2);
    var day = (date.getDate()).pad(2);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    socket.end(year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + "\n");
});
server.listen(port);
