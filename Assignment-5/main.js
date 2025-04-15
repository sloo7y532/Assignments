/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  ";

console.log(theName);// Output:  Ahmed
console.log(theName[3]);// Output:h 
console.log(theName[5]);// Output:e

console.log(theName.charAt(3));// Output:h
console.log(theName.charAt(5));// Output:e

console.log(theName.length);// Output:9
console.log(theName.trim());// Output:Ahmed  => tirm() removes leading and trailing spaces

console.log(theName.toUpperCase());// Output:  AHMED
console.log(theName.toLowerCase());// Output:  ahmed

console.log(theName.trim().charAt(2).toUpperCase());// Output:M  => tirm() removes leading and trailing spaces, charAt() accesses character at index[2], toUpperCase() converts character to uppercase M

//----------------------------------------------------------------------------------------------------
console.log("------------------2-----------------------");
/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let a = "Elzero Web School";

console.log(a.indexOf("Web"));// Output:7
console.log(a.indexOf("Web", 8));// Output:-1
console.log(a.indexOf("o")); // Output:5
console.log(a.lastIndexOf("o"));// Output:15

console.log(a.slice(2, 6));// Output:zero  => slice() returns a substring from the start index to the end index (not including the end index)
console.log(a.slice(-5, -3));// Output:ch => because negative indices start from the end of the string

console.log(a.repeat(2));// Output:Elzero Web SchoolElzero Web School

console.log(a.split("", 6));// Output:['E', 'l', 'z', 'e', 'r', 'o']
console.log(a.split(""));// Output:['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
console.log(a.split(" "));// Output: ['Elzero', 'Web', 'School']


//----------------------------------------------------------------------------------------------------
console.log("------------------3-----------------------");

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let b = "Elzero Web School";

console.log(a.length);// Output:17

console.log(b.substring(2, 6));//* Output:zero => substring() returns a substring from the start index to the end index (not including the end index)
console.log(b.substring(6, 2));//! Output:zero => even if you repalce start with end, it still returns the substring from start to end, => just with substring() while in slice() will return an empty string
console.log(b.substring(-10, 6));//! Output:Elzero => it will return the substring from 0 to 6  beacase with slice() the negative index will start from the end of the string while with substring() it will start from 0 
console.log(b.substring(a.length - 5, a.length - 3));// Output:ch => it will return the substring from the last 5th character to the last 3rd character like slice()

console.log(b.substr(0, 6));//* Output:Elzero => substr() returns a substring from the start index to the !number of characters specified
console.log(b.substr(16));// Output:l
console.log(b.substr(-3));// Output:ool
console.log(b.substr(-5, 2));// Output:ch

console.log(b.includes("Web"));// Output:true => includes() checks if a string contains a specified value and returns true or false
console.log(b.includes("Web", 8));// Output:false => beacuse it starts from index 8

console.log(b.startsWith("E"));// Output:true => startsWith() checks if a string begins with a specified value and returns true or false
console.log(b.startsWith("E", 2));// Output:false => because it starts from index 2
console.log(b.startsWith("zero", 2));// Output:true

console.log(b.endsWith("l"));// Output:true => endsWith() checks if a string ends with a specified value and returns true or false
//----------------------------------------------------------------------------------------------------
console.log("-----------------4------------------------");

