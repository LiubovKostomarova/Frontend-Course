let storedArray = []

// Шаг 1: нам нужно доставать данные из формы
document.getElementById('contact_form').onsubmit = (e) =>{
    //По умолчанию, отправка формы означает запрос на сервер. Чтобы это остановить, выполняем команду:
    e.preventDefault()
    // И дальше можем выполнять свой скрипт
    const name = document.getElementById('name').value
    const tel = document.getElementById('tel').value
    const avatar = document.getElementById('card__image_input').src

    if(name && avatar && tel){
        // Генерируем карточку и добавляем ее на страницу
        const newCard = generateCard(name, avatar, tel)
        document.querySelector('#contacts').appendChild(newCard)

        //Добавляем в хранилище
        addElementToLocalStorage(name, avatar, tel)

        // Очищаем форму
        document.getElementById('contact_form').reset()
        document.getElementById('card__image_input').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaDTNbW8gPjAVwm_z9I0ZM0cPAJlyPCJksw&usqp=CAU'
    }
}

//Вставка аватарки, слушаем изменение в поле <input type="file" class="form-control-file" id="file" value="">
document.getElementById("avatar").addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    // при успешном завершении операции чтения
    reader.onload = (function (file) {
        return function (e) {
            const r = e.target;
            // получаем содержимое файла, состояние чтения, ошибки(или null)
            const avatar = r.result

            document.getElementById("card__image_input").src = avatar
        };
    })(file);

    reader.readAsDataURL(file);
})


//Шаг 2: Генерация карточки
const generateCard = (name, avatar, tel) =>{

    //Рисуем карточку
    let card = document.createElement('div')
    card.classList.add("card");

    let card__image = document.createElement('img')
    card__image.classList.add("card__image");
    card__image.src = avatar

    let card__main = document.createElement('div')
    card.classList.add("card__main")

    let h3 = document.createElement('h3')
    h3.innerText = name

    let phone = document.createElement('p')
    phone.innerText = tel

    card__main.appendChild(h3)
    card__main.appendChild(phone)

    card.appendChild(card__image)
    card.appendChild(card__main)

    return card
}

//Шаг 3: Работа с localStorage
//Важно помнить, что в веб-хранилище все данные-это строки

getArrFromLocalStorage = () =>{
    let collection = JSON.parse(localStorage.getItem("contactsCollection"))
    if(collection){
        storedArray = collection
    }
}

setArrToLocalStorage = () =>{
    localStorage.setItem("contactsCollection", JSON.stringify(storedArray));
}

addElementToLocalStorage = (name, avatar, tel) => {
    storedArray.push([name, avatar, tel])
    setArrToLocalStorage()
}

//Шаг 4: Нужно получать коллекцию из хранилица при загрузке страницы
document.addEventListener("DOMContentLoaded",function(){
    getContacts()
})

function getContacts() {
    //Находим список всех контактов
    getArrFromLocalStorage()
   

    for( let i = 0; i < storedArray.length; i++){
        //Храним контакты в таком виде:
        // [
        //     [name, avatar, tel],
        //     [name, avatar, tel],
        //     ....
        // ]

        const newCard = generateCard(storedArray[i][0],storedArray[i][1], storedArray[i][2] )
        document.querySelector('#contacts').appendChild(newCard)
    }
}

