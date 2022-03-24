const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000;
const users = [];

const addUser = (userName, roomId) => {
     users.push({ userName: userName, roomId: roomId });
};

const userLeave = (userName) => {
     users = users.filter(user => (user.userName != userName));
};

const getRoomUsers = (roomId) => users.filter(user => (user.roomId == roomId));

io.on('connection', (socket) => {
     console.log("Someone Connected");
     socket.on("join-room", ({ roomId, userName }) => {
          console.log("User joined room");
          console.log('roomId:', roomId, 'userName:', userName);
          socket.join(roomId);
          addUser(userName, roomId);
          socket.to(roomId).emit("user-connected", userName);

          io.to(roomId).emit("all-users", getRoomUsers(roomId));

          socket.on("disconnect", () => {
               console.log("disconnect");
               socket.leave(roomId);
               userLeave(userName);
               io.to(roomId).emit("all-users", getRoomUsers(roomId));
          });
     });
});



app.get("/", (req, res) => {
     res.send("Hello world!");
})

server.listen(port, () => {
     console.log(`Server is up on port ${port}!`)
});