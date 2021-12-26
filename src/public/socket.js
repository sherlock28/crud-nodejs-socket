const socket = io("http://localhost:3000");

const saveNote = (note) => {
  socket.emit("client:newnote", note);
};

const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};

const getNote = (id) => {
  socket.emit("client:getNote", id);
};

const updateNote = (note, id) => {
  socket.emit("client:updatenote", { note, id });
  clearForm();
};

socket.on("server:newnote", (note) => {
  appendNote(note);
  clearForm();
});

socket.on("server:loadnotes", renderNotes);

socket.on("server:pushNote", (note) => {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  title.value = note.title;
  description.value = note.description;
  savedId = note.id;
});
