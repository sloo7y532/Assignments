let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

//Solution_1
console.log(haystack.includes(needle) ? "Found" : "");

//Solution_2
console.log(haystack.indexOf(needle) !== -1 ? "Found" : "");

//Solution_3
console.log(haystack.lastIndexOf(needle) !== -1 ? "Found" : "");
