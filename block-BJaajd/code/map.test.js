const { map, reduce } = require('./map');

const mapCallBack = jest.fn((e) => e * 3);
map([1, 2, 3], mapCallBack);

test('test map fn', () => {
  expect(map([1, 2, 3], (n) => n * 3)).toEqual([3, 6, 9]);
});
test('test map fn', () => {
  expect(mapCallBack.mock.calls.length).toBe(3);
});

test('test map fn', () => {
  expect(mapCallBack.mock.calls[0][0]).toBe(1);
});

const reduceCallBack = jest.fn((acc, curr) => {
  acc = acc + curr;
  console.log(acc);
  return acc;
});

reduce([1, 2, 3, 4], reduceCallBack, 0);

test('test reduce', () => {
  expect(reduce([1, 2, 3, 4], reduceCallBack, 0)).toBe(10);
});

test('test reduce', () => {
  expect(reduce([1, 2, 3, 4, 5, 6], reduceCallBack, 0)).toBe(21);
});

test('test reduce', () => {
  expect(reduceCallBack.mock.calls[0][1]).toBe(1);
});

test('test reduce', () => {
  expect(reduceCallBack.mock.calls[1][1]).toBe(2);
});
