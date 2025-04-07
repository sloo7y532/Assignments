//=================================================================
console.log("-------------------a-------------------");
//?  a- What is an anonymous function? Explain with an example ?
// anonymous function: is a function that does not have a name.
// It's often used when the function is needed only once or for a short period,
// like when it's passed as an argument to another function (such as setTimeout, map, filter)

setTimeout(function () {
  console.log("hello");
}, 1000);
//=================================================================
console.log("-------------------b-------------------");
//?  b- Explain how functions are hoisted ?
// When you use a function declaration, the entire function is hoisted
//  — both the name and the body — so you can call the function before it's defined in the code.
//=================================================================

console.log("-------------------c-------------------");
//?  c- What is closures in JavaScript? Explain with an example ?
// A closure is created when a function remembers the variables from its outer (lexical) scope,
// even after the outer function has finished executing.

function outerFunction() {
  let count = 0;

  return function innerFunction() {
    count++;
    console.log("Count:", count);
  };
}

const counter = outerFunction(); // outerFunction is called once
counter(); // Count: 1
counter(); // Count: 2
//=================================================================
console.log("-------------------d-------------------");
//?  d- What does filter() do, and how is it different from map()?Explain with examples ?

// filter(): Returns: A new array with only the elements that pass the condition.
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log("Filtered numbers:" + filteredNumbers); // [2,4]

// map(): Purpose: Transforms each element in an array and returns a new array.
//        Returns: A new array of the same length, with each element transformed.
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log("numbers: " + doubledNumbers);
// [2, 4, 6, 8, 10]
//=================================================================
console.log("-------------------e-------------------");
//?  e- Use map to generate an array with squared values of another array ?

const numbers1 = [2, 3, 4, 5];
let squaredNumbers = numbers1.map((e) => {
  return e * e;
});
console.log(squaredNumbers);
// [4, 9, 16, 25]

//=================================================================
console.log("-------------------f-------------------");
//?  f- Write a function that filters negative values from an array ?

const numbers2 = [-2, -3, 4, 5, 6];
let positiveNumbers = numbers2.filter((number) => {
  return number >= 0;
});

console.log(positiveNumbers); // [4, 5, 6]

//=================================================================
console.log("-------------------g-------------------");
//?  g- Use filter() and map() to remove any number divisible by 3 in an array and multiply the resulting array elements by 5 ?

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filteredAndMultipliedNumbers = numbers3
  .filter((number) => {
    return number % 3 !== 0;
  })
  .map((number) => {
    return number * 5;
  });
console.log(filteredAndMultipliedNumbers); // [ 5, 10, 20, 25, 35, 40 ]
//=================================================================
console.log("-------------------g-------------------");
//?  h- Use reduce to get the total amount of all transactions ?

const transactions = [
  { type: "credit", amount: 100 },
  { type: "credit", amount: 200 },
  { type: "debit", amount: 50 },
  { type: "debit", amount: 500 },
  { type: "credit", amount: 120 },
  { type: "debit", amount: 50 },
];

let totalAmount = transactions.reduce((accumulator, current) => {
  return accumulator + current.amount;
}, 0);
console.log(totalAmount);
//================================================================
console.log("-------------------h-------------------");
//?  i- Use reduce to get the total amount of credit transactions ?

let totalCreditAmount = transactions.reduce((accumulator, current) => {
  return current.type === "credit" ? accumulator + current.amount : accumulator;
}, 0);
console.log(totalCreditAmount);
//=================================================================