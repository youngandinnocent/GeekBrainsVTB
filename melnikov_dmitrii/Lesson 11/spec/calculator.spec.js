let { Calculator } = require('../script');


describe('Calculate: ', () => {
    describe('Tests of the operation addition', () => {
        it('The valid case', () => {
            let result = Calculator.addition(3, 1);
            expect(result).toBe(4);
        })
        it('The argument a is not null', () => {
            let result = Calculator.addition(null, 1);
            expect(result).toEqual(1);
        })
        it('The argument b is not null', () => {
            let result = Calculator.addition(5, null);
            expect(result).toEqual(5);
        })
    })

    describe('Tests of the operation subtraction', () => {
        it('The valid case', () => {
            let result = Calculator.subtraction(6, 7);
            expect(result).toBe(-1);
        })
        it('The argument a is not underfind', () => {
            let result = Calculator.subtraction(undefined, 1);
            expect(result).toEqual(NaN);
        })
        it('The argument b is not underfind', () => {
            let result = Calculator.subtraction(5, undefined);
            expect(result).toEqual(NaN);
        })
    })

    describe('Tests of the operation multiplication', () => {
        it('The valid case', () => {
            let result = Calculator.multiplication(6, 7);
            expect(result).toBe(42);
        })
    })

    describe('Tests of the operation division', () => {
        it('The valid case', () => {
            let result = Calculator.division(6, 2);
            expect(result).toBe(3);
        })
    })
});