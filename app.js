"use strict";
// use strict

const num = 123;
console.log(typeof num);

// function

function gpa(ssc, hsc) {
  //declaring
  const sum = ssc + hsc;
  return sum;
}

const result = gpa(5.0, 5.0); //call a function

console.log(result);

// Let's try now different arguments on the same function

function marketBill(shoes, bag, dress) {
  const product = shoes + bag + dress;
  return product;
}

const amount1 = marketBill(1800, 3500, 2500);
const amount2 = marketBill(880, 500, 500);
const amount3 = marketBill(180, 300, 200);

console.log(amount1);
console.log(amount3);

console.log(amount2);

//function declaration
function country(earth) {
  const message = `Hello, ${earth}🎖️💖`;
  return message;
}

console.log(country("Bangladesh"));
console.log(country("Palestine"));
console.log(country("Pakistan"));

function doMath(a, b, c, d = 5) {
  //Default parameters will not work
  console.log(a, b, c, d);
  const sum = a + c + b + d;
  const diff = sum - d;
  const prof = c * diff;
  return prof;
}
console.log(doMath(1, 3, 6, 9));

// function expression

const colorExpresser = function (colorName) {
  const textMessage = `This is ${colorName}`;
  return textMessage;
};

console.log(colorExpresser("Blue💙"));

//arrow function
const special = (digit1, digit2) => digit1 % digit2;
console.log(special(10, 5));

const ageCalculator = (birthyear) => 2023 - birthyear;

console.log(ageCalculator(1990));

//function calling another function
function cuteTrees(tree) {
  return tree * 4;
}
function makeFurniture(tree) {
  return cuteTrees(tree);
}

console.log(makeFurniture(4));

// arrays
const myNumbers = [10, 20, 30, 40, 50, 70, 80];
// access elements
console.log(myNumbers[5], myNumbers[0], myNumbers[8]);

//access index or position
console.log(
  myNumbers.indexOf(20),
  myNumbers.indexOf(40),
  myNumbers.indexOf(100)
);

//access length
console.log(myNumbers.length);

// and an element at the end ---push()
myNumbers.push(45);
console.log(myNumbers);

// and an element at the begining ---unshift()
myNumbers.unshift(100);
console.log(myNumbers);

// remove an element at from the end --pop()
myNumbers.pop();
console.log(myNumbers);

// remove an element from the beginnig -- shift()
myNumbers.shift();
myNumbers.shift();
myNumbers.shift();
console.log(myNumbers);

console.log(myNumbers);
console.log(myNumbers.includes(50));
console.log(myNumbers.includes(10.0));
