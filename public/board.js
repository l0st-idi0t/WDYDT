const notesContainer = document.getElementById("todayNotesContent");

function createNote(id, text) {
  const note = document.createElement("textarea");
  note.setAttribute("readonly", "true");

  note.classList.add("note");
  note.value = text;

  notesContainer.appendChild(note);
}
