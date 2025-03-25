let start = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start; i < swappedName.length; i++) {
  let char = swappedName[i];
  result +=
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
}

console.log(result);
// Output
//"ELzERo"
