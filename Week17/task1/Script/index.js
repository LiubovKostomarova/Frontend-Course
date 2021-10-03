function check() {

    let fullName = document.getElementById('name').value;

    let nameWithoutSpaces = fullName.trim(fullName);

    let arr = nameWithoutSpaces.split(" ");

    let userName = arr[0];
    let userNameBigLetter = userName[0].toUpperCase() + (userName.slice(1)).toLowerCase();

    document.getElementById('user_name').value = userNameBigLetter;

    let userSurname = arr[1];
    let userSurnameBigLetter = userSurname[0].toUpperCase() + (userSurname.slice(1)).toLowerCase();

    document.getElementById('user_surname').value = userSurnameBigLetter;

    let userMiddleName = arr[2];
    let userMiddleNameBigLetter = userMiddleName[0].toUpperCase() + (userMiddleName.slice(1)).toLowerCase();

    document.getElementById('user_middle_name').value = userMiddleNameBigLetter;

};