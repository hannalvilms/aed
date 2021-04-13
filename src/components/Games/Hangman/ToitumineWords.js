//word array
const koduloomad = [
    "VASIKAS",
    "LAMBATALL",
    "KITSETALL",
    "PÕRSAS",
    "KANATIBU",
    "PARDITIBU",
    "VARSS",
    "KOERAKUTSIKAS",
    "REBASEKUTSIKAS",
];

//Generate random word from array
function randomWord() {
    return koduloomad[Math.floor(Math.random() * koduloomad.length)];
}

export { randomWord };
