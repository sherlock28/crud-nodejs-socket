import express from "express";
import { Server as websocketServer } from "socket.io";
import http from "http";
import { v4 as uuid } from "uuid";

const notes = [];

const app = express();
const httpServer = http.createServer(app);
const io = new websocketServer(httpServer);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("New connection:", socket.id);

  socket.on("client:newnote", (data) => {
    notes.push({
      id: uuid(),
      ...data,
    });
    io.emit("server:newnote", notes);
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
