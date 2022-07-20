function add () {
    const a = Number(prompt("Введите первое слагаемое:"));
    const b = Number(prompt("Введите второе слагаемое:"));
    const sum = a + b;
    alert(`Сумма: ${sum}.`);
}

function subtract () {
    const a = Number(prompt("Введите уменьшаемое:"));
    const b = Number(prompt("Введите вычитаемое:"));
    const difference = a - b;
    alert(`Разность: ${difference}.`);
}

function multiply () {
    const a = Number(prompt("Введите первый множитель:"));
    const b = Number(prompt("Ведите второй множитель:"));
    const product = a * b;
    alert(`Произведение: ${product}.`);
}

function divide() {
    const a = Number(prompt("Введите делимое:"));
    const b = Number(prompt("Введите делитель:"));
    const quotient = a / b;
    alert(`Частное: ${quotient}.`);
}