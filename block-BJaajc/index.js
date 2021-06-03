function getFullName(firstName, lastName) {
  let fullName = firstName + ' ' + lastName;
  return fullName;
}

function isPalindrome(value) {
  let reverse = value.split('').reverse().join('');
  return reverse === value;
}

function getCircumference(radius) {
  return `The circumference of circle is ${3.14 * 2 * radius}`;
}

function getArea(radius) {
  return `The area is ${Math.floor(3.14 * radius * radius)}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
};
