let notes = []; 
let author;

document.getElementById('btn_addNote').addEventListener('click', addNote);

function ValidateName (str){
    if(document.getElementById('errorMsg') != null) {
        document.getElementById('errorMsg').remove();
        str.classList.remove('inputError');
    } 
    let nameFormat = /^(?:[А-ЯЁA-Z][а-яёa-z]+(?:-[А-ЯЁA-Z]?[а-яёa-z]+)?(?:[ ]|$)){1}(?:[Оо]глы|[Гг]ызы)?$/;
    if(str.value.match(nameFormat) && str.value != null){
        return true;
    } else {
        str.classList.add('inputError');
        let errorMsg = document.createElement('p');
            errorMsg.innerText = 'Please, include only letters and your name should be longer than 3 characters';
            errorMsg.classList.add('errTxt');
            errorMsg.id = 'errorMsg';
        document.getElementById('author').append(errorMsg);
    }
}
 //after reloading a page
document.addEventListener("DOMContentLoaded", function (event) { 
    let addedNote = localStorage.getItem('note'); 
        if (addedNote != null) { 
            notes = JSON.parse(addedNote); 
        }

        if (notes.length > 0) {
            for (let n of notes) {
            document.getElementById("notes__list").innerHTML += `<div>${n}<div> <br>`;
            } 
        } 
});

function addNote() {
    let note = document.getElementById("newNote__input"); 
    if(document.getElementById('errMsg') != null) {
        document.getElementById('errMsg').remove();
        note.classList.remove('inputError');
    } 
    if(note.value == '' || note.value == null || document.getElementById('author') == null){
        note.classList.add('inputError');
        let errMsg = document.createElement('p');
            errMsg.innerText = 'You should fill all the fields';
            errMsg.classList.add('errTxt');
            errMsg.id = 'errMsg';
        document.getElementById('newNote').append(errMsg);
    } else {
        author = document.getElementById('author__input').value
        let time = new Date();
        let strTime = `${time.getHours()}:${time.getMinutes()} ${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`;
        let noteText = `${author} (${strTime}): ${note.value}`;
        notes.push(noteText);
        localStorage.setItem('note', JSON.stringify(notes)); //создание ключа и значения в хранилище, значение берется из массива, который сначала преобразуем в строку
        document.getElementById("notes__list").innerHTML += `<div>${noteText}<div> <br>`;
    }
   
}