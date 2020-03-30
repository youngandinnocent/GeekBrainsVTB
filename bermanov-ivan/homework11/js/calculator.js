const calculator = (operandOne, operandTwo, operation) => {
    if (operandOne === undefined
        || operandTwo === undefined
        || operation === undefined) {
            return undefined;
    } else if (isNaN(operandOne) || isNaN(operandTwo)) {
        return NaN;
    } else {
        switch (operation) {
            case '+':
                return operandOne + operandTwo;
            case '-':
                return operandOne - operandTwo;
            case '*':
                return operandOne * operandTwo;
            case '/':
                if (operandOne
                    && (operandTwo === 0 || operandTwo === '' || operandTwo === null)
                    && operation === '/') {
                        return new Error();
                }
                return operandOne / operandTwo;
            default:
                return null;
            }
    }
};


module.exports = { calculator };