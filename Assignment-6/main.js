console.log("---------------------------1---------------------------------");
/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); //! Output:true => Compare Value Only
console.log(-100 == "-100"); // Output:true => Compare Value Only
console.log(10 != "10"); // Output:false => Compare Value Only

console.log(10 === "10"); //! Output:false => compare Value + Type
console.log(10 !== "10"); // Output:true => Compare Value + Type
console.log(10 !== 10); // Output:false => Compare Value + Type

console.log(10 > 20); // Output:false
console.log(10 > 10); // Output:false
console.log(10 >= 10); // Output:true

console.log(10 < 20); // Output:true
console.log(10 < 10); // Output:false
console.log(10 <= 10); // Output:true

console.log(typeof "Osama" === typeof "Ahmed"); // Output:true
//=========================================================================================
console.log("---------------------------2---------------------------------");

/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true); // Output:true
console.log(!true); // Output:false

console.log(!(10 == "10")); // Output:false

console.log(10 == "10" && 10 > 8 && 10 > 50); // Output:false => if any condition is false then output is false

console.log(10 == "10" || 10 > 80 || 10 > 50); // Output:true => if any condition is true then output is true
