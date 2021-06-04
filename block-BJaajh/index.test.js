let checkFive = require("./index");

test('test checkFive', () => {
    expect(checkFive(3)).toBe(`${3} is less than 5.`);
})

test('test checkFive', () => {
    expect(checkFive(6)).toBe(`${6} is greater than 5.`);
});

test('test checkFive', () => {
    expect(checkFive(5)).toBe(`${5} is equal to 5.`);
})

test('test checkFive', () => {
    expect(checkFive(5)).not.toBe(`${5} is not less than to 5.`);
})

test('test checkFive', () => {
    expect(checkFive(3)).not.toBe(`${3} is not equal to 5.`);
})