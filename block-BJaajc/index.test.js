const { TestScheduler } = require('@jest/core');
const {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
} = require('./index');

test('test getFullName', () => {
  expect(getFullName('John', 'Snow')).toBe('John Snow');
});
test('test getFullName', () => {
  expect(getFullName('Arya', 'Stark')).toBe('Arya Stark');
});

test('test getFullName', () => {
  expect(getFullName('Bran', 'Stark')).toBe('Bran Stark');
});

test('test getFullName', () => {
  expect(getFullName('John', 'Snow')).not.toBe('John Stark');
});

test('test getFullName', () => {
  expect(getFullName('Arya', 'Stark')).not.toBe('Arya Lannister');
});

test('test getFullName', () => {
  expect(getFullName('Bran', 'Stark')).not.toBe('Bran Snow');
});

test('test isPalindrome', () => {
  expect(isPalindrome('deified')).toBe(true);
});

test('test isPalindrome', () => {
  expect(isPalindrome('xyx')).toBe(true);
});

test('test isPalindrome', () => {
  expect(isPalindrome('aaa')).toBe(true);
});

test('test isPalindrome', () => {
  expect(isPalindrome('deified')).not.toBe(false);
});
test('test isPalindrome', () => {
  expect(isPalindrome('xyx')).not.toBe(false);
});
test('test isPalindrome', () => {
  expect(isPalindrome('aaa')).not.toBe(false);
});

test('test getCircumference', () => {
  expect(getCircumference(2)).toBe(`The circumference of circle is ${12.56}`);
});

test('test getCircumference', () => {
  expect(getCircumference(3)).toBe(`The circumference of circle is ${18.84}`);
});

test('test getCircumference', () => {
  expect(getCircumference(4)).toBe(`The circumference of circle is ${25.12}`);
});

test('test getCircumference', () => {
  expect(getCircumference(2)).not.toBe(`The circumference of circle is ${12}`);
});

test('test getCircumference', () => {
  expect(getCircumference(3)).not.toBe(`The circumference of circle is ${18}`);
});

test('test getCircumference', () => {
  expect(getCircumference(4)).not.toBe(`The circumference of circle is ${25}`);
});

test('test getArea', () => {
  expect(getArea(2)).toBe(`The area is ${12}`);
});

test('test getArea', () => {
  expect(getArea(3)).toBe(`The area is ${28}`);
});

test('test getArea', () => {
  expect(getArea(4)).toBe(`The area is ${50}`);
});

test('test getArea', () => {
  expect(getArea(2)).not.toBe(`The area is ${10}`);
});

test('test getArea', () => {
  expect(getArea(3)).not.toBe(`The area is ${30}`);
});

test('test getArea', () => {
  expect(getArea(4)).not.toBe(`The area is ${40}`);
});
