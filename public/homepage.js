const submitBtn = document.querySelector("#submit")
const accomplishmentTextInput = document.querySelector("#accomplishment")
console.log("helo")
submitBtn.addEventListener("click", async () => {
    const accomplishment = accomplishmentTextInput.value;
    console.log(accomplishment)
    await fetch("http://localhost:4000/create_message", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'      
        },
        method: "POST",
        body: JSON.stringify({
            "content": accomplishment
        })
    })

    console.log("DONE")

})