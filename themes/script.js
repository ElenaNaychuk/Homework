function applyTheme(themeName) {
    const className = `${themeName}Area`;
    document.querySelector("body").classList.value = className;
}

document.querySelector('#select').addEventListener('change', (event) => {
    applyTheme(event.target.value);
});

/* --блок sumInput-- */

let massivNumbers = [];

let btn = document.querySelector(".btn-ok")
btn.addEventListener("click", addNumberFromInputInNumbers);

function addNumberFromInputInNumbers() {
    let numberInput = document.querySelector(".input").value;
    numberInput = Number(numberInput);
    document.querySelector(".input").value = "";

    if (numberInput !== "") {
        massivNumbers.push(numberInput);
    } else {
        sumInput();
    }
    console.log(massivNumbers);
    document.querySelector(".message").innerHTML = "";
    document.querySelector(".message").innerHTML += "Введите следующее число";
}

let btnSum = document.querySelector(".sum");
btnSum.addEventListener("click", sumInput);

function sumInput() {
    document.querySelector(".message").innerHTML = "";

    /* Выводит числа в порядке возрастания */

    massivNumbers.sort((a, b) => a - b);
    document.querySelector('.numbers').innerHTML = massivNumbers;

    /* Складывает все числа */

    let sum = massivNumbers.reduce(function (a, b) {
        return a + b;
    });

    /* Выводит пользователю сумму чисел */
    document.querySelector('.result').innerHTML = `Сумма: ${sum}.`;
}


/* Калькулятор расчета стоимости автомобиля */

let ladaModels = ['Granta', 'Kalina', 'Vesta'];
let chevroletModels = ['Aveo', 'Lanos', 'Nubira'];
let hondaModels = ['Accord', 'Civic', 'Legend'];

const ageSelect = document.querySelector('.age');
const brandSelect = document.querySelector('.brand');
const modelsSelect = document.querySelector('.model');
const resultDiv = document.querySelector('.calculatior-result');
let button = document.querySelector('.button');

ageSelect.addEventListener('change', activeBrandSelect);
brandSelect.addEventListener('change', activeModelsSelect);
brandSelect.addEventListener('change', onChangeBrand);
modelsSelect.addEventListener('change', onChangeModel);
button.addEventListener('click', outResultsOfCalculation);


/* Сделать доступным  select brand */
function activeBrandSelect() {
    brandSelect.removeAttribute('disabled');
}

/* Сделать доступным select model */
function activeModelsSelect() {
    modelsSelect.removeAttribute('disabled');
}

/* При изменеии в select brand удаляем все option и добавляем модели выбранной марки */
function onChangeBrand(event) {
    removeOptionsOfModelsSelect();
    addModelsOfBrand(event.target.value);
}

/* Цикл, который удаляет <option> из modelSelect */
function removeOptionsOfModelsSelect() {
    const howMuchOptionsToDelete = modelsSelect.length - 1;
    for (i = 0; i < howMuchOptionsToDelete; i++) {
        modelsSelect.remove(1);
    }
}

function addModelsOfBrand(brand) {    /* Добавить модели выбранной марки */
    let models;
    if (brand === 'lada') {
        models = ladaModels;
    } else if (brand === 'chevrolet') {
        models = chevroletModels;
    } else if (brand === 'honda') {
        models = hondaModels;
    }
    for (let model of models) {
        const option = document.createElement('option')
        option.innerHTML = model;
        modelsSelect.append(option);
    }
}


function outResultsOfCalculation() {
    const transmissionValue = document.querySelector('input[name="transmission"]:checked').value;
    const price = calculatePriceOfCar(
        ageSelect.value,
        modelsSelect.value,
        transmissionValue,
    );
    resultDiv.innerHTML = `Стоимость автомобиля: ${price} рублей.`;
}

function calculatePriceOfCar(age, model, transmission) {
    let priceComponents = [];
    priceComponents.push(addCostOfAge(age));
    priceComponents.push(addCostOfModel(model));
    priceComponents.push(addCostOfTransmission(transmission));

    let price = priceComponents.reduce(function (previousSum, item) {
        return previousSum + item;
    }, 0);

    return price;
}

function onChangeModel(event) {
    addCostOfModel(event.target.value);
}

function addCostOfModel(model) {
    switch (model) {
        case 'Granta':
            cost = 100000;
            break;
        case 'Kalina':
            cost = 150000;
            break;
        case 'Vesta':
            cost = 200000;
            break;
        case 'Aveo':
            cost = 210000;
            break;
        case 'Lanos':
            cost = 250000;
            break;
        case 'Nubira':
            cost = 280000;
            break;
        case 'Accord':
            cost = 300000;
            break;
        case 'Civic':
            cost = 340000;
            break;
        case 'Legend':
            cost = 370000;
            break;
    }
    return cost;
}

function addCostOfAge(age) {
    let cost;
    switch (age) {
        case 'new':
            cost = 500000;
            break;
        case 'under5':
            cost = 400000;
            break;
        case 'more5':
            cost = 300000;
            break;
    }
    return cost;
}

function addCostOfTransmission(transmission) {
    const transmissionValue = document.querySelector('input[name="transmission"]:checked').value;
    if (transmissionValue === 'automatic') {
        cost = 70000;
    } else if (transmissionValue === 'mechanical') {
        cost = 40000;
    }
    return cost;
}






/* Практическое задание № 3 */

let massiv1 = ['js', 'css', 'html'];
console.log(massiv1[0]);

let massiv2 = [0, 1, false, 2, undefined, '', 3, null];
let newMassiv2 = massiv2.filter(item => typeof item === 'number' && item !== 0);
console.log(newMassiv2);

let massiv3 = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];
let newMassiv3 = massiv3.find(item => item.length > 3);
console.log(newMassiv3);