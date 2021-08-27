let ageTable = document.getElementById('age-table');
console.log(ageTable)

let labels = document.getElementsByTagName('label');
console.log(labels);


let search = document.getElementsByTagName('form').getElementsByName('search');
console.log(search);

function func() {
    document.location.href = "https://www.yandex.ru";
}

function myFunction() {
    document.getElementsByTagName('input').reset();
}



let showMessage = () => {
    let name = prompt('What is your name?', "Kate");
    alert(`Hello, ${name}!`);
}

