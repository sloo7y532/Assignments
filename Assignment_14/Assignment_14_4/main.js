let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let onlyNumbers = numsAndStrings
  .filter((e) => {
    return typeof e === "number";
  })
  .map((e) => {
    return -e;
  });
console.log(onlyNumbers);
// [-1, -10, 10, 20, -5, -3]
