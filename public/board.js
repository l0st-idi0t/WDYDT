const notesContainer = document.getElementById("todayNotesContent");

// function createNote(id, text) {
//   const note = document.createElement("textarea");
//   note.setAttribute("readonly", "true");

//   note.classList.add("note");
//   note.value = text;

//   notesContainer.appendChild(note);
// }

function createNote(id, text) {
  const note = document.createElement("button");
 
  note.setAttribute("onclick", "placeholder()")
  note.innerHTML = text;
  note.classList.add("note");

  notesContainer.appendChild(note);
}