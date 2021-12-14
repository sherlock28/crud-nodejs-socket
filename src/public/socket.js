const saveNote = (note) => {
  socket.emit("client:newnote", note);
};

socket.on("server:newnote", (note) => {
  notesList.innerHTML += `
        <li>
            <h3>${note[0].title}</h3>
            <p>${note[0].description}</p>
        </li>
    `;
});
