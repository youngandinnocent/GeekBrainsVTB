const calculatorModule = require('../js/calculator');

const { calculator } = calculatorModule;

describe('Calculator function', () => {

    it('1.should return true result for operandOne = number, operandTwo = number and operation = (+, -, *, /)', () => {
        expect(calculator(1, 2, '+')).toBe(3);
        expect(calculator(1, 2, '-')).toBe(-1);
        expect(calculator(5, 3, '*')).toBe(15);
        expect(calculator(10, 5, '/')).toBe(2);
    });

    it('2.should return NaN for operandOne = not a number or operandTwo = not a number', () => {
        expect(calculator('hello', 'world', '-')).toBeNaN();
        expect(calculator(25, 'bye', '+')).toBeNaN();
        expect(calculator('wow', 7, '*')).toBeNaN();
        expect(calculator('str', '', '/')).toBeNaN();
    });

    it('3.should return Error for operandTwo = (0/null/empty string) and operation = /', () => {
        expect(calculator(10, 0, '/')).toEqual(new Error());
        expect(calculator(-2, 0, '/')).toEqual(new Error());
        expect(calculator(3, '', '/')).toEqual(new Error());
        expect(calculator(8, null, '/')).toEqual(new Error());
    });

    it('4.should return undefined for undefined operands or undefined operation', () => {
        expect(calculator(17, undefined, '*')).toBeUndefined();
        expect(calculator(undefined, 4, '/')).toBeUndefined();
        expect(calculator(1, 0, undefined)).toBeUndefined();
    });

    it('5.should return null for unexpected operation', () => {
        expect(calculator(5, 5, '!')).toBeNull();
        expect(calculator(5, 5, '?')).toBeNull();
        expect(calculator(5, 25, '//')).toBeNull();
        expect(calculator(40, 23, 'Hello, BDD!')).toBeNull();
    });
});
