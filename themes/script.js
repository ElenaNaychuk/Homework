function applyTheme(themeName) {
    const className = `${themeName}Area`;
    document.querySelector("body").classList.value = className;
}

document.querySelector('#select').addEventListener('change', (event) => {
    applyTheme(event.target.value);
});
