/* Практическое задание № 1 */

const searchButton = document.querySelector('.js-search-btn');
searchButton.onclick = async function sendRequest(event) {
    event.preventDefault();
    cleanDivWithImages();

    const inputData = document.querySelector('.input-search').value;
    const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=vaNFa4cgsUs1GXddaBlHtoeNcoFlaREN&limit=5&offset=0&rating=g&lang=en&q=' + inputData);
    const result = await response.json();
    result.data.forEach(gifObject => {
        const saveTagImage = createElementDom();
        addImageSrc(gifObject, saveTagImage);
        addImageDom(saveTagImage);
    });
}

function createElementDom() {
    const saveTagImage = document.createElement('img');
    return saveTagImage;
}

function addImageSrc(gifObject, saveTagImage) {
    saveTagImage.src = gifObject.images.fixed_height.url;
}

function addImageDom(saveTagImage) {
    const newImage = document.querySelector('.gif');
    newImage.append(saveTagImage);
}

const cleanDivWithImages = () => document.querySelector('.gif').innerHTML = '';

// function addImageDom(gifObject) {
//     const newImage = document.querySelector('.gif');
//     const sevaTagImage = document.createElement('img');
//     newImage.append(sevaTagImage);
//     sevaTagImage.src = gifObject.images.fixed_height.url;
// }



/* Практическое задание № 2 */

let sendDataUser = document.querySelector('.btn_form');

sendDataUser.onclick = async function sendFormData(event) {
    checkAll();
    event.preventDefault();
    let user = {
        login: document.querySelector('#login').value,
        email: document.querySelector('#email').value,
        name: document.querySelector('#name').value,
        password1: document.querySelector('#password1').value,
        password2: document.querySelector('#password2').value,
        tel: document.querySelector('#tel').value
    }
    const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
    const userData = await response.json();
    console.log(userData);
}

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

/* Практическое задание № 3 */

const sendDataCatBtn = document.querySelector('.js-btn_cat');
sendDataCatBtn.onclick = function (event) {
    event.preventDefault();
    const form = document.querySelector('.form');
    fetch('https://httpbin.org/post', {

        method: 'POST',
        body: new FormData(form),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF - 8"
        },
    })
        .then(response => response.json())
        .then(catUser => { console.log(catUser); })
        .catch(error => console.log(error));
}


// const gui = new Gui;
// const api = new Api;
// gui.onSearch(async query => {
//     const results = await api.find(query);
//     gui.showResults(results);
// });


