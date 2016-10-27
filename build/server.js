const express  = require('express');
const socket   = require('../src/socket.js');
const path     = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

const PORT = process.env.PORT || 3000;

var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', socket);

http.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
