// implementacja protokolu w postaci modulu http :
//inicjacja serwera http :
var http = require('http');
var server = http.createServer(); //metoda
// .on - nasluchiwanie na zdarzenie
server.on('request', function (request, response) {});
// wykonywanie czynnosci dzieki  request i response

// wysylanie odpowiedzi protokolem http :

server.on('request', function (request, response) {
    response.write('Hello world!');
    response.end();
});

// port jaki ma nasluchiwac bez przerwy :
server.listen(9000);
