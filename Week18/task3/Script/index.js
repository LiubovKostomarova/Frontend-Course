/*function checkSpam() {
    let comment = document.getElementById('comment').value;
    let filteredComment = comment.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
    let finalComment = document.getElementById('comment_final');
    finalComment.innerHTML += filteredComment + "<br/>";
}

btn.addEventListener("click", clearInput);

function clearInput() {
    document.getElementById('comment').value = "";
}/*

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


const addBtn = document.getElementById("btn_add_comment");
const commentField = document.getElementById("comment");
let arrayComment = []; //array with comments

//Inserting a profile picture. An example from stackoverflow
document.getElementById("file").addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        localStorage.setItem('wallpaper', base64String);
        document.getElementById("img_profile").src = "data:image/png;base64," + base64String;
    };
    reader.readAsDataURL(file);
});

//create a comment
function createComment(wallpaper, author, comment) {
    let div = document.createElement('div');
    div.innerHTML = `<div class="alert alert-dark alert-dismissible fade show" role="alert"  id="comment">
                    <img><img class="card-img-top imgStyle1" id="img_avatar" src=${wallpaper} alt="Avatar">
                    <label>${author}: </label> ${comment}</div>`;
    document.body.before(div);
}

//see whether we have any saved info in localStorage
document.addEventListener("DOMContentLoaded", function (event) {
    let onlineName = localStorage.getItem('onlineName');
    if (onlineName != null) {
        document.getElementById("author").value = onlineName;
    }

    let profilePicture = localStorage.getItem('wallpaper');
    if (profilePicture != null) {
        let profileImg = document.getElementById("img_profile");
        profileImg.src = "data:image/png;base64," + profilePicture;
    }

    if (localStorage.getItem('comment') != null) {
        arrayComment = JSON.parse(localStorage.getItem('comment'));
        for (let i = 0; i < arrayComment.length; i++) {
            createComment(document.getElementById("img_profile").src, onlineName, arrayComment[i]);
        }
    }
});

//check comment and putting name and comment in localStorage
addBtn.addEventListener("click", () => {
    let author = document.getElementById("author").value;
    let wallpaper = document.getElementById("img_profile").src;
    let checkSpam1 = commentField.value.toLowerCase();
    let checkSpam2 = checkSpam1.replace(new RegExp("viagra", 'g'), "***");
    let checkSpam3 = checkSpam2.replace(new RegExp("xxx", 'g'), "***");

    if (!commentField.value) return;
    if (localStorage.getItem('onlineName') == null) {
        localStorage.setItem('onlineName', author);
    }
    createComment(wallpaper, author, checkSpam3);
    commentField.value = "";

    arrayComment.push(checkSpam3);
    localStorage.setItem('comment', JSON.stringify(arrayComment));
});

//clear everything, also remove info from localStorage
btn_clearInfo.addEventListener("click", () => {
    const commentContainer = document.querySelectorAll(".alert");
    for (let i = commentContainer.length; i--;) {
        commentContainer[i].remove();
    }
    commentField.value = "";
    localStorage.clear();
    document.getElementById("img_profile").src = "";
    document.getElementById("author").value = "";
    document.getElementById("file").value = "";
    arrayComment = [];
});