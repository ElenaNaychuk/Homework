function changePhoto(photoSrc) {
    let photo = document.getElementsByClassName ('img')[0];
    photo.src = photoSrc;
}

let previousImageSrc = "assets/images/Прага.jpg";
let currentImageSrc = "assets/images/Лондон.jpg";
let nextImageSrc = "assets/images/Париж.jpg"; 

function forward() {
    let temporaryVariable = currentImageSrc;
    currentImageSrc = nextImageSrc;
    nextImageSrc = previousImageSrc;
    previousImageSrc = temporaryVariable;
    changePhoto(currentImageSrc);
}

function backward() {
    let temporaryVariable = currentImageSrc;
    currentImageSrc = previousImageSrc;
    previousImageSrc = nextImageSrc;
    nextImageSrc = temporaryVariable;
    changePhoto(currentImageSrc);
}
