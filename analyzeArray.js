
let object = {}


function analyzeArray(array) {
    getAverage(array);
    getMin(array);
    getMax(array);
    getLength(array);
    return object;
}

function getAverage(array) {
    let sum = array.reduce((partialSum, a) => partialSum + a, 0);
    let average = sum / array.length;
    let roundedAverage = Math.round(average);
    object.average = roundedAverage;
};

function getMin(array) {
    let min = Math.min(...array);
    object.min = min;
};

function getMax(array) {
    let max = Math.max(...array);
    object.max = max;
}

function getLength(array) {
    let length = array.length;
    object.length = length;
}

module.exports = analyzeArray;