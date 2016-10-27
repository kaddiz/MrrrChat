const SYSTEM_NAME = 'SYSTEM';

module.exports = function (socket) {
  var userName = 'Guest' + Math.floor((Math.random() * 100) + 1);
  console.log(`User ${userName} connected.`);

  socket.on('server:name', () => {
    socket.emit('server:name', userName);
  });

  socket.broadcast.emit('message', {
    id: Date.now(),
    name: SYSTEM_NAME,
    msg: `User ${userName} has joined.`,
    time: new Date()
  });

  socket.on('message', (data) => {
    // console.log(`${data.name}: ${data.msg}`);
    socket.broadcast.emit('message', data);
    socket.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log(`User ${userName} disconnected.`);
    socket.broadcast.emit('message', {
      id: Date.now(),
      name: SYSTEM_NAME,
      msg: `User ${userName} has disconnected.`,
      time: new Date()
    });
  });
};
