const express  = require('express');
// const socket   = require('./socket.js');
const path     = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

const PORT = process.env.PORT || 3000;

var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
  var userName = 'Guest' + Math.floor((Math.random() * 100) + 1);
  var now = new Date();
  console.log(`User ${userName} connected.`);

  socket.emit('server:name', userName);

  socket.broadcast.emit('user:join', {
    id: Date.now(),
    name: 'System',
    msg: `User ${userName} has joined.`,
    time: now.toLocaleTimeString()
  });

  socket.on('message', (data) => {
    // console.log(`${data.name}: ${data.msg}`);
    socket.broadcast.emit('message', data);
    socket.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log(`User ${userName} disconnected.`);
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
