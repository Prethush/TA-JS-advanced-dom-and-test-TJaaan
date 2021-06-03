## Using ESLint

- Create a folder with a `.js` file
- Install and setup the `eslint`
- Go through [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
- List 10 bad practices from the link above

// 1)Use the litereal syntax for object creation
// // bad
// const item = new Object();

// good
const item = {};

// 2) Use the literal syntax for array creation.
// // bad
// const items = new Array();

// good
const items = [];

// 3) Use Array#push instead of direct assignment to add items to an array.

const someStack = [];

// bad
// someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');

// 4) Use array spreads ... to copy arrays.

// // bad
// const len = items.length;
// const itemsCopy = [];
// let i;

// for (i = 0; i < len; i += 1) {
// itemsCopy[i] = items[i];
// }

// good
const itemsCopy = [...items];

// 5) To convert an iterable object to an array, use spreads ... instead of Array.from.

// const foo = document.querySelectorAll('.foo');

// good
// const nodes = Array.from(foo);

// best
const nodes = [...foo];

// 6) Use Array.from for converting an array-like object to an array.

// const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// // bad
// const arr = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);

// 7) Use single quotes '' for strings

// // bad
// const name = "Capt. Janeway";

// // bad - template literals should contain interpolation or newlines
// const name = `Capt. Janeway`;

// good
const name = 'Capt. Janeway';

// 8) Use named function expressions instead of function declarations.

// // bad
// function foo() {
// // ...
// }

// good

const short = function longUniqueMoreDescriptiveLexicalFoo() {
// ...
};

// 9) Always use class. Avoid manipulating prototype directly

// // bad
// function Queue(contents = []) {
// this.queue = [...contents];
// }
// Queue.prototype.pop = function () {
// const value = this.queue[0];
// this.queue.splice(0, 1);
// return value;
// };

// good
class Queue {
constructor(contents = []) {
this.queue = [...contents];
}
pop() {
const value = this.queue[0];
this.queue.splice(0, 1);
return value;
}
}

// 10) Use computed property names when creating objects with dynamic property names

// function getKey(k) {
// return `a key named ${k}`;
// }

// // bad
// const obj = {
// id: 5,
// name: 'San Francisco',
// };
// obj[getKey('enabled')] = true;

// good
const obj = {
id: 5,
name: 'San Francisco',
[getKey('enabled')]: true,
};

- Check if you get error (red underline) in VSCode.
- Comment the bad code and fix it below that

Example:

```js
var count = 1;
if (true) {
  count += 1;
}

let count = 1;
if (true) {
  count += 1;
}
```

#### Fix the following code given below by following the rules of Airbnb Style Guide. Use ESLint to find the error

1.

```js
var num = 10;

var increaseNumber = () => num++;
var increasePassedNumber = (number) => number++;

var num1 = increaseNumber();
var num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

2.

```js
var animalMethods = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
  },
};

function createAnimal(location, numberOfLegs) {
  let obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}

function createDog(location, numberOfLegs, name, color) {
  let obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, dogsMethods);
  obj.name = name;
  obj.color = color;
  return obj;
}

var dogsMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(dogsMethods, animalMethods);

function createCat(location, numberOfLegs, name, colorOfEyes) {
  let obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, catsMethods);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
}

let catsMethods = {
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(catsMethods, animalMethods);
```

3.

```js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};
```

4.

```js
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}
```
