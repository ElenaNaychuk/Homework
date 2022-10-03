/* Практическое задание № 1 */

document.addEventListener('DOMContentLoaded', async function (event) {
    const superheroes = await getSuperheroes();
    showSuperheroes(superheroes);
})

async function getSuperheroes() {
    const response = await fetch('./data.json');
    const superheroes = await response.json();
    return superheroes;
}

function showSuperheroes(superheroes) {
    for (let superhero of superheroes) {
        const newCard = cloneNodeCard();
        fillCard(newCard, superhero);
        addCardToDom(newCard);
    }
}

function cloneNodeCard() {
    const cardNode = document.querySelector('.card_hero');
    document.querySelector('.card-none').style.display = 'none';
    const newCard = cardNode.cloneNode(true);
    return newCard;
}

function fillCard(card, superhero) {
    const cardName = `superhero-${superhero.id}`;
    card.querySelector('.image').src = superhero.photo;
    card.querySelector('.title').innerHTML = superhero.name;
    card.querySelector('.universe').innerHTML = `<span class="names">Вселенная:</span> ${superhero.universe}`;
    card.querySelector('.occupation').innerHTML = `<span class="names">Деятельность: </span>${superhero.occupation}`;
    card.querySelector('.superPower').innerHTML = `<span class="names">Суперсила: </span>${superhero.superPower}`;
    card.querySelector('.detailedDescription').innerHTML = `<span class="names">Подробнее: </span> ${superhero.detailedDescription}`;
    card.querySelectorAll('.rating').forEach(radio => {
        radio.name = cardName;
        radio.addEventListener('change', saveRatingInLocalStorage);
    });
}

function addCardToDom(newCard) {
    const cardsContainer = document.querySelector('.container_cards');
    cardsContainer.append(newCard);
}

function saveRatingInLocalStorage(radioChangeEvent) {
    const radio = radioChangeEvent.target;
    const rating = Number(radio.value);
    const cardName = radio.name;
    localStorage.setItem(`rating-${cardName}`, rating);
}

/* Практическое задание № 2 */

let currentQuestion;

const btnStartQuiz = document.querySelector('#js-button-start');
btnStartQuiz.addEventListener('click', event => loadRandomQuestionAndShowIt());

async function loadRandomQuestionAndShowIt() {
    const question = await loadRandomQuestion();
    currentQuestion = question;
    console.log(question);
    showQuestion(question);
}

async function loadRandomQuestion() {
    const response = await fetch('http://jservice.io/api/random');
    const questions = await response.json();
    return questions[0];
}

function showQuestion(question) {
    document.querySelector('.question').innerHTML = question.question + '?';
}

const btnAnswer = document.querySelector('.js-btn-answer');
btnAnswer.addEventListener('click', event => sendAnswer());

function sendAnswer() {
    const textAnswer = document.querySelector('#text-avswer').value;
    const message = document.querySelector('.message');
    const textAnswer1 = textAnswer.trim();
    if (textAnswer1.toLowerCase() === ((currentQuestion.answer).toLowerCase())) {
        message.innerHTML = 'Правильно!';
    } else {
        message.innerHTML = '<span class="error-message">Ответ неверный! Вы можете воспользоваться подсказкой.</span>';
    }
}

const btnHelp = document.querySelector('.js-btn-help');
btnHelp.addEventListener('click', event => showHelpMessage());

function showHelpMessage() {
    document.querySelector('#text-avswer').value = currentQuestion.answer;
}

const btnNextQuestion = document.querySelector('#js-button-next-question');
btnNextQuestion.addEventListener('click', event => showNextQuestion());

function showNextQuestion() {
    document.querySelector('#text-avswer').value = '';
    document.querySelector('.message').innerHTML = '';
    loadRandomQuestionAndShowIt();
}

