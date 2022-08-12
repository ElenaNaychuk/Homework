function check() {
    let login = document.getElementById("login");
    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");

    document.getElementById("errorMessage").innerHTML = '';

    if (login.value === '') {
        document.getElementById("errorMessage").innerHTML += "Введите логин<br>";
    }

    if (email.value === "") {
        document.getElementById("errorMessage").innerHTML += "Введите email<br>";
    }

    if (name.value === '') {
        document.getElementById("errorMessage").innerHTML += "Введите имя<br>";
    }

    if (password1.value === '') {
        document.getElementById("errorMessage").innerHTML += "Введите пароль<br>";
    }

    if (password2.value === '') {
        document.getElementById("errorMessage").innerHTML += "Повторите пароль<br>";
    }

    if (password1.value !== '' && password2.value !== '' && password2.value !== password1.value) {
        document.getElementById("errorMessage").innerHTML += "Пароли не совпадают";
    }
}