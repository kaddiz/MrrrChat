const SYSTEM_NAME = 'SYSTEM';

var userList = [];

module.exports = function (socket) {
  const userName = 'Guest' + Math.floor((Math.random() * 100) + 1);
  userList.push(userName);

  console.log(`User ${userName} connect.`);
  console.log(userList);

  socket.on('user:name', () => {
    socket.emit('user:name', userName);
  });

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
    let index = userList.indexOf(userName);
    userList.splice(index, 1);

    console.log(`User ${userName} disconnected.`);
    console.log(userList);

    socket.broadcast.emit('user:list', userList);  

    socket.broadcast.emit('message', {
      id: Date.now(),
      name: SYSTEM_NAME,
      msg: `User ${userName} has disconnected.`,
      time: new Date()
    });
  });

};
