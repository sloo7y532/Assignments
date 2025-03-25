//=========================================================================================
console.log("----------------Loop On Sequences---------------------");
/*
  Loop
  - Loop On Sequences
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}

console.log(onlyNames); // Output: ["Osama", "Ahmed", "Sayed", "Ali"]

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }
//=========================================================================================
console.log("----------------Loop Control – Break, Continue, Label---------------------");

/*
  Loop Control
  - Break
  - Continue
  - Label
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop; //* => so he will break the main loop
    }
  }
}

//--------------
let products1 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

for (let i = 0; i < products1.length; i++) {
  console.log(products1[i]);
  if (products1[i] === "Pen") {
    break;
  }
}
//Output: ["Keyboard", "Mouse", "Pen"]
//-----------------------

let products2 = ["Keyboard",4,6,4,3, "Mouse", "Pen", "Pad",8,6, "Monitor"];

for (let i = 0; i < products2.length; i++) {
  
  if (typeof products2[i] === "number") {
    continue;// => so continue now will skip the numbers
  }
  console.log(products2[i]);
}
// Output:["Keyboard", "Mouse", "Pen", "Pad", "Monitor"]

//=========================================================================================
console.log("----------------Loop For Advanced Example---------------------");
/*
  Loop For Advanced Example
*/

let products12 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products12[i]);
  i++;
  if (i === products12.length) break;
}
//=========================================================================================
console.log("----------------Loop For Advanced Example---------------------");
/*
  Products Practice
*/

let products11 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors11 = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products11[i]}</h3>`);
  for (let j = 0; j < colors11.length; j++) {
    document.write(`<p>${colors11[j]}</p>`);
  }
  document.write(`<p>${colors11.join(" | ")}</p>`);
  document.write(`</div>`);
}

