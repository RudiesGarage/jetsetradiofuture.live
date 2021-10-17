var http = require('http');
var fs = require('fs');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/index.html') {
        fs.readFile('/index.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    } else {
        res.write('Hello World!');
        res.end();
    }
}).listen(3000, function() {

    // The server object listens on port 3000
    console.log("server start at port 3000");
});