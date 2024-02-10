const notesContainer = document.getElementById("todayNotesContent");
const encouragementContainer = document.getElementById("encouragementContent");


function createNote(id, content) {
  const note = document.createElement("button");
 
  note.setAttribute("onclick", "placeholder()")
  note.innerHTML = content;
  note.classList.add("note");

  notesContainer.appendChild(note);
}



function createEncouragement(id, content) {
  const encouragement = document.createElement("button");
 
  encouragement.setAttribute("onclick", "placeholder()")
  encouragement.innerHTML = content;
  encouragement.classList.add("note");

  encouragementContainer.appendChild(encouragement);
}



(async() => {
  const messages = await getMessagesCreatedToday();
  for (const message of messages) {
    createNote(message["uuid"], message["content"]);
  }
})()