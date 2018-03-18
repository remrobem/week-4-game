window.onload = function () {

    startGame();

};



const randomGameMin = 19;
const randomGameMax = 120;
const randomCrystalMin = 1;
const randomCrystalMax = 12;
let crystalValues = [];


let crystalGame = {

    randomGame: getRandomInt(randomGameMin, randomGameMax),
    randomCrystal: getRandomInt(randomCrystalMin, randomCrystalMax),






};

console.log(getRandomInt(randomGameMin, randomGameMax));
console.log(getRandomInt(randomCrystalMin, randomCrystalMax));



function startGame() {
    let gameRandomNumber = getRandomInt(randomGameMin, randomGameMax);
    $('#gameRandomNumber').text(gameRandomNumber);
    defineCrystalValues();
};

function defineCrystalValues() {

    // set the length of the array to 4 integers
    crystalValues = [1, 2, 3, 4];

    crystalValues.forEach(function (number, i) {
        crystalValues[i] = getRandomInt(randomCrystalMin, randomCrystalMax)});

    return crystalValues;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};