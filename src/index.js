import express from "express";
import { Server as websocketServer } from "socket.io";
import http from "http";
import { v4 as uuid } from "uuid";

let notes = [];

const app = express();
const httpServer = http.createServer(app);
const io = new websocketServer(httpServer);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("New connection:", socket.id);

  socket.emit("server:loadnotes", notes);

  socket.on("client:newnote", (data) => {
    const note = {
      id: uuid(),
      ...data,
    };
    notes.push(note);
    io.emit("server:newnote", note);
  });

  socket.on("client:deletenote", (id) => {
    notes = notes.filter((note) => note.id !== id);
    io.emit("server:loadnotes", notes);
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
