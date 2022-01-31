
function calculate(num1, num2, operator) {
    switch(operator) {
    case('+'):
        return num1 + num2;
        break;
    case('-'):
        return num1 - num2;
        break;
    case('/'):
        return num1 / num2;
        break;
    case('*'):
        return num1 * num2;
        break;
    default:
            //do nothing
    }
};

module.exports = calculate;