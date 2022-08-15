function validate() {
    let loginInput = document.getElementById("login");
    let emailInput = document.getElementById("email");
    let nameInput = document.getElementById("name");
    let password1Input = document.getElementById("password1");
    let password2Input = document.getElementById("password2");

    document.getElementById("errorMessage").innerHTML = '';
    document.getElementById("message").innerHTML = '';

    if (loginInput.value === '') {
        document.getElementById("errorMessage").innerHTML += 'Введите логин<br>';
    }

    if (emailInput.value === "") {
        document.getElementById("errorMessage").innerHTML += 'Введите email<br>';
    }

    if (nameInput.value === '') {
        document.getElementById("errorMessage").innerHTML += 'Введите имя<br>';
    }

    if (password1Input.value === '') {
        document.getElementById("errorMessage").innerHTML += 'Введите пароль<br>';
    }

    if (password2Input.value === '') {
        document.getElementById("errorMessage").innerHTML += 'Повторите пароль<br>';
    }

    if (password1Input.value !== '' && password2Input.value !== '' && password2Input.value !== password1Input.value) {
        document.getElementById("errorMessage").innerHTML += 'Пароли не совпадают<br>';
    }

    if (document.getElementById("errorMessage").innerHTML === '') {
        document.getElementById("message").innerHTML += `Добро пожаловать, ${nameInput.value}!`
    }
}