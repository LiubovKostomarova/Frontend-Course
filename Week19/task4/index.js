class ValidatorStatic {
    static isEmail(email){
        let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if(email.match(emailFormat)){
            return true;
        } return false;
    }

    static isDomain(domain){
        return /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/.test(domain);
    }

    static isDate(date){
        let dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if(date.match(dateFormat)){
            return true;
        } return false;
    }

    static isPhone(phone){
        let phoneFormat = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if(phone.match(phoneFormat)){
            return true;
        } return false;
    }
}

class Validator {
    isEmail(email){
        let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if(email.match(emailFormat)){
            return true;
        } return false;
    }

    isDomain(domain){
        return /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/.test(domain);
    }

    isDate(date){
        let dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if(date.match(dateFormat)){
            return true;
        } return false;
    }

    isPhone(phone){
        let phoneFormat = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if(phone.match(phoneFormat)){
            return true;
        } return false;
    }
}

let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));

// console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
// console.log(ValidatorStatic.isDomain('http://itgirlschool.ru'));
// console.log(ValidatorStatic.isDate('12.05.2021'));
// console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));