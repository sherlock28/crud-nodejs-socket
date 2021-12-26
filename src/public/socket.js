const socket = io("http://localhost:3000");

const saveNote = (note) => {
  socket.emit("client:newnote", note);
};

const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};

socket.on("server:newnote", (note) => {
  appendNote(note);
  clearForm();
});

socket.on("server:loadnotes", renderNotes);
