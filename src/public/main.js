const notesForm = document.querySelector("#notesForm");

notesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const note = {
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
  };

  if (savedId) {
    updateNote(note, savedId);
    savedId = "";
  } else {
    saveNote(note);
  }
});
