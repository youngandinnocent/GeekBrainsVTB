const funScript = require('../js/mul');
const mul = funScript.mul;

describe('Given mul', () => {
    it('When I have 4 and 3, Then I should get 12', () => {
        expect(mul(4, 3)).toBe(12);
    });
    it('When I have -4 and -2, Then I should get 8', () => {
        expect(mul(-4, -2)).toBe(8);
    });
    it('When I have -7 and 3, Then I should get -21', () => {
        expect(mul(-7, 3)).toBe(-21);
    });
    it('When I have 1 and -3, Then I should get -3', () => {
        expect(mul(1, -3)).toBe(-3);
    });
    it('When I have 3 and 0, Then I should get 0', () => {
        expect(mul(3, 0)).toBe(0);
    });
    it('When I have null and -3, Then I should get null', () => {
        expect(mul(null, -3)).toBe(null);
    });
    it('When I have 4 and undefined, Then I should get null', () => {
        expect(mul(4, undefined)).toBe(null);
    });
    it(`When I have 4 and '', Then I should get null`, () => {
        expect(mul(4, '')).toBe(null);
    });
    it(`When I have 'hello' and 3, Then I should get null`, () => {
        expect(mul('hello', 3)).toBe(null);
    });
    it(`When I have '4' and 3, Then I should get 12`, () => {
        expect(mul('4', 3)).toBe(12);
    });
});