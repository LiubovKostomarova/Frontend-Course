function check() {

    let firstName = document.getElementById('firstName');
    let midName = document.querySelector('#midName');
    let lastName = document.querySelector('#lastName');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');


    let message = document.querySelector('#errorMessage');
    message.innerHTML = '';



    if (!isFormValid(firstName, midName, lastName, email, password)) {
        message.innerHTML += 'Probably, you did not fill all the fields! <br> Please make sure all the info is provided.'
    } else if (!validateEmail()) {
        alert("Invalid email entry, please try again")
    } else {

        Swal.fire({
            title: 'Cool!',
            text: `Welcome on our portal, ${firstName.value} ${lastName.value} !`,
            imageUrl: 'https://image.shutterstock.com/image-illustration/3d-rendering-golden-color-yay-260nw-1416232610.jpg',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'image',
        });
    }
}


function isValidEntry(info) {
    return info.value.trim() !== "";
}

function isFormValid(firstName, midName, lastName, email, password) {

    return isValidEntry(firstName) && isValidEntry(midName) && isValidEntry(lastName) && isValidEntry(email) && isValidEntry(password)
}

function validateEmail() {
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (email.value.match(mailFormat)) {
        return true;
    } else {
        return false;
    }
}