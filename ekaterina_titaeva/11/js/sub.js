const sub = (a, b) => {
    if (isNaN(parseInt(a)) || isNaN(parseInt(b)) || a === '' || b === '')
        return null;
    return parseInt(a) - parseInt(b);
}

module.exports = { sub };