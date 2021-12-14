const socket = io("http://localhost:3000");

const notesForm = document.querySelector("#notesForm");
const notesList = document.querySelector("#notesList");

notesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const note = {
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
  };

  saveNote(note);
});
