postButton.onclick = function (event) {
    event.preventDefault(); 
    //вешаем функцию по событию онКлик к кнопке, а не на самой кнопке написать onclick, потому что нужен event, чтобы сделать event.preventDefault(); (это отменяет стандартное поведение при отправке формы) потому что на самой кнопке type=submit, а это значит, что при нажатии кнопки страница перезагружается
    



    document.getElementById('errorMessage_user_name').innerHTML = "";
    document.getElementById('errorMessage_user_surname').innerHTML = "";
    document.getElementById('errorMessage_birthdate').innerHTML = "";
    document.getElementById('errorMessage_email').innerHTML = "";
    document.getElementById('errorMessage_mobile_number').innerHTML = "";
    document.getElementById('errorMessage_user_password').innerHTML = "";
    document.getElementById('errorMessage_repeat_user_password').innerHTML = "";
    document.getElementById('errorMessage_eula_accepted').innerHTML = "";

    let user_name = document.getElementById('user_name');
    let user_surname = document.getElementById('user_surname');
    let birthdate = document.getElementById('birthdate');
    let email = document.getElementById('email');
    let mobile_number = document.getElementById('mobile_number');
    let user_password = document.getElementById('user_password');
    let repeat_user_password = document.getElementById('repeat_user_password');
    let eula_accepted = document.getElementById('eula_accepted');

    let form = document.getElementsByTagName('form')[0];
    form.isValid = true;


    //валидация поля Имя
    function checkInputUserName() {
        if (user_name.validity.valueMissing) {
            document.getElementById('errorMessage_user_name').innerHTML += "Пожалуйста, укажите Ваше имя<br>";
            form.isValid = false;
            user_name.style.border = '1px solid red';
        } else {
            user_name.style.border = '1px solid green';
        }
    };
    checkInputUserName();


    //валидация поля Фамилия
    function checkInputUserSurname() {
        if (user_surname.validity.valueMissing) {
            document.getElementById('errorMessage_user_surname').innerHTML += "Пожалуйста, укажите Вашу фамилию<br>";
            form.isValid = false;
            user_surname.style.border = '1px solid red';
        } else {
            user_surname.style.border = '1px solid green';
        }
    };
    checkInputUserSurname();


    //валидация поля ДР
    function checkInputBirthdate() {
        if (birthdate.validity.valueMissing) {
            document.getElementById('errorMessage_birthdate').innerHTML += "Пожалуйста, укажите дату Вашего рождения<br>";
            form.isValid = false;
            birthdate.style.border = '1px solid red';
        } else {
            birthdate.style.border = '1px solid green';
        }
    };
    checkInputBirthdate();


    //валидация поля email
    function checkInputEmail() {
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

        if (email.validity.valueMissing) {
            document.getElementById('errorMessage_email').innerHTML += "Пожалуйста, укажите Ваш e-mail<br>";
            form.isValid = false;
            email.style.border = '1px solid red';
        } else if (mailFormat.test(email.value) !== true) {
            document.getElementById('errorMessage_email').innerHTML += "Адрес электронной почты должен содержать символ @ и часть адреса после @<br>";
            form.isValid = false;
            email.style.border = '1px solid red';
        } else {
            email.style.border = '1px solid green';
        }
    };
    checkInputEmail();


    //валидация поля телефон
    function checkInputMobileNumber() {
        if (mobile_number.validity.valueMissing) {
            document.getElementById('errorMessage_mobile_number').innerHTML += "Пожалуйста, укажите Ваш номер мобильного телефона<br>";
            form.isValid = false;
            mobile_number.style.border = '1px solid red';
        } else {
            mobile_number.style.border = '1px solid green';
        };
    };
    checkInputMobileNumber();


    //валидация поля пароль
    function checkInputUserPassword() {
        let user_passwordFormat = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/;

        if (user_password.validity.valueMissing) {
            document.getElementById('errorMessage_user_password').innerHTML += "Введите пароль<br>";
            form.isValid = false;
            user_password.style.border = '1px solid red';
        } else if (user_passwordFormat.test(user_password.value) !== true) {
            document.getElementById('errorMessage_user_password').innerHTML += "Ваш пароль не безопасен, введите не менее 6 символов, содержащих не менее 1 цифры, 1 заглавной буквы и 1 специального символа(!,@,$,&,#,*)<br>";
            form.isValid = false;
            user_password.style.border = '1px solid red';
        } else {
            user_password.style.border = '1px solid green';
        };
    };

    checkInputUserPassword();


    //валидация поля повторите пароль
    function checkInputRepeatUserPassword() {

        if (repeat_user_password.validity.valueMissing) {
            document.getElementById('errorMessage_repeat_user_password').innerHTML += "Необходимо ввести пароль еще раз<br>";
            form.isValid = false;
            repeat_user_password.style.border = '1px solid red';
        } else if (repeat_user_password.value != user_password.value) {
            document.getElementById('errorMessage_repeat_user_password').innerHTML += "Пароль не совпадает<br>";
            form.isValid = false;
            repeat_user_password.style.border = '1px solid red';
        } else {
            repeat_user_password.style.border = '1px solid green';
        };
    };

    checkInputRepeatUserPassword();


    //валидация поля соглашения
    function checkInputEulaAccepted() {
        if (eula_accepted.checked == false) {
            document.getElementById('errorMessage_eula_accepted').innerHTML += "Пожалуйста, внимательно прочтите Пользовательское соглашение и примите его условия, поставив галочку<br>";
            form.isValid = false;
            eula_accepted.style.boxShadow = '0 0 5px 1px red';
        } else {
            eula_accepted.style.boxShadow = '0 0 5px 1px green';
        };

    }
    checkInputEulaAccepted();


    //если вся форма заполнена верно:
    if (form.isValid == true) {
        let welcome_user = user_name.value;
        alert(`Добро пожаловать, ${welcome_user}!`)



    //Отправка данных с помощью POST
    
    //формируем объект с теми параметрами, которые хотим передать 
    let user = {
    user_name: document.getElementById('user_name').value,
    user_surname: document.getElementById('user_surname').value,
    birthdate: document.getElementById('birthdate').value,
    email: document.getElementById('email').value,
    mobile_number: document.getElementById('mobile_number').value,
    user_password: document.getElementById('user_password').value,
    eula_accepted: document.getElementById('eula_accepted').checked
    }
    console.log(user)
    fetch("http://httpbin.org/post",
    {
        method: "POST",//по умолчанию используется GET, поэтому POST надо конкретно прописать
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json; charset=utf-8"//отправляем в формате JSON
        },
    })
    .then(response => response.json())
    .then(user => {
    console.log(user);
    })
    .catch(error => console.log(error));
    

    //очистка всех полей перед новым заполнением
    user_name.value = "";
    user_surname.value = "";
    birthdate.value = "";
    email.value = "";
    mobile_number.value = "";
    user_password.value = "";
    user_password.value = "";
    repeat_user_password.value = "";
    eula_accepted.checked = false;

    document.getElementById('errorMessage_user_name').innerHTML = "";
    document.getElementById('errorMessage_user_surname').innerHTML = "";
    document.getElementById('errorMessage_birthdate').innerHTML = "";
    document.getElementById('errorMessage_email').innerHTML = "";
    document.getElementById('errorMessage_mobile_number').innerHTML = "";
    document.getElementById('errorMessage_user_password').innerHTML = "";
    document.getElementById('errorMessage_repeat_user_password').innerHTML = "";
    document.getElementById('errorMessage_eula_accepted').innerHTML = "";
    }
}