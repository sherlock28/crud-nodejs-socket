const appendNote = (note) => {
  const noteElement = document.createElement("div");
  noteElement.classList.add("note");
  noteElement.innerHTML = `
        <div class="note-header">
        <div class="note-title">${note.title}</div>
        <div class="note-date">${note.date}</div>
        </div>
        <div class="note-body">${note.body}</div>
    `;
  document.querySelector(".notes").appendChild(noteElement);
};
