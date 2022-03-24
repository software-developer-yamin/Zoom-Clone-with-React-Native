const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
     console.log("Someone Connected");
     socket.on("join-room", ({ roomId, userName }) => {
          console.log("User joined room");
          console.log(userName, roomId);
     });
});

server.listen(port, () => {
     console.log(`Server is up on port ${port}!`)
});