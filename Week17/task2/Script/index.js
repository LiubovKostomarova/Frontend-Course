function checkSpam() {
    let comment = document.getElementById('comment').value;
    let filteredComment = comment.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
    let finalComment = document.getElementById('comment_final');
    finalComment.innerHTML += filteredComment + "<br/>";
}

btn.addEventListener("click", clearInput);

function clearInput() {
    document.getElementById('comment').value = "";
}

//Variant 2 using string.replace function

/*function checkSpam() {
    let comment = document.getElementById('comment').value;
    let filteredComment = comment.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
    let finalComment = document.getElementById('comment_final');
    finalComment.innerHTML += filteredComment + "<br/>";
}

btn.addEventListener("click", clearInput);

function clearInput() {
    document.getElementById('comment').value = "";
}*/


//Variant 3 using regexp.search function

/*function checkSpam() {
    let comment = document.getElementById('comment').value;
    if (comment.match(/viagra/gi) || comment.match(/xxx/gi)) {
        let replacement = "***";
        let correctComment = comment.replace(/viagra/ig, replacement).replace(/xxx/ig, replacement);

        document.getElementById('comment_final').innerHTML = correctComment;
    }
    else {
        document.getElementById('comment_final').innerHTML = comment;
    }
    document.getElementById('comment').value = "";
};*/