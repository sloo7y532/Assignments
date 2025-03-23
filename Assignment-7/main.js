console.log("-------------------------If Conditions------------------------------");
/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    Block Of Code
  }

*/

let price2 = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price2 -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price2 -= 40;
} else if (country === "Syria") {
  price2 -= 50;
} else {
  price2 -= 10;
}

console.log(price2);

//=============================================================================================
-console.log("-------------------------Nested If Conditions------------------------------");
/*
  Nested If
*/

let price1 = 100;
let discount1 = false;
let discountAmount1 = 30;
let country1 = "Egypt";
let student = true;

if (discount1 === true) {

  price1 -= discountAmount1;

} else if (country1 === "Egypt") {

  if (student1 === true) {

    price1 -= discountAmount1 + 30;

  } else {

    price1 -= discountAmount1 + 10;

  }

} else {

  price1 -= 10;

}

console.log(price1);

//=============================================================================================
console.log("-------------------------Conditional Ternary Operator------------------------------");
/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// Conditional Ternary Operator with nested if condition
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

//=========================================================================================
console.log("-------------------Nullish Coalescing Operator & Logical Or---------------------");

  /*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price = 0;

console.log(`The Price Is ${price || 200}`);// The Price Is 200
console.log(`The Price Is ${price ?? 200}`);// The Price Is 0