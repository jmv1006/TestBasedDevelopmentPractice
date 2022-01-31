const alphabet = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
];

let numbers = [];
let offsetValue;
let wordLength;
let operationComplete = 0;
let newString = '';

function cesarCipher(offset, text) {
offsetValue = offset;
wordLength = text.length;
matchCharactersWithNumbers(text);
return newString;
}

function matchCharactersWithNumbers(text) {
const stringLength = text.length;
for (let j = 0; j < stringLength; j++) {
    match(text[j]);
}
}

function match(char) {
for (let k = 0; k < alphabet.length; k++) {
    if (char === alphabet[k]) {
    let letter = alphabet[k];
    let index = alphabet.indexOf(letter);
    numbers.push(index);
    }
}
operationComplete++;
if (operationComplete === wordLength) {
    applyOffset();
}
}

function applyOffset() {
for (let b = 0; b < numbers.length; b++) {
    let currentNum = numbers[b];
    let newNum = currentNum + offsetValue;
    numbers.splice(b, 1, newNum);
}
console.log(numbers);
completeCipher();
}

function completeCipher() {
    for(let i = 0; i < numbers.length; i++) {
        let offsetIndex = numbers[i];
        let newChar = alphabet[offsetIndex];
        newString += newChar
    };
};

module.exports = cesarCipher;
