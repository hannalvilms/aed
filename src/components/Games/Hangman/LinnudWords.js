const linnud = [
    "RÄHN",
    "TUVI",
];

function randomWord() {
    return linnud[Math.floor(Math.random() * linnud.length)];
}

export { randomWord };
