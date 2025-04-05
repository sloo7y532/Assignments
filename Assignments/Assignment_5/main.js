//=================================================================
console.log("--------------a-------------------");
//?   a- What are arrow functions, and how do they differ from regular functions? Answer with examples ?
//* Arrow functions: Arrow functions are a concise way to write functions in JavaScript.
// They differ from regular functions in syntax, behavior, and how they handle the this keyword.

// Regular function
function add(a, b) {
  return a + b;
}
console.log(add(5, 6)); // Output:11

// Arrow function

const addArrow = (a, b) => a + b;
console.log(addArrow(5, 6)); // Output:11
//=================================================================
console.log("--------------b-------------------");
//?  b- What are default parameters in functions? Give an example ?
//* default parameters in functions allows you to define default value for function parameters.

function hello(name, age = 0) {
  return `Hello ${name}, Your age is ${age}`;
}
console.log(hello("saleh", 35));
console.log(hello("saleh"));
//=================================================================
console.log("--------------c-------------------");
//?  c- Write a function that takes a start and an end, returns the sum of all odd numbers in between ?

function sumOfOddNumbers(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(`sum: ${sumOfOddNumbers(1, 5)}`);
//=================================================================
console.log("--------------d-------------------");
//?  d- When should you prefer a while loop over a for loop? Explain with a simple example ?
//*   Use while when the number of iterations is unknown or until a condition changes ( user input, waiting for a condition).
//*   Use for when you know exactly how many times the loop should run.

// Example with while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Example with for loop
for (let j = 0; j < 5; j++) {
  console.log(j);
}
//=================================================================
console.log("--------------e-------------------");
//?  e- What is the difference between while & do...while loops? (explain with examples) ?
//* do while loop: will execute the code and then check the condition.
//* while loop: will check the condition first and then execute the code.

// Example with do...while loop
let x = 0;
do {
  console.log(x);
  x++;
} while (x < 5);
//Output:
//  0
//  1
//  2
//  3
//  4

// Example with While loop
let y = 0;
while (y < 5) {
  console.log(y);
  y++;
}
//Output:
//  0
//  1
//  2
//  3
//  4
//=================================================================
console.log("--------------f-------------------");
//?  f- Write a do while loop that generates a random number between 1 and 10 until the number 5 is generated.

let randomNumber;
do {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
} while (randomNumber !== 5);
//=================================================================
console.log("--------------g-------------------");
//?  g- Write a while loop that keeps requesting input from the user as long as it doesn’t enter a value divisible by 3 ?

let userInput;
while (true) {
  userInput = parseInt(prompt("Enter a value"), 10);
  if (userInput % 3 === 0) {
    alert(`The ${userInput} is divisible by 3.`);
    break;
  }
}
//=================================================================
console.log("--------------h-------------------");
//?  h- Write a function “generateStars(number)” that generates a dynamic number of rows of stars based on
//?  the sent number to form an output as below (Do not use AI for this Question at all) ?

function generateStars(number) {
  for (let i = 0; i < number; i++) {
    let stars = [];
    let spaces = [];
    for (let j = 0; j < i * 2 + 1; j++) {
      stars.unshift("*");
    }
    for (let k = number; k > i; k--) {
      spaces.unshift(" ");
    }
    console.log(spaces.concat(stars).join(""));
  }
}
generateStars(5);

function generateStars(number) {
  for (let i = 0; i < number; i++) {
    let stars = "";
    let spaces = "";
    for (let j = 0; j < i * 2 + 1; j++) {
      stars += "*";
    }
    for (let k = number; k > i; k--) {
      spaces += " ";
    }
    console.log(spaces.concat(stars));
  }
}
generateStars(5);

/*
Output:
     *
    ***
   *****
  *******
 *********
*/
