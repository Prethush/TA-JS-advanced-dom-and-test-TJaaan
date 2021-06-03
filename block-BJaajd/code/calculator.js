function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function power(a, number) {
  return Math.pow(a, number);
}

function factorial(a) {
  let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
