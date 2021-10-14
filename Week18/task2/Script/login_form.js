/*function check() {
    let first_name = document.getElementById('firstName');
    let last_name = document.getElementById('lastName');
    let username = document.getElementById('username');
    let job_selection = document.getElementById('job');
    let phone_number = document.getElementById('phoneNumber');
    let password = document.getElementById('password');
    let password_confirmation = document.getElementById('passwordConfirmation');
    let form = document.getElementById('registration_form')[0];
    form.isValid = true;

    document.getElementById('errorMessage_first_name').innerHTML = "";
    document.getElementById('errorMessage_last_name').innerHTML = "";
    document.getElementById('errorMessage_username').innerHTML = "";
    document.getElementById('errorMessage_job_selection').innerHTML = "";
    document.getElementById('errorMessage_phone_number').innerHTML = "";
    document.getElementById('errorMessage_password').innerHTML = "";
    document.getElementById('errorMessage_password_confirmation').innerHTML = "";

    if (first_name.value == '') {
        document.getElementById('errorMessage_first_name')
            .innerHTML += "Your first name is missing, please, indicate it<br>";
    }

    if (last_name.value == '') {
        document.getElementById('errorMessage_last_name')
            .innerHTML += "Your last name is missing, please, indicate it<br>";
    }

    if (username.value == '') {
        document.getElementById('errorMessage_username')
            .innerHTML += "Your username is missing, please, indicate it<br>";
    }

    if (phone_number.value == '') {
        document.getElementById('errorMessage_phone_number')
            .innerHTML += "Your phone number is missing, please, indicate it<br>";
    }

    if (phone_number.value.length !== 11) {
        document.getElementById('errorMessage_phone_number').innerHTML += "Your phone number is not correct<br>";
        form.isValid = false;
    }

    if (password.value == '') {
        document.getElementById('errorMessage_password')
            .innerHTML += "Your password is missing, please, indicate it<br>";
    }

    if (password.value.length <= 7) {
        document.getElementById('errorMessage_password').innerHTML += "Your password is not correct, please use 7 digits<br>";
        form.isValid = false;
    }

    if (password_confirmation.value == '') {
        document.getElementById('errorMessage_password_confirmation')
            .innerHTML += "You didn't confirm your password, please, do it<br>";
    }

    if (password_confirmation.value == '') {
        document.getElementById('errorMessage_password_confirmation').innerHTML += "You need to type in your password one more time<br>";
        form.isValid = false;
    }

    if (password_confirmation.value != password.value) {
        document.getElementById('errorMessage_password_confirmation').innerHTML += "Passwords are not same<br>";
        form.isValid = false;
    }

    if (document.getElementById('job').selected != true) {
        document.getElementById('errorMessage_job_selection').innerHTML += "Please, select your job<br>";
    }

    if (form.isValid == true) {
        let welcomeMessage = first_name.value;
        alert(`Welcome, ${welcomeMessage}!`)
    }

}
*/
<<<<<<< HEAD

//Validation Week18 using JS validation and regexp

let errors = [];

let registration = document.getElementById('registration');

let inputs = document.getElementsByTagName('input');
let firstName;
let pass = document.getElementById('password');
let confirmPass = document.getElementById('passwordConfirmation');

function checkPassword() {
    document.getElementById('passError').innerHTML = (pass.value == confirmPass.value) ?  `<span class='accepted'>Passwords are equal and confirmed.</span>` : `<span class='error'>Passwords are not equal.</span>`;
}

function checkPasswordLength() {
    document.getElementById('lengthError').innerHTML = (String(pass.value).length < 7) ? '<span class="error">Your password is too short<span>' : '';
    
}

function ValidatePass(){
    let passwordFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    if (pass.value.match(passFormat)) {
        return true;
    }
    else {
        let passErr = document.createElement('p');
            passErr.innerText = 'Sorry, your password is incorrect.';
            passErr.classList.add('error');
            document.getElementById('emailBlock').append(passErr);
    }
}

function ValidateName (str){

    if(str.classList.contains('inputError')){
        str.classList.remove('inputError');
    }

    let nameFormat = /^(?:[А-ЯЁA-Z][а-яёa-z]+(?:-[А-ЯЁA-Z]?[а-яёa-z]+)?(?:[ ]|$)){1}(?:[Оо]глы|[Гг]ызы)?$/;
    if(str.value.match(nameFormat) && str.value != null){
        return true;
    } else {
        str.classList.add('inputError');
    }
};

function validateEmail(mail){
    let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    console.log(mail.value.match(mailFormat));
    if (mail.value.match(mailFormat)  && mail.value != null) {
        if(document.getElementById('passErr') != null) {
            document.getElementById('passErr').remove();
        }
        return true;
    } else {
        if(document.getElementById('passErr') != null) {
            document.getElementById('passErr').remove();
        }
        let passErr = document.createElement('p');
            passErr.id = 'passErr';
            passErr.innerText = 'Sorry, your password is incorrect';
            passErr.classList.add('error');
            document.getElementById('emailBlock').append(passErr);
    }
}

/*function checkPhone(){
    let phone = document.getElementById('phoneNumber');
    if(isNaN(+phone.value)){
        phone.classList.add('inputError');
    }else if (phone.classList.contains('inputError')){
        phone.classList.remove('inputError');
    }
}*/

let validatePhone = (phoneField) => {
    let phoneFormat = /^((0|\+49)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
    // console.log(phoneFormat);
    // console.log(phoneField.match(phoneFormat));
    if (phoneField.match(phoneFormat)) {
        return true;
    }
    else {
        alert("Your phone is not correct! Example: +49 xxxx xxx xx xx" );
        document.getElementById('phoneNumber').value = ""
        return false;
    }
}

function validateEmail(){
    let email = document.getElementById('emailBlock__emailField');
    let mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.classList.contains('inputError')){
        email.classList.remove('inputError');
    }
    if(email.value.match(mailFormat)){
        if(document.getElementById('mailErr') != null){
            document.getElementById('mailErr').outerHTML = '';
        }
        return true;
    } else {
        email.classList.add('inputError');
        let mailErr = document.createElement('p');
            mailErr.id = 'mailErr';
            mailErr.innerText = 'Sorry, your e-mail is incorrect';
            mailErr.classList.add('error');
            document.getElementById('emailBlock').append(mailErr);
    }
}

registration.addEventListener('click', function checkAgreement(){
    if(document.getElementById('agreementError') != null){
        document.getElementById('agreementError').remove();
    }
    if(!document.getElementById('agreement__input').checked){
        let agreementErr = document.createElement('p');
            agreementErr.classList.add('error');
            agreementErr.id = 'agreementError';
            agreementErr.innerText = 'You should accept terms before registration!'
            document.getElementById('agreement').append(agreementErr);
    } else if(document.getElementById('agreementError') != '' && document.getElementById('agreementError') != null) {
        document.getElementById('agreementError').remove();
    }
});


function check() {
    if(inputs[0].value == '' || inputs[1].value == '' || inputs[2].value == '' || inputs[3].value == '' || inputs[4].value == '' ||inputs[5].value == '' || inputs[6].value == '' || inputs[7].value == '') {
        alert('Please, fill all the required fields!')
    } else {
        firstName = document.getElementById('firstName').value; 
        document.getElementById('signUp').innerHTML = `You are successfullly registered, ${firstName}!`;  
    }
    
}
=======
//Проверка для одного поля
let errors = [];

function checkValidity(input) {
    let validity = input.validity;

    if (validity.patternMismatch) 
		{ errors.push('Неверный формат заполнения'); }
    
		if (validity.rangeOverflow) 
		{ let max = input.max;
			errors.push('Максимальное значение не может быть больше чем ' + max); }
    
		if (validity.rangeUnderflow) 
		{ let min = input.min;
			errors.push('Минимальное значение не может быть больше чем ' + min); }
    
		// И остальные проверки валидности...  
}

//Проверка для всех полей
function checkAll() {
		//получаем все инпуты
    let inputs = document.querySelectorAll("input");
>>>>>>> e83aa9ba2aaac9070610530a2c45d164cd2a297f

		//перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        checkValidity(input);
    }

		//выводим ошибки в div 
    let errorDiv = document.querySelector('.errorsInfo');
    errorDiv.innerHTML = errors.join('. \n');
}

//Проверка e-mail
function ValidateEmail(emailField) {
    let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (emailField.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}

