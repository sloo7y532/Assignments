let myString = "EElllzzzzzzzeroo";

let filterdString = myString
  .split("")
  .filter((e, i, arr) => {
    return arr[i] !== arr[i + 1];
  })
  .join("");

console.log(filterdString);
// Elzero
