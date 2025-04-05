let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray
  .reduce((previous, current) => {
    return previous.concat(current);
  }, [])
  .join("");
console.log(result);
// Elzero
