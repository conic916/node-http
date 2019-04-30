
var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/hello world') {
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        // First I want to read the file
        fs.readFile('./index.html', function (error, data) {
            if (error) throw error;
            response.write(data);
            response.end();
        });
    }   else {
        response.setHeader('Content-Type', 'chatton.jpg; charset=utf-8');
        fs.readFile('./chatton.jpg', function (error, data) {
            if (error) throw error;
            response.statusCode = 404;
            response.write(data);
            response.end();
        });
    }
});

// port jaki ma nasluchiwac :
server.listen(9000);