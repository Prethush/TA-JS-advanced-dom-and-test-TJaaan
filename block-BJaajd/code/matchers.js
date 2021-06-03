// Common Matchers

// eg:-

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

//numbers

test('2 + 5', () => {
  const value = 2 + 5;
  expect(value).toBegreaterThan(5);
  expect(value).toLessThan(8);
});

//Strings

test('there is not a in zoo', () => {
  expect('zoo').not.match(/a/);
});

//Arrays

const list = [1, 2, 3, 4];

test('test list array', () => {
  expect(list).toContain(1);
});

//tobeNull()

let value = null;

test('test value', () => {
  expect(value).toBeNull();
});

//toBeUndefined()

let abc = undefined;

test('test abc', () => {
  expect(abc).toBeUndefined();
});

//toBeNaN

let abc = 'NaN';

test('test abc', () => {
  expect(abc).toBeNaN();
});

//toBeTruthy()

let a = 10;

test('test a', () => {
  expect(a).toBeTruthy();
});

//.toBe(value)

const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});

//.toBeFalsy()

drinkSomeLaCroix();
if (!getErrors()) {
  drinkMoreLaCroix();
}
