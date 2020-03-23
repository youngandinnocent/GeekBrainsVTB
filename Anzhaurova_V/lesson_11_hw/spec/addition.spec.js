let additionScript = require('../js/addition');
let addition = additionScript.addition;


describe('Функция addition()', ()=>{
    it('должна вернуть 5 при аргументах a = 2 b = 3', ()=>{
        expect(addition(2,3)).toBe(5)
    });
    it(`должна вернуть null при аргументах a = '' b = 3`, ()=>{
        expect(addition('',3)).toBe(null)
    });

    it(`должна вернуть null при аргументах a = '' b = 'савелий'`, ()=>{
        expect(addition('','савелий ')).toBe(null)
    });
    it(`должна вернуть null при аргументах a = undefined b = 13`, () => {
        expect(addition(undefined, 13)).toBe(null);
    });
});

