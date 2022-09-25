// function onCalculateButtonClick(clickEvent) {
//     const actionName = clickEvent.target.id;
//     const a = Number(document.getElementById('first-number').value);
//     const b = Number(document.getElementById('second-number').value);
//     let resultName;
//     switch (actionName) {
//         case 'sum':
//             resultName = 'Сумма';
//             result = Calculator.sum(a, b);
//             break;
//         case 'subtract':
//             resultName = 'Разность';
//             result = Calculator.subtract(a, b);
//             break;
//     }
//     document.getElementById('result').innerHTML = `${resultName}: ${result}.`;
// }

function add() {
    const a = Number(document.getElementById('first-number').value);
    const b = Number(document.getElementById('second-number').value);
    const sum = a + b;
    document.getElementById('result').innerHTML = `Сумма: ${sum}.`;
}

function subtract() {
    const a = Number(document.getElementById('first-number').value);
    const b = Number(document.getElementById('second-number').value);
    const difference = a - b;
    document.getElementById('result').innerHTML = `Разность: ${difference}.`;
}

function multiply() {
    const a = Number(document.getElementById('first-number').value);
    const b = Number(document.getElementById('second-number').value);
    const product = a * b;
    document.getElementById('result').innerHTML = `Произведение: ${product}.`;
}

function divide() {
    const a = Number(document.getElementById('first-number').value);
    const b = Number(document.getElementById('second-number').value);
    const quotient = a / b;
    document.getElementById('result').innerHTML = `Частное: ${quotient}.`;

    if (b == 0) {
        alert("Делить на 0 нельзя.");
        document.getElementById('result').innerHTML = '';
    }
}

function clickMe(sender) {
    sender.classList.toggle("color-blue");
}

