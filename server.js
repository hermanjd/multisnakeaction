var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(5000, function(){
  console.log('starting the fuccen server on port 50000000000');
}


stdin.addListener("data", function(d) {
	var message = d.toString().trim();
	if(message == "startgame"){
		newGame();
		console.log("Game Server Started");
	}
});