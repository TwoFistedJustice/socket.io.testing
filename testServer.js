const http = require ('http'); // required to use socket.io with express
const express = require ('express');
const socketIO = require ('socket.io');
const port = 3000;
var app = express ();


var server = http.createServer (app); // will be passed into socketIO()
var io = socketIO (server);


io.on('connection', (socket) => {
  console.log('testServer.js line 13 -- user connected');
  socket.on('join', (room) => {
    socket.join(room);
    io.emit('updateRoomsList',['thing1', 'thing2'] );
    
  });
  
});


server.listen (port, () => {
  console.log (`Tests listening on port ${port}`);
});

module.exports = {server};