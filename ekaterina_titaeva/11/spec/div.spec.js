const funScript = require('../js/div');
const div = funScript.div;

describe('Given div', () => {
    it('When I have 4 and 2, Then I should get 2', () => {
        expect(div(4, 2)).toBe(2);
    });
    it('When I have 9 and -3, Then I should get -3', () => {
        expect(div(9, -3)).toBe(-3);
    });
    it('When I have -7 and 1, Then I should get -7', () => {
        expect(div(-7, 1)).toBe(-7);
    });
    it('When I have 0 and 5, Then I should get 0', () => {
        expect(div(0, 5)).toBe(0);
    });
    it('When I have -8 and -4, Then I should get 2', () => {
        expect(div(-8, -4)).toBe(2);
    });
    it('When I have null and -3, Then I should get null', () => {
        expect(div(null, -3)).toBe(null);
    });
    it('When I have 4 and undefined, Then I should get null', () => {
        expect(div(4, undefined)).toBe(null);
    });
    it(`When I have 4 and '', Then I should get null`, () => {
        expect(div(4, '')).toBe(null);
    });
    it(`When I have 'hello' and 3, Then I should get null`, () => {
        expect(div('hello', 3)).toBe(null);
    });
    it(`When I have '4' and 1, Then I should get 4`, () => {
        expect(div('4', 1)).toBe(4);
    });
});