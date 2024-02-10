const submitBtn = document.querySelector("#submit")
const accomplishmentTextInput = document.querySelector("#accomplishment")

submitBtn.addEventListener("click", async () => {
    const accomplishment = accomplishmentTextInput.value;

    await createMessage(accomplishment);

    window.location.href = "/board.html";
})