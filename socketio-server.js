const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app).listen(3000); // create a http server 
const io = require("socket.io")(server); //pass express server obj as param.

app.use(express.static("./public"));

io.on("connection", (socket) => {
    socket.on("chat", function(message) {
        socket.broadcast.emit("message", message);
    });
    socket.emit("message", "Welcome to  Web Chat using SocketIO");
});

console.log("Starting socketIO Web Chat - http://localhost:3000");