const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
  window.location.href = "/board.html";
});

const note = document.getElementById("stickyNote");
const commentContainer = document.getElementById("commentSection");
const replyForm = document.getElementById("replyForm");
const uuid = new URLSearchParams(window.location.search).get("uuid");

function addComment(text) {
  const comment = document.createElement("div");

  comment.classList.add("comments");
  comment.innerHTML = text;

  commentContainer.appendChild(comment);

  const padding = document.createElement("div");
  padding.classList.add("commentPad");

  commentContainer.appendChild(padding);
}

replyForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const replyInputValue = document.getElementById("replyInput").value;

  if (replyInputValue.trim() !== "") {
    await addComment(replyInputValue);

    document.getElementById("replyInput").value = "";
  }
});

(async () => {
  const messages = await getMessagesCreatedToday();
  const message = messages.find((message) => message["uuid"] === uuid);

  note.appendChild(document.createElement("p")).innerHTML = message["content"];

  const replies = await fetchReplies(uuid);
  for (const reply of replies) {
    addComment(reply["content"]);
  }
})();
