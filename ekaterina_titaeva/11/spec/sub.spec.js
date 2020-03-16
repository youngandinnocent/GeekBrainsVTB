const funcScript = require('../js/sub');
const sub = funcScript.sub;

describe('Given sub', () => {
    it('When I have 5 and 3, Then I should get 2', () => {
        expect(sub(5, 3)).toBe(2);
    });
    it('When I have -4 and -2, Then I should get -2', () => {
        expect(sub(-4, -2)).toBe(-2);
    });
    it('When I have -7 and 3, Then I should get -10', () => {
        expect(sub(-7, 3)).toBe(-10);
    });
    it('When I have 7 and -3, Then I should get 10', () => {
        expect(sub(7, -3)).toBe(10);
    });
    it('When I have 3 and 0, Then I should get 3', () => {
        expect(sub(3, 0)).toBe(3);
    });
    it('When I have 0 and 7, Then I should get -7', () => {
        expect(sub(0, 7)).toBe(-7);
    });
    it('When I have null and -3, Then I should get null', () => {
        expect(sub(null, -3)).toBe(null);
    });
    it('When I have 4 and undefined, Then I should get null', () => {
        expect(sub(4, undefined)).toBe(null);
    });
    it(`When I have 4 and '', Then I should get null`, () => {
        expect(sub(4, '')).toBe(null);
    });
    it(`When I have 'hello' and 3, Then I should get null`, () => {
        expect(sub('hello', 3)).toBe(null);
    });
    it(`When I have '4' and 3, Then I should get 1`, () => {
        expect(sub('4', 3)).toBe(1);
    });
});