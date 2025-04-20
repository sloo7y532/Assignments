//=================================================================
console.log("--------------a-------------------");
//?  a- Create an Array of numbers, use for loop to create another array with the squared values of these numbers ?

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  squaredNumbers.push(numbers[i] * numbers[i]);
}
console.log(squaredNumbers);

//========================================================================
console.log("--------------b-------------------");
//?  b- Write a for loop that calculates the sum of numbers from 1 to 50 ?

let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log(sum);
//========================================================================
console.log("--------------c-------------------");
//?  c- Write a for loop that logs the numbers from 15 to 1 ?

for (let i = 15; i >= 1; i--) {
  console.log(i);
}
//========================================================================
console.log("--------------d-------------------");
//?  d- Write a for loop that finds the sum of all even numbers in an array ?

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumEvenNumbers = 0;

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0) {
    sumEvenNumbers += numbers1[i];
  }
}

console.log(sumEvenNumbers);

//========================================================================
console.log("--------------e-------------------");

//?  e- In 3 lines of code, write the multiplication table of 7 (Sample output below) ?

for (let i = 0; i <= 5; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}
// 7 * 0 = 0
// 7 * 1 = 7
// 7 * 2 = 14
// 7 * 3 = 21
// 7 * 4 = 28
// 7 * 5 = 35
//========================================================================
console.log("--------------9-------------------");

//?  9. Write a for loop that prints numbers from 1 to 50, but replaces:
//?     • Multiples of 3 with "Win",
//?     • Multiples of 5 with "Lose",
//?     • Multiples of both with "WinLose"

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("WinLose");
  } else if (i % 3 === 0) {
    console.log("Win");
  } else if (i % 5 === 0) {
    console.log("Lose");
  } else {
    console.log(i);
  }
}

//========================================================================
console.log("--------------f-------------------");

//?  f- What is the difference between forEach, for - in and normal for loop? Explain with example ?
/*
forEach - Works only on arrays.
          Calls a function once for each element in an array.
          Cannot be broken or continued (no break or continue).
          Does not return anything (undefined by default).
*/
let numbers3 = [10, 20, 30, 40];

numbers3.forEach((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});
/* Output:
            Index: 0, Value: 10
            Index: 1, Value: 20
            Index: 2, Value: 30
            Index: 3, Value: 40
*/
//--------------------------------------------------------------
/* 
for - in -  Iterates over object properties or array indices.
            Works on both objects and arrays (but best for objects).
            Returns keys (property names or indexes), not values directly.
*/
let person = { name: "Alice", age: 25, city: "New York" };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
/* Output:
            name: Alice
            age: 25
            city: New York
*/
//--------------------------------------------------------------
/*
Normal for loop - The most flexible and traditional loop.
                  Works on arrays, numbers, and anything requiring precise control.
                  Can use break and continue.
*/
let numbers4 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < numbers4.length; i++) {
  console.log(`Index: ${i}, Value: ${numbers4[i]}`);
}

/* Output:
            Index: 0, Value: 1
            Index: 1, Value: 2
            Index: 2, Value: 3
            Index: 3, Value: 4
*/
//========================================================================
console.log("--------------g-------------------");

//?  g- What is a Palindrome? How to check if a string is a Palindrome using Javascript function ?

/*
 A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 To check if a string is a palindrome, we can convert it to lowercase, remove any non-alphanumeric characters, and then compare the reversed string with the original.
*/

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
}
// Output:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello world")); // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
//========================================================================
console.log("--------------h-------------------");
//?  h- Create the following triangle using for loops, string concatenation (Do not use AI to solve this question) ?

for (let i = 1; i <= 5; i++) {
  let tri = "";
  for (let j = 0; j < i; j++) {
    tri += "*";
  }
  console.log(tri);
}