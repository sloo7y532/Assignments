/*
Explaning:
Currying is a functional programming technique where a function that takes multiple arguments 
is transformed into a sequence of functions, each taking a single argument. Instead of calling 
a function with all arguments at once, you call a series of functions, each handling one argument at a time.

Syntax of Currying in JavaScript
You can implement currying using nested functions or by leveraging JavaScript’s .bind() method.

Example 1: Using Nested Functions*/
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(2)(3)(4)); // Output: 9
//Here, add(2) returns a function that takes b, which returns another function that takes c, and finally, the sum is computed.

//Example 2: Using Arrow Functions
const multiply = (a) => (b) => (c) => a + b + c;

console.log(multiply(2)(3)(4)); // Output: 9
//====================================================================================

//Normal Functions
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// Arrow Functions
let checker1 = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;
console.log(checker1("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker1("Ahmed")("Not Available")()); // Iam Not Avaialble
