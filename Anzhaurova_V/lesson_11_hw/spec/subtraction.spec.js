let subtractionScript = require('../js/subtraction');
let subtraction = subtractionScript.subtraction;


describe('Функция subtraction()', ()=>{
    it('должна вернуть 10 при аргументах a = 20 b = 10', ()=>{
        expect(subtraction(20,10)).toBe(10)
    });
    it(`должна вернуть null при аргументах a = '' b = 8`, ()=>{
        expect(subtraction('',8)).toBe(null)
    });

    it(`должна вернуть null при аргументах a = '' b = 'савелий'`, ()=>{
        expect(subtraction('','савелий ')).toBe(null)
    });
    it(`должна вернуть null при аргументах a = undefined b = 23`, () => {
        expect(subtraction(undefined, 23)).toBe(null);
    });
});
