const showPassword = document.querySelectorAll('.showPassword');
const btnOk = document.getElementById('btn_ok');
const btnAgain = document.getElementById('btn_again');


document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("btn_again").setAttribute("disabled", "disabled");//сделать кнопку Попробовать снова неактивной
});

//С помощью цикла forEach пройдемся по элементу с паролем и повесим обработчик событий 
//addEventListener, который отловит клик на чекбоак Показать пароль и сработает функция
showPassword.forEach(item => item.addEventListener('click', function (event) {
    let input = this.closest('.inputs').querySelector('.password');
    if (input.type === 'password') {
        input.type = 'text';   
    } else {
        input.type = 'password';
    }
}));

let validateNickName = (nickNameField) => {
    let nickNameFormat = /^[a-z0-9_-]{3,16}$/;
    if (nickNameField.match(nickNameFormat)) {
        return true;
    }
    else {
        alert("Ваш Никнем введен некорректно! (Допустимы только строчные латинские буквы, цифры, нижнее подчеркивание, тире. Кол-во символов от 3 до 16.)");
        document.getElementById('formGroupNickname').value = "";
        return false;
    }
}

let validateEmail = (emailField) => {
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (emailField.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно! (Пример: example-678@mail.com)");
        document.getElementById('exampleInputEmail').value = "";
        return false;
    }
}

let validatePassword = (passwordField) => {
    let passwordFormat = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (passwordField.match(passwordFormat)) {
        return true;
    }
    else {
        alert("Ваш пароль некорректен! Пароль должен содержать строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов" );
        document.getElementById('exampleInputPassword1').value = "";
        document.getElementById('showInputPassword').checked = false;
        document.querySelector('.password').type = 'password';
        return false;
    }
    
}

let validatePhone = (phoneField) => {
    let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
    if (phoneField.match(phoneFormat)) {
        return true;
    }
    else {
        alert("Ваш телефон некорректен! Примеры: +7 xxx xxx xx xx" );
        document.getElementById('exampleInputTel').value = ""
        return false;
    }
}

let clearInput = () => {
    document.getElementById('formGroupNickname').value = "";
    document.getElementById('exampleInputEmail').value = "";
    document.getElementById('exampleInputPassword1').value = "";
    document.getElementById('showInputPassword').checked = false;
    document.querySelector('.password').type = 'password';
    document.getElementById('exampleInputTel').value = "";
}

let sendToServer = (variable) => {
    let nickName = document.getElementById('formGroupNickname').value;
    let email = document.getElementById('exampleInputEmail').value;
    let password = document.getElementById('exampleInputPassword1').value;
    let tel = document.getElementById('exampleInputTel').value;
    
    if(validateNickName(nickName) == true && validateEmail(email) == true && validatePassword(password) == true && validatePhone(tel) == true){
        let user = {};
        user.nickName = nickName;
        user.email = email;
        user.password = password;
        user.tel = tel;
        
        fetch(variable, 
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                
            })
            .then(response => response.json())
            .then(user => {
                console.log(user);
                clearInput();
                Swal.fire('Ура!', 'Все данные успешно отправлены на сервер!');
            })
            .catch(error => {
                if(error){                
                    console.log(error.message);
                    console.log(error.name);
                    Swal.fire('Упс!', 'Что-то пошло не так... Попробуйте снова.', 'warning');
                    document.getElementById("btn_again").removeAttribute("disabled"); //сделать кнопку Попробовать снова активной
                }            
            })
    }
}

btnOk.addEventListener('click', () => {    
    let variable = 'https://error_path';
    sendToServer(variable);    
});

btnAgain.addEventListener('click', () => {
    let variable = 'https://httpbin.org/post';
    sendToServer(variable);
});