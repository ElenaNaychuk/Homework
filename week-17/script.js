/* Практическое задание 1 */

const button = document.querySelector(".btn_done");
button.addEventListener("click", formattedData);

function formattedData() {
    let name = document.querySelector('.name').value;
    let surname = document.querySelector('.surname').value;
    let patronymic = document.querySelector('.patronymic').value;

    if (name === '') {
        alert('Введите имя!');
    }
    else if (/\d/.test(name)) {    /* проверяем введённые данные на наличие цифр */
        alert("Проверьте имя!");
    }
    else {
        let name2 = name.trim();
        let newName = name2.toLowerCase();
        let newName2 = newName.charAt(0).toUpperCase() + newName.slice(1);
        document.querySelector('.name').value = newName2;
    }


    if (surname === '') {
        alert('Введите фамилию!');
    }
    else if (/\d/.test(surname)) {
        alert("Проверьте фамилию!");
    }
    else {
        let surname2 = surname.trim();
        let newSurname = surname2.toLowerCase();
        let newSurname2 = newSurname.charAt(0).toUpperCase() + newSurname.slice(1);
        document.querySelector('.surname').value = newSurname2;
    }


    if (/\d/.test(patronymic)) {
        alert("Проверьте отчество!");
    }
    else {
        let patronymic2 = patronymic.trim();
        const pnewPatronymic = patronymic2.toLowerCase();
        const newPatronymic2 = pnewPatronymic.charAt(0).toUpperCase() + pnewPatronymic.slice(1);
        document.querySelector('.patronymic').value = newPatronymic2;
    }

}

/* Практическое задание 2 */

const buttonSend = document.querySelector('.commentary_btn');
buttonSend.addEventListener('click', checkSpam);

function checkSpam(str) {
    let commentary = document.querySelector('.commentary').value;
    let newCommentary = commentary.replace(/viagra/g, '***');

    let newTagOfDiv = document.querySelector('.new_commentary');
    const newP = document.createElement('p')
    newTagOfDiv.append(newP);
    newP.innerHTML = newCommentary;

    document.querySelector('.commentary').value = '';

}

/* Практическое задание 3 */

function formatDate(date) {
    const millisecondsSinceDate = new Date - date;
    if (millisecondsSinceDate < 1000) {
        return "прямо сейчас"
    } else if (millisecondsSinceDate < 1 * 60 * 1000) {
        const secondsSinceDate = Math.round(millisecondsSinceDate / 1000);
        return `${secondsSinceDate} сек. назад`
    } else if (millisecondsSinceDate < 60 * 60 * 1000) {
        const minitSinceDate = Math.round(millisecondsSinceDate / (60 * 1000));
        return `${minitSinceDate} минут назад`
    } else {
        return date.toLocaleString()
    }
}

/* Практическое задание 4 */
const numberBtn = document.querySelector('.number_btn');
numberBtn.addEventListener('click', generateAndDisplayNumbers);

function generateAndDisplayNumbers() {
    const numbers = generateRandomNumbers(10, -10, 10);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const arithmeticalMeanNumber = arithmeticalMean(numbers);
    const sumNumber = sum(numbers);
    const diffNumber = subtract(numbers);
    displayResult(numbers, min, max, arithmeticalMeanNumber, sumNumber, diffNumber);
}

function displayResult(numbers, min, max, arithmeticalMean, sum, diff) {
    document.querySelector('.random_number').innerHTML = `Сгенерировали числа: ${numbers}`;
    document.querySelector('.min_number').innerHTML = `Минимальное число: ${min}`;
    document.querySelector('.max_number').innerHTML = `Максимальное число: ${max}`;
    document.querySelector('.arithmetical_mean').innerHTML = `Среднее арифметическое: ${arithmeticalMean}`;
    document.querySelector('.sum').innerHTML = `Сумма чисел: ${sum}`;
    document.querySelector('.diff').innerHTML = `Разность чисел: ${diff}`;
}

function generateRandomNumberBetwenMinAndMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbers(count, min, max) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = generateRandomNumberBetwenMinAndMax(min, max);
        numbers.push(randomNumber);
    }
    return numbers;
}

function arithmeticalMean(numbers) {
    let sumNumber = sum(numbers);
    return sumNumber / numbers.length;
}

function sum(numbers) {
    return numbers.reduce((a, b) => a + b);
}

function subtract(numbers) {
    return numbers.reduce((a, b) => a - b);
}
