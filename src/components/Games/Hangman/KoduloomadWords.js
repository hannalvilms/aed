//word array
const koduloomad = [
    "LAMMAS",
    "LEHM",
    "SIGA",
    "KITS",
    "KANA",
    "HANI",
    "KALKUN",
    "MERISIGA",
    "HAMSTER",
    "PAPAGOI",
];

//Generate random word from array
function randomWord() {
    return koduloomad[Math.floor(Math.random() * koduloomad.length)];
}

export { randomWord };
