const calculator = (operandOne, operandTwo, operation) => {
    if (operandOne === undefined
        || operandTwo === undefined
        || operation === undefined) {
            return undefined;
    } else if (isNaN(operandOne) || isNaN(operandTwo)) {
        return NaN;
    } else if (operandOne
        && (operandTwo === 0 || operandTwo === '' || operandTwo === null)
        && operation === '/') {
            return new Error();
    } else {
        switch (operation) {
            case '+':
                return operandOne + operandTwo;
            case '-':
                return operandOne - operandTwo;
            case '*':
                return operandOne * operandTwo;
            case '/':
                return operandOne / operandTwo;
            default:
                return undefined;
            }
    }
};


module.exports = { calculator };