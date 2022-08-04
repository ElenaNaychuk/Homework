function add () {
    const a = Number(document.getElementById('first-number').value);
    const b = Number(document.getElementById('second-number').value);
    const sum = a + b;
    document.getElementById('result').innerHTML = `Сумма: ${sum}.`;
}

function subtract () {
    const a = Number(document.getElementById('first-number').value);
    const b = Number(document.getElementById('second-number').value);
    const difference = a - b;
    document.getElementById('result').innerHTML = `Разность: ${difference}.`;
}

function multiply () {
    const a = Number(document.getElementById('first-number').value);
    const b = Number(document.getElementById('second-number').value);
    const product = a * b;
    document.getElementById('result').innerHTML = `Произведение: ${product}.`;
}

function divide () {
    const a = Number(document.getElementById('first-number').value);
    const b = Number(document.getElementById('second-number').value);
    const quotient = a / b;
    document.getElementById('result').innerHTML = `Частное: ${quotient}.`;
}

function clickMe (sender) {
    sender.classList.toggle ("color-blue");
}

