const SYSTEM_NAME = 'SYSTEM';

module.exports = function (socket) {

  socket.emit('user:name', `Guest${Math.floor((Math.random() * 100) + 1)}`);

  socket.broadcast.emit('message', {
    id: Date.now(),
    name: SYSTEM_NAME,
    msg: `User ${userName} has joined.`,
    time: new Date()
  });

  socket.on('message', (data) => {
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
