const notesContainer = document.getElementById("box");

function createNote(id, value) {
    const note = document.createElement("textarea");
    note.setAttribute("readonly", "true");

    note.classList.add("note");
    note.value = value;

    return note;
}
