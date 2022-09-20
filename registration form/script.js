let validateButton = document.querySelector('.btn_form');
validateButton.addEventListener('click', checkAll)

function checkAll() {
    const errors = [];
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        errors.push(...checkValidity(input));
    }

    const password1Input = document.getElementById("password1");
    const password2Input = document.getElementById("password2");
    const passwordError = verificationPasswords(password1Input, password2Input);
    if (passwordError !== '') {
        errors.push(passwordError);
    }

    const email = document.querySelector('#email');
    const correctEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const emailError = verificationEmail(email, correctEmail);
    if (emailError !== '') {
        errors.push(emailError);
    }

    const name = document.querySelector('#name');
    const nameError = verificstionName(name);
    if (nameError !== '') {
        errors.push(nameError);
    }

    //выводим ошибки в div 
    let errorDiv = document.querySelector('#errorMessage');
    errorDiv.innerHTML = errors.join('. \n');

    let nameInput = document.getElementById("name");
    let message = document.getElementById("message");
    message.innerHTML += welcomeMessage(errorDiv, nameInput);
}


//Проверка для одного поля

function checkValidity(input) {
    const errors = [];
    let validity = input.validity;

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения<br>');
    }
    if (validity.rangeOverflow) {
        let max = input.max(20);
        errors.push('Максимальное значение не может быть больше чем ' + max);
    }
    if (validity.rangeUnderflow) {
        let min = input.min(5);
        errors.push('Минимальное значение не может быть больше чем ' + min);
    }
    if (validity.tooLong) {
        errors.push('Значение слишком длиное<br>');
    }
    if (validity.tooShort) {
        errors.push('Значение слишком короткое<br>');
    }
    if (validity.typeMismatch) {
        errors.push('Значение не соответствует<br>');
    }
    if (validity.valueMissing) {
        errors.push('Отсутствует обязательное значение<br>');
    }

    return errors;
}

function verificstionName(name) {
    if (/\d/.test(name.value)) {    /* проверяем введённые данные на наличие цифр */
        return ("Проверьте имя!");
    } else {
        return '';
    }

}

function verificationEmail(email, correctEmail) {
    if (!correctEmail.test(email.value)) {
        return 'Неправильно введён Email';
    } else {
        return '';
    }
}

function verificationPasswords(password1Input, password2Input) {
    if (password1Input.value !== '' && password2Input.value !== '' && password2Input.value !== password1Input.value) {
        return 'Пароли не совпадают<br>';
    }
}

function welcomeMessage(errorDiv, nameInput) {
    if (errorDiv.innerHTML === '') {
        return `Добро пожаловать, ${nameInput.value}!`;
    } else {
        return '';
    }
}

        // // bad
        // let sotrudnik = '';
        // const sotrudniki = ['vasya', 'petya', 'katya'];
        // for (let sotrudnik1 in sotrudniki) {
        //     sotrudnik = sotrudnik1;
        //     const salary = calculateSalary();
        //     console.log(`salary of ${sotrudnik1} is ${salary}`);
        // }

        // function calculateSalary() {
        //     if (sotrudnik === 'vasya') {
        //         return 100;
        //     }
        // }

        // // good
        // const sotrudniki = ['vasya', 'petya', 'katya'];
        // for (let sotrudnik in sotrudniki) {
        //     const salary = calculateSalary(sotrudnik);
        //     console.log(`salary of ${sotrudnik} is ${salary}`);
        // }

        // function calculateSalary(sotrudnik) {
        //     if (sotrudnik === 'vasya') {
        //         return 100;
        //     }
        // }
