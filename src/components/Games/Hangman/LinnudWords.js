//word array
const linnud = [
    "PÄÄSUKE",
    "LÕOKE",
    "KULDNOKK",
    "TOONEKURG",
    "RASVATIHANE",
    "TUVI",
    "RÄHN",
    "LEEVIKE",
    "VARES",
    "KAJAKAS",
    "LUIK",
];

//Generate random word from array
function randomWord() {
    return linnud[Math.floor(Math.random() * linnud.length)];
}

export { randomWord };
