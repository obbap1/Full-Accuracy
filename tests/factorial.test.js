const factorial = require('../factorial');

test('factorial to return correct factorial values', () => {
    expect(factorial(0)).toBeDefined();
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
})