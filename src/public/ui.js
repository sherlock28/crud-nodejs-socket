const notesList = document.querySelector("#notesList");

const appendNote = (note) => {
  notesList.innerHTML += `
        <div class="card card-body rounded-0 mb-2">
          <div class="d-flex justify-content-between">
            <h1 class="h3 card-title">${note.title}</h1>

            <div>
              <button class="btn btn-danger">Delete</button>
              <button class="btn btn-secondary">Update</button>
            </div>

          </div>
          <p>${note.description}</p>
        </div>
    `;
};

const clearForm = () => {
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
};
