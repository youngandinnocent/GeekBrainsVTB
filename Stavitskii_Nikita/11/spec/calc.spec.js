const calc = require('../calc.js');
const sum = calc.sum;
const multiply = calc.multiply;
const substract = calc.substract;
const divide = calc.divide;

describe('Given a sum() function', () => {
    it('When I append 2 and 2 Then the result should be 4', () => {
        expect(sum(2, 2)).toBe(4);
    });
    it(`And When I append 'string' and 2 Then the result should be NaN`, () => {
        expect(sum('string', 2)).toEqual(NaN);
    })
    it(`And When I append 'undefined' and 2 Then the result should be NaN`, () => {
        expect(sum('undefined', 2)).toEqual(NaN);
    })
    it(`And When I append 'null' and 2 Then the result should be NaN`, () => {
        expect(sum('null', 2)).toEqual(NaN);
    })
    it(`And When I append '' and 2 Then the result should be 2`, () => {
        expect(sum('', 2)).toBe(2);
    })
})

describe('Given a multiply() function', () => {
    it('When I append 3 and 3 Then the result should be 4', () => {
        expect(multiply(3, 3)).toBe(9);
    });
    it(`And When I append 'string' and 2 Then the result should be NaN`, () => {
        expect(multiply('string', 2)).toEqual(NaN);
    })
    it(`And When I append 'undefined' and 2 Then the result should be NaN`, () => {
        expect(multiply('undefined', 2)).toEqual(NaN);
    })
    it(`And When I append 'null' and 2 Then the result should be NaN`, () => {
        expect(multiply('null', 2)).toEqual(NaN);
    })
    it(`And When I append '' and 2 Then the result should be 0`, () => {
        expect(multiply('', 2)).toBe(0);
    })
})

describe('Given a substract() function', () => {
    it('When I append 2 and 2 Then the result should be 0', () => {
        expect(substract(2, 2)).toBe(0);
    });
    it(`And When I append 'string' and 2 Then the result should be NaN`, () => {
        expect(substract('string', 2)).toEqual(NaN);
    })
    it(`And When I append 'undefined' and 2 Then the result should be NaN`, () => {
        expect(substract('undefined', 2)).toEqual(NaN);
    })
    it(`And When I append 'null' and 2 Then the result should be NaN`, () => {
        expect(substract('null', 2)).toEqual(NaN);
    })
    it(`And When I append '' and 2 Then the result should be -2`, () => {
        expect(substract('', 2)).toBe(-2);
    })
})

describe('Given a divide() function', () => {
    it('When I append 2 and 2 Then the result should be 1', () => {
        expect(divide(2, 2)).toBe(1);
    });
    it(`And When I append 'string' and 2 Then the result should be NaN`, () => {
        expect(divide('string', 2)).toEqual(NaN);
    })
    it(`And When I append 'undefined' and 2 Then the result should be NaN`, () => {
        expect(divide('undefined', 2)).toEqual(NaN);
    })
    it(`And When I append 'null' and 2 Then the result should be NaN`, () => {
        expect(divide('null', 2)).toEqual(NaN);
    })
    it(`And When I append '' and 2 Then the result should be 0`, () => {
        expect(divide('', 2)).toBe(0);
    })
})