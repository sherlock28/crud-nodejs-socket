const notesList = document.querySelector("#notesList");

const noteUI = (note) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card card-body rounded-0 animate__animated animate__fadeInUp mb-2">
      <div class="d-flex justify-content-between">
          <h1 class="card-title h3">${note.title}</h1>
          <div>
              <button class="btn btn-danger delete" data-id="${note.id}">Delete</button>
              <button class="btn btn-secondary update" data-id="${note.id}">Update</button>
          </div>
      </div>
      <p>${note.description}</p>
  </div>
`;

  const btnDelete = div.querySelector(".delete");

  btnDelete.addEventListener("click", () => deleteNote(btnDelete.dataset.id));

  return div;
};

const clearForm = () => {
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
};

const renderNotes = (notes) => {
  notesList.innerHTML = "";
  notes.forEach((note) => {
    notesList.append(noteUI(note));
  });
};

const appendNote = (note) => {
  notesList.append(noteUI(note));
};