var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.end("selamlar");
});

io.on('connection', function(socket){
    console.log('a user connected');
  socket.on('pubgName', function(data){
    console.log('User PUBG name is ' + JSON.stringify(data.pubgname));
  });
});

http.listen(port, function(){
  console.log('listening on *:3000');
});