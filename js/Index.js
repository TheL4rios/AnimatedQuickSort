let getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let getHeight = function(number) {
    let topBar = document.getElementById('bar');
    let bottomContainer = document.getElementById('button-container');

    let positionBar = topBar.getBoundingClientRect();
    let positionContainer = bottomContainer.getBoundingClientRect();

    let total = positionContainer.top - positionBar.bottom;

    return number * total / maxNumber;
}

let totalNumber = getRandomNumber(1, 100);
let array = [];

let positionX = 0;
let maxNumber = 1000;

for (let i = 0; i < totalNumber; i++) {
    let rndNumber = getRandomNumber(0, maxNumber);
    let height = getHeight(rndNumber);
    array.push(new Line(positionX, rndNumber, height, i));
    positionX += 24;
}

let r = new Renderer(array);
r.show();