module.exports = function (socket) {
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
};
