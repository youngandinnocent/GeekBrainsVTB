let divisionScript = require('../js/division');
let division = divisionScript.division;


describe('Функция division()', ()=>{
    it('должна вернуть 10 при аргументах a = 20 b = 2', ()=>{
        expect(division(20,10)).toBe(2)
    });
    it(`должна вернуть null при аргументах a = '' b = 8`, ()=>{
        expect(division('',8)).toBe(null)
    });

    it(`должна вернуть null при аргументах a = '' b = 'савелий'`, ()=>{
        expect(division('','савелий ')).toBe(null)
    });
    it(`должна вернуть null при аргументах a = undefined b = 3`, () => {
        expect(division(undefined, 3)).toBe(null);
    });
    it(`должна вернуть null при аргументах a = Infinity b = 3`, () => {
        expect(division(Infinity, 3)).toBe(null);
    });
    it(`должна вернуть null при аргументах a = 3 b = 0`, () => {
        expect(division(3, 0)).toEqual(null);
    });
});














