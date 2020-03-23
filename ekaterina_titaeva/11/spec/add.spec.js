const funcScript = require('../js/add');
const add = funcScript.add;

describe('Given add', () => {
    it('When I have 2 and 4, Then I should get 6', () => {
        expect(add(2, 4)).toBe(6);
    });
    it('When I have -1 and 5, Then I should get 4', () => {
        expect(add(-1, 5)).toBe(4);
    });
    it('When I have 0 and 2, Then I should get 2', () => {
        expect(add(0, 2)).toBe(2);
    });
    it('When I have -5 and -3, Then I should get -8', () => {
        expect(add(-5, -3)).toBe(-8);
    });
    it('When I have null and -3, Then I should get null', () => {
        expect(add(null, -3)).toBe(null);
    });
    it('When I have 4 and undefined, Then I should get null', () => {
        expect(add(4, undefined)).toBe(null);
    });
    it(`When I have 4 and '', Then I should get null`, () => {
        expect(add(4, '')).toBe(null);
    });
    it(`When I have 'hello' and 3, Then I should get null`, () => {
        expect(add('hello', 3)).toBe(null);
    });
    it(`When I have '4' and 3, Then I should get 7`, () => {
        expect(add('4', 3)).toBe(7);
    });
});