module.exports = function (socket) {
  socket.broadcast.emit('user:join', {
    name: 'Guest'
  });
};
