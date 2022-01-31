
const capitalize = require('./sum');
const reverseString = require('./reverseString');
const calculate = require('./calculate');
const cesarCipher = require('./cesarCipher');
const analyzeArray = require('./analyzeArray');
const { object } = require('webidl-conversions');

test('first letter is capitalized', () => {
  expect(capitalize('word')).toBe('Word');
});


test('reverse string', () => {
    expect(reverseString('cat')).toBe('tac');
});


test('calculate', () => {
    expect(calculate(36, 6, '/')).toBe(6);
});

test('cypher', () => {
    expect(cesarCipher(4, 'minnie')).toBe('qmrrmi');
});

const desiredOutput = {
    'average': 5,
    'min': 1,
    'max': 8,
    'length': 4
};

test('get object', () => {
    expect(analyzeArray([1,5,8,4])).toMatchObject(desiredOutput);
});

