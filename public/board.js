const notesContainer = document.getElementById("todayNotesContent");

function createNote(id, text) {
  const note = document.createElement("button");
 
  note.setAttribute("onclick", "placeholder()")
  note.innerHTML = text;
  note.classList.add("note");

  notesContainer.appendChild(note);
}


(async() => {
  const messages = await getMessagesCreatedToday();
  for (const message of messages) {
    createNote(message["uuid"], message["content"]);
  }
})()