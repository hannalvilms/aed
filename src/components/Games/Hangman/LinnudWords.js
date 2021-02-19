//word array
const linnud = [
    "RÄHN",
    "TUVI",
];

//Generate random word from array
function randomWord() {
    return linnud[Math.floor(Math.random() * linnud.length)];
}

export { randomWord };
