let division = (a, b) => {
    if(isNaN(parseInt(a))
        || isNaN(parseInt(b)
            || a === ''
            || b === '')){
        return null;
    }
    else if(b===0){
        return null;
    }
    return a / b;
};


module.exports = {division}














