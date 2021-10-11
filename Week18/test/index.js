const addBtn = document.getElementById("btn_add_comment");
const commentField = document.getElementById("add_comment");
let arrayComment = []; //массив комментариев

//Вставка аватарки, слушаем изменение в поле <input type="file" class="form-control-file" id="file" value="">
document.getElementById("file").addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        localStorage.setItem('wallpaper', base64String);
        document.getElementById("img_avatar").src = "data:image/png;base64," + base64String;
    };
    reader.readAsDataURL(file);
});

//создание комментария (аватарка + никнем + комментарий)
function createComment(wallpaper, formGroupNickname, add_comment) {
    let div = document.createElement('div');
    div.innerHTML = `<div class="alert alert-dark alert-dismissible fade show" role="alert"  id="comment">
                    <img><img class="card-img-top imgStyle1" id="img_avatar" src=${wallpaper} alt="Avatar">
                    <label>${formGroupNickname}: </label> ${add_comment}</div>`;
    document.body.before(div);
}

//проверяем документ на наличие в нем информации в localStorage
document.addEventListener("DOMContentLoaded", function (event) {
    let nickName = localStorage.getItem('nickName');
    if (nickName != null) {
        document.getElementById("formGroupNickname").value = nickName;
    }

    let avatar = localStorage.getItem('wallpaper');
    if (avatar != null) {
        let avatarImg = document.getElementById("img_avatar");
        avatarImg.src = "data:image/png;base64," + avatar;
    }

    if (localStorage.getItem('comment') != null) {
        arrayComment = JSON.parse(localStorage.getItem('comment'));
        for(let i = 0; i < arrayComment.length; i++){
            createComment(document.getElementById("img_avatar").src, nickName, arrayComment[i]);
        }
    }
});

//проверка комментрия, помещения nickName и комментария в localStorage
addBtn.addEventListener("click", () => {
    let formGroupNickname = document.getElementById("formGroupNickname").value;
    let wallpaper = document.getElementById("img_avatar").src;
    let checkSpam1 = commentField.value.toLowerCase();
    let checkSpam2 = checkSpam1.replace(new RegExp("viagra", 'g'), "***");
    let checkSpam3 = checkSpam2.replace(new RegExp("xxx", 'g'), "***");

    if (!commentField.value) return;
    if (localStorage.getItem('nickName') == null) {
        localStorage.setItem('nickName', formGroupNickname);
    }
    createComment(wallpaper, formGroupNickname, checkSpam3);
    commentField.value = "";

    arrayComment.push(checkSpam3);
    localStorage.setItem('comment', JSON.stringify(arrayComment));
});

//функция срабатывает при нажатии на кнопку очистить, чистит страницу и localStorage от всего
btn_clear_comment.addEventListener("click", () => {
    const commentContainer = document.querySelectorAll(".alert");
    for (let i = commentContainer.length; i--;) {
        commentContainer[i].remove();
    }
    commentField.value = "";
    localStorage.clear();
    document.getElementById("img_avatar").src = "image/avatar.png";
    document.getElementById("formGroupNickname").value = "";
    document.getElementById("file").value = "";
    arrayComment = [];
});