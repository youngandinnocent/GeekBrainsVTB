let multiplicationScript = require('../js/multiplication');
let multiplication = multiplicationScript.multiplication;


describe('Функция multiplication()', ()=>{
    it('должна вернуть 10 при аргументах a = 12 b = 2', ()=>{
        expect(multiplication(12,2)).toBe(24)
    });
    it(`должна вернуть null при аргументах a = '' b = 8`, ()=>{
        expect(multiplication('',8)).toBe(null)
    });

    it(`должна вернуть null при аргументах a = '' b = 'савелий'`, ()=>{
        expect(multiplication('','савелий ')).toBe(null)
    });
    it(`должна вернуть null при аргументах a = undefined b = 3`, () => {
        expect(multiplication(undefined, 3)).toBe(null);
    });
    it(`должна вернуть null при аргументах a = Infinity b = 3`, () => {
        expect(multiplication(Infinity, 3)).toBe(null);
    });
});









