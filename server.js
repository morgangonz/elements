//first thing when building a server
var http = require('http');
//next define a var for port
var PORT = 8080;
//request and response objects are passed through the handleRequests
function handleRequest(request, response) {
	console.log('Incoming Request!');

	response.end("It works! Path hit: " + request.url);
}
	//ends the connection
}
//create an http server. create server takes in one handler
var server = http.createServer(handleRequest);
//need to tell the server to liste, and requires port
server.listen(PORT, function() {
	console.log('Server is listening on: http://localhost:' + PORT);
})