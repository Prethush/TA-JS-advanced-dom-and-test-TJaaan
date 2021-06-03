const removeArray = require('./remove');

test('test removeArray fn', () => {
  expect(removeArray([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
});

test('test removeArray fn', () => {
  expect(removeArray([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4]);
});

test('test removeArray fn', () => {
  expect(removeArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});
