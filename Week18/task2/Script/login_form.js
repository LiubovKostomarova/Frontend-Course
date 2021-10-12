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

