/*
?    a\Waht is Hoisting in JavaScript ?
*    Hoisting is a JavaScript behavior where variable and function declarations 
*    are moved to the top of their scope before the code is executed.

*   Variable Hoisting:
    1- Hoisting with (var): Variables declared with var are hoisted to the top of their scope, 
        but their initial values are set to undefined.
    2- Hoisting with let and const:let and const are hoisted but not initialized, 
        so accessing them before declaration results in a ReferenceError.

*/
//----------------------------------------------------------------------------------------------------
console.log("============================================================")
//?   b\How does JavaScript determine the data type of a variable? Demonstrate with typeof ?
//*   JavaScript uses dynamic typing, which means it determines the data type of a variable at runtime.


let myVariable;
console.log(typeof myVariable); // Output: undefined
console.log(typeof (myVariable = 10)); // Output: number
console.log(typeof (myVariable = "hello")); // Output: string
console.log(typeof (myVariable = true)); // Output: boolean
console.log(typeof (myVariable = {})); // Output: object
console.log(typeof (myVariable = function () {})); // Output: function
//----------------------------------------------------------------------------------------------------
console.log("============================================================")
//?  c\What is the output of the following? Explain why ?

let x = "5" + 3; // because JavaScript thought the plus sign is for concatenation.
let y = "5" - 3; // Because the minus sign is only for subtraction.
let z = 5 + true; // Because true is can be converted to 1.
console.log(x, y, z); // Output: 53  2  6
//----------------------------------------------------------------------------------------------------
console.log("============================================================")
//?  d\ What is the difference between .parseInt() and .parseFloat()? Explain with examples ?

//.parseInt() converts a string to a number, but it only allows for Integers numbers.
console.log(parseInt("100")); // Output: 100
console.log(parseInt("100abc")); // Output: 100
console.log(parseInt("abc100")); // Output: NaN

//.parseFloat() converts a string to a number, but it allows for Floating numbers and Integers numbers.
console.log(parseFloat("100")); // Output: 100
console.log(parseFloat("100abc")); // Output: 100
console.log(parseFloat("abc100")); // Output: 100
console.log(parseFloat("100.5")); // Output: 100.5
console.log(parseFloat("100.5abc")); // Output: 100.5


//----------------------------------------------------------------------------------------------------
console.log("============================================================")
//?  e\ What is the output of the following? Explain why ?

//     The !! operator is convert a value into a Boolean.


console.log(!!"false");// "false" is not empty value, so it a truthy value. !"false" is [false] and !!"false" is [true].
console.log(!!"");// "" is an empty value, so it a falsy value. !"" is [true] and !!"" is [false].
console.log(!!0);// 0 it is a falsy value. !0 is [true] and !!0 is [false].
console.log(!!NaN);// NaN it is a falsy value. !NaN is [true] and !!NaN is [false].
console.log(!!undefined);// undefined it is a falsy value. !undefined is [true] and !!undefined is [false].
