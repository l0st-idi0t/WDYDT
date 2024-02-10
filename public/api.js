async function getMessagesCreatedToday() {
  return await (
    await fetch("http://localhost:4000/messages_today", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
  ).json();
}

async function fetchReplies(reply_message_uuid) {
  return await (
    await fetch(
      "http://localhost:4000/fetch_replies?" +
        new URLSearchParams(
          {
            reply_message_uuid: reply_message_uuid,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
          },
        ),
    )
  ).json();
}
async function createMessage(content) {
  await fetch("http://localhost:4000/create_message", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      content: content,
    }),
  });
}
async function createReply(reply_message_uuid, content) {
  await fetch("http://localhost:4000/create_reply", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      reply_message_uuid: reply_message_uuid,
      content: content,
    }),
  });
}
