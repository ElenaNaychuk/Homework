/* Практическое задание № 1 (Работник) */

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker1 = new Worker('Иван', 'Петров', 2000, 21);
console.log(worker1.getSalary());

const worker2 = new Worker('Николай', 'Иванов', 1500, 21);
console.log(worker2.getSalary());


/* Практическое задание № 2 (Опросник для владельцев котиков) */

const buttonNode = document.querySelector('.js-btn_cat');
buttonNode.addEventListener('click', addInformationAboutCat);

class Cat {
    constructor(nameCat, ageCat, nameHost, breedCat, genderCat, foodCat, comment) {
        this.nameCat = nameCat;
        this.ageCat = ageCat;
        this.nameHost = nameHost;
        this.breedCat = breedCat;
        this.genderCat = genderCat;
        this.foodCat = foodCat;
        this.comment = comment;
    }
}

function addInformationAboutCat() {
    let cat = createObjectCat();
    console.log(cat);
}

function createObjectCat() {
    const nameCat = document.querySelector('#nameCat').value;
    const ageCat = Number(document.querySelector('#ageCat').value);
    const nameHost = document.querySelector('#name-host').value;
    const breedCat = document.querySelector('.breedCat').value;
    const genderCat = document.querySelector('input[name="gender"]:checked')?.value;
    const foodCat = [...document.querySelectorAll('input[class="check"]:checked')].map(input => input.name);
    const comment = document.querySelector('.comment').value;
    let myCat = new Cat(nameCat, ageCat, nameHost, breedCat, genderCat, foodCat, comment);
    return myCat;
}

/* Практическое задание № 3 */

class Calculator {
    static sum(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        return a / b;
    }
}

document.querySelectorAll('.js-button-calk')
    .forEach(button => button.addEventListener('click', calculator));

function calculator(clickEvent) {
    const actionName = clickEvent.target.id;
    const a = Number(document.getElementById('first-number').value);
    const b = Number(document.getElementById('second-number').value);
    let = result;
    let resultName;
    switch (actionName) {
        case 'sum':
            resultName = 'Сумма';
            result = Calculator.sum(a, b);
            break;
        case 'subtract':
            resultName = 'Разность';
            result = Calculator.subtract(a, b);
            break;
        case 'multiply':
            resultName = 'Произведение';
            result = Calculator.multiply(a, b);
            break;
        case 'divide':
            resultName = 'Частное';
            result = Calculator.divide(a, b);
            break;
    }
    document.getElementById('result').innerHTML = `${resultName}: ${result}.`;
}

/* Практическое задание № 4 */

class Validator {
    isEmail(inputData) {
        const correctEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (correctEmail.test(inputData)) {
            return true;
        } else {
            return false;
        }
    }
    isDate(inputData) {
        const date = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (date.test(inputData)) {
            return true;
        } else {
            return false;
        }
    }
    isDomain(inputData) {
        const domain = /^[\p{L}\d]+([-\.][\p{L}\d]+)*$/;
        if (domain.test(inputData)) {
            return true;
        } else {
            return false;
        }
    }
    isPhone(inputData) {
        const phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (phone.test(inputData)) {
            return true;
        } else {
            return false;
        }
    }
}

class ValidatorStatic {
    static isEmail(inputData) {
        const correctEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (correctEmail.test(inputData)) {
            return true;
        } else {
            return false;
        }
    }
    static isDate(inputData) {
        const date = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (date.test(inputData)) {
            return true;
        } else {
            return false;
        }
    }
    static isDomain(inputData) {
        const domain = /^[\p{L}\d]+([-\.][\p{L}\d]+)*$/;
        if (domain.test(inputData)) {
            return true;
        } else {
            return false;
        }
    }
    static isPhone(inputData) {
        const phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (phone.test(inputData)) {
            return true;
        } else {
            return false;
        }
    }
}

const buttonForm = document.querySelector('.js-button-form');
buttonForm.addEventListener('click', validateForm);

function validateForm() {
    let validator = new Validator();
    console.log(validator.isPhone(getDataInputs('phone')));
    console.log(validator.isEmail(getDataInputs('email')));
    console.log(validator.isDate(getDataInputs('date')));
    console.log(validator.isDomain(getDataInputs('address_domen')));

    /* второй вариант (статические методы) */

    console.log(ValidatorStatic.isPhone(getDataInputs('phone')));
    console.log(ValidatorStatic.isEmail(getDataInputs('email')));
    console.log(ValidatorStatic.isDate(getDataInputs('date')));
    console.log(ValidatorStatic.isDomain(getDataInputs('address_domain')));
}

function getDataInputs(id) {
    return document.querySelector(`#${id}`).value;
}
