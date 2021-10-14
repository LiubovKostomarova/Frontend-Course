let errors = [];

let registrateBtn = document.getElementById('registrateBtn');

let inputs = document.getElementsByTagName('input');
let firstName;
let pass = document.getElementById('pass');
let confirmPass = document.getElementById('confirm');


function checkPasswordLength() {
    document.getElementById('length').innerHTML = (String(pass.value).length < 7) ? '<span class="error">Your password is too short<span>' : '';
    
}

function checkPasswordConfirmation() {
       document.getElementById('passInfo').innerHTML = (pass.value == confirmPass.value) ?  `<span class='accepted'>Password accepted</span>` : `<span class='error'>Password mismatch</span>`;
}

function checkForm() {
    if(inputs[0].value == '' || inputs[1].value == '' || inputs[2].value == '' || inputs[3].value == '' || inputs[4].value == '' ||inputs[5].value == '' || inputs[6].value == '' || inputs[7].value == '') {
        alert('Some information is still missing, please fill all the fields!')
    } else {
        firstName = document.getElementById('firstName').value; 
        document.getElementById('signUp').innerHTML = `Welcome on the portal, ${firstName}!`;  
    }
    
}

let mode = document.getElementById('mode');
mode.addEventListener('change', function(){
    let n = document.getElementById('mode').options.selectedIndex;
    let main = document.getElementById('main');
    switch(n){
        case 0:
            main.classList.remove('light');
            main.classList.remove('pink');
            main.classList.add('dark');
            break;
        case 1:
            main.classList.remove('dark');
            main.classList.remove('pink');
            document.getElementById('main').classList.add('light');
            break;
        case 2:
            main.classList.remove('light');
            main.classList.remove('dark');
            document.getElementById('main').classList.add('pink');
            break;
        }
})

function ValidatePass(){
    let passFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    if (pass.value.match(passFormat)) {
        return true;
    }
    else {
        let passErr = document.createElement('p');
            passErr.innerText = 'Sorry, your password is incorrect';
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

function checkPhone(){
    let phone = document.getElementById('phone');
    if(isNaN(+phone.value)){
        phone.classList.add('inputError');
    }else if (phone.classList.contains('inputError')){
        phone.classList.remove('inputError');
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

registrateBtn.addEventListener('click', function checkAgreement(){
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