function showMessage() {
    let name = prompt("Как тебя зовут?", 'имя')
    if(name===null) return
    alert(`Привет, ${name} !`)
}
