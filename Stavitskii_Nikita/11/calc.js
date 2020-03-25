let sum = (a, b) => {
    a = +a;
    b = +b;

    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    }

    return NaN;
}

let multiply = (a, b) => {
    a = +a;
    b = +b;

    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    }
    
    return NaN;
}

let substract = (a, b) => {
    a = +a;
    b = +b;

    if (!isNaN(a) && !isNaN(b)) {
        return a - b;
    }

    return NaN;
}

let divide = (a, b) => {
    a = +a;
    b = +b;

    if (!isNaN(a) && !isNaN(b)) {
        return a / b;
    }
    
    return NaN;
}

module.exports = {
    sum,
    multiply,
    substract,
    divide
};