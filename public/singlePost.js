const commentContainer = document.getElementById("commentSection");

function addComment(text){
    const comment = document.createElement("div");
    
    comment.classList.add("comments");
    comment.innerHTML = text;

    commentContainer.appendChild(comment);

    const padding = document.createElement("div");
    padding.classList.add("commentPad");

    commentContainer.appendChild(padding);
}

function getCommentInput(){
    
}