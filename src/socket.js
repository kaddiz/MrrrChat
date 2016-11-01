const SYSTEM_NAME = 'SYSTEM';

module.exports = function (socket) {
  const userName = 'Guest' + Math.floor((Math.random() * 100) + 1);

  let ROOM_NAME;

  socket.on('user:name', () => {
    socket.emit('user:name', userName);
  });

  console.log(`User ${userName} connect.`);

  socket.broadcast.emit('message', {
    id: Date.now(),
    name: SYSTEM_NAME,
    msg: `User ${userName} has joined.`,
    time: new Date()
  });

  socket.on('user:list', () => {
    socket.emit('user:list', userList);
    socket.broadcast.emit('user:list', userList);
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
