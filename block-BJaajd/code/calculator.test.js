const { TestScheduler } = require('@jest/core');
const {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
} = require('./calculator');

test('test add', () => {
  expect(add(5, 3)).toBe(8);
});
test('test subtract', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('test sum', () => {
  expect(sum(10, 3)).toBe(13);
});

test('test multiply', () => {
  expect(multiply(10, 3)).toBe(30);
});

test('test power', () => {
  expect(power(2, 3)).toBe(8);
});

test('test factorial', () => {
  expect(factorial(4)).toBe(24);
});
