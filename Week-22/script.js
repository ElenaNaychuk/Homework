const moment = require('moment');
const chart = require('chart.js');

const searchButton = document.querySelector('.js-search-btn');
searchButton.onclick = async function sendRequest(event) {
    event.preventDefault();
    cleanDivWithImages();

    const inputData = document.querySelector('.input-search').value;
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=vaNFa4cgsUs1GXddaBlHtoeNcoFlaREN&limit=5&offset=0&rating=g&lang=en&q=' + inputData);
        const result = await response.json();

        result.data.forEach(gifObject => {
            const saveTagImage = createElementDom();
            addImageSrc(gifObject, saveTagImage);
            addImageDom(saveTagImage);
        });
    } catch (error) {
        alert('Извините, произошла ошибка.');
    }
}

function createElementDom() {
    const saveTagImage = document.createElement('img');
    return saveTagImage;
}

const addImageSrc = (gifObject, saveTagImage) => saveTagImage.src = gifObject.images.fixed_height.url;

function addImageDom(saveTagImage) {
    const newImage = document.querySelector('.gif');
    newImage.append(saveTagImage);
}

const cleanDivWithImages = () => document.querySelector('.gif').innerHTML = '';


// Практическое задание № 2

document.addEventListener('DOMContentLoaded', function (event) {
    clearDivClassTime();
    const time = showTodayDate();
    const newTag = createElementDom();
    addToParagraphInnerHtml(newTag, time)
    addDateToDom(newTag);
});

function showTodayDate() {
    return moment().format('LLLL');
}

function createElementDom() {
    const saveTagParagraph = document.createElement('p');
    return saveTagParagraph;
}

const addToParagraphInnerHtml = (newTag, time) => newTag.innerHTML = `Сегодня: ${time}`;

function addDateToDom(newTag) {
    const div = document.querySelector('.time');
    div.append(newTag);
}

const clearDivClassTime = () => document.querySelector('.time').innerHTML = '';

const chartJson = `{
    "type": "line",
    "data": {
        "labels": [
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь"
        ],
        "datasets": [{
                "label": "Время, потраченное на обучение по месяцам",
                "backgroundColor": "#ec615b",
                "borderColor": "#ec615b",
                "data": [12, 58, 65, 80, 36, 38]
        }]
    }
}`

const config = JSON.parse(chartJson);

const ctx = document.getElementById('myChart-1');
const myChart = new Chart(ctx, config);

const chartJson2 = `{
    "type": "bar",
    "data": {
        "labels": [
            "Всего",
            "Выполнено",
            "Отлично",
            "Хорошо",
            "Удовл.",
            "Плохо"
        ],
        "datasets": [
            {
                "label": "Качество выполнения заданий",
                "data": [100, 60, 21, 32, 5, 2],
                "backgroundColor": [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)"
                ],
                "borderColor": [
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)"
                ],
                "borderWidth": 1
            }
        ]
    },
    "options": {
        "scales": {
            "y": {
                "beginAtZero": true
            }
        }
    }
}`

const config2 = JSON.parse(chartJson2);

const ctx1 = document.getElementById('myChart-2');
const myChart2 = new Chart(ctx1, config2);
