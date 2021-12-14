const socket = io("http://localhost:3000");

const saveNote = (note) => {
  socket.emit("client:newnote", note);
};

socket.on("server:newnote", (note) => {
  appendNote(note);
  clearForm();
});
