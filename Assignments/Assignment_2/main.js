console.log("--------------a-------------------");
// ?   a- How to check if two strings are the same regardless of casing? (upper / lower case) ?

let a = "Hello";
let b = "hello";
// Convert both strings to lowercase before comparing them.
console.log(a.toLowerCase() === b.toLowerCase()); // true

//=================================================================
console.log("--------------b-------------------");
//?  b- What does .trunc() and .floor() do? Do they always return the same result? Illustrate with code ?
//* yes, .trunc() removes any fractional part of a number, .floor() rounds down to the nearest integer.

let x = 15.6;
console.log(Math.trunc(x)); // Output:15
console.log(Math.floor(x)); // Output:15

//=================================================================
console.log("--------------c-------------------");
//?  c- What is Type Coercion in JavaScript? Explain with an example ?
//* Type coercion is the automatic conversion of one data type to another.

let c = "10";
console.log(c + 10); // Output: 1010 (string conversion) Implicit Type Coercion
console.log(Number(c) + 10); // Output: 20 (number conversion) Explicit Type Coercion
console.log(Boolean(0)); // Output: false (Boolean Coercion)

//=================================================================
console.log("--------------d-------------------");
//?  d- What makes a value “truthy” or “falsy” in JavaScript? Give me 5 distinct examples of each ?
//!  - Truthy values: true, 1, "hello", [1, 2, 3], {}
//! - Falsy values: false, 0, "", null, undefined, NaN

console.log(Boolean(true)); // Output: true
console.log(Boolean(1)); // Output: true
console.log(Boolean("hello")); // Output: true
console.log(Boolean([1, 2, 3])); // Output: true
console.log(Boolean({})); // Output: true

console.log(Boolean(false)); // Output: false
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false

//=================================================================
console.log("--------------e-------------------");
//?  e- What is the output of the following? Explain why ?
//! || operator returns the first truthy value, otherwise, it returns the last operand if all values are {falsy}
console.log(false || 0 || null || undefined || "Fallback"); // Output: Fallback => because ( false, 0, null, undefined ) are all falsy values

//=================================================================
console.log("--------------f-------------------");
//?  f- What the difference between “??” and “||” ?Answer deducing the expected output from the code below ?
//! (||) and (??) with falsy values it will return the first truthy value.
//* but with "??" it will only ignore (null) and (undefined) only.
//* and with "||" it will ignore all Falsy values.

let value = 0;
let value2 = false;
let value3 = undefined;
let value4 = "";

console.log(value || 10); // Output:10
console.log(value ?? 10); // Output:0

console.log(value2 || 10); // Output:10
console.log(value2 ?? 10); // Output:false

console.log(value3 || 10); // Output:10
console.log(value3 ?? 10); // Output:10

console.log(value4 || 10); // Output:10
console.log(value4 ?? 10); // Output:   => because it ignores (null) and (undefined) only.

//=================================================================
console.log("--------------g-------------------");
//? g- What is the output of the following? Explain why ?
//!   (&&) operator returns the first falsy value, Otherwise, it returns the last operand if all values are {truthy}

console.log(1 && "world"); // Output:world => because it returns the last truthy value 
console.log(0 && "world"); // Output:0 => because (0) is a falsy value
