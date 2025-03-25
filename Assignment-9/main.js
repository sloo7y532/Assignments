//=========================================================================================
console.log("-------------------Array Big Introduction---------------------");
/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends); // Output: ['Ahmed', 'Mohamed', 'Sayed', Array(2)]=> Array(2)= ["Marwan", "Ali]
myFriends[1] = "Gamal";
console.log(myFriends); // Output: ['Ahmed', 'Gamal', 'Sayed', Array(2)]=> Array(2)= ["Marwan", "Ali]
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends); // Output: ['Ahmed', 'Gamal', 'Sayed', Array(2)] => Array(2)= ["Sameh", "Ameer]

console.log(Array.isArray(myFriends)); // true

//=========================================================================================
console.log("-------------------Using Length With Array---------------------");
/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends1 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends1.length); // Output: 4
myFriends1[myFriends.length] = "saleh";
console.log(myFriends1); // Output:['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'saleh']
myFriends1[myFriends1.length - 1] = "badar"; //* he will chenge the last item to badar, so when you delete the last item he will update it to bader
console.log(myFriends1); // Output:['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'badar']
myFriends1.length = 2;

console.log(myFriends1); // Output:["Ahmed", "Mohamed"]

//=========================================================================================
console.log(
  "-------------------Add And Remove From Array---------------------"
);
/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let myFriends2 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends2); // Output: ["Ahmed", "Mohamed", "Sayed", "Alaa"]

myFriends2.unshift("Osama", "Nabil"); //! add element at the start of the array

console.log(myFriends2); // Output: ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa"]

myFriends2.push("Samah", "Eman"); //! add element to the end of the array

console.log(myFriends2); // Output: ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah", "Eman"]

let first = myFriends2.shift(); //! remove first element, and return it

console.log(myFriends2); // Output: ["Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah", "Eman"]

console.log(`First Name Is ${first}`); // Output: First Name Is Osama

let last = myFriends2.pop(); //! remove the last element, and return it

console.log(myFriends2); // Output: ["Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah"]

console.log(`Last Name Is ${last}`); // Output: Last Name Is Eman

//=========================================================================================
console.log("----------------Searching Array---------------------");
/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends4 = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends4); // Output: ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"]

console.log(myFriends4.indexOf("Ahmed")); // Output: 0
console.log(myFriends4.indexOf("Ahmed", 2)); // Output: 4

console.log(myFriends4.lastIndexOf("Ahmed")); // Output: 4
console.log(myFriends4.lastIndexOf("Ahmed", -2)); // Output: 0

console.log(myFriends4.includes("Ahmed")); // Output: true
console.log(myFriends4.includes("Ahmed", 2)); // Output: true

if (myFriends4.lastIndexOf("Osama") === -1) {
  //* if Osama is not found then print "Not Found"
  console.log("Not Found");
}

console.log(myFriends4.indexOf("Osama")); // Output: -1
console.log(myFriends4.lastIndexOf("Osama")); // Output: -1

//=========================================================================================
console.log("----------------Sorting Array---------------------");
/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

let myFriends3 = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends3); // Output:[10, 'Sayed', 'Mohamed', '90', 9000, 100, 20, '10', -20, -10]
console.log(myFriends3.sort()); // Output: [-10, -20, 10, '10', 100, 20, '90', 9000, 'Mohamed', 'Sayed']

console.log(myFriends3.reverse()); // Output: ['Sayed', 'Mohamed', 9000, 90, '10', 20, 100, 10, -20, -10]

console.log(myFriends3.sort().reverse()); //* => this is a shortcut of the two lines above

//=========================================================================================
console.log("----------------Slicing Array---------------------");

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

//! slice() return new Array so it doesn't effect the original array
//! splice() will change the original array

let myFriends5 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends5); // Output: ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFriends5.slice()); // Output: ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFriends5.slice(1)); // Output: ['Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFriends5.slice(1, 3)); // Output: ['Sayed', 'Ali']
console.log(myFriends5.slice(-3)); // Output: ['Osama', 'Gamal', 'Ameer'] => negative numbers mean starting from the end
console.log(myFriends5.slice(1, -2)); // Output: ['Sayed', 'Ali', 'Osama']
console.log(myFriends5.slice(-4, -2)); // Output: ['Ali', 'Osama']
console.log(myFriends5); // Output: ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']

myFriends5.splice(1, 2, "Sameer", "Samara"); //* (string from index (1), number of items you want to delete (2), adding items to the list("Sameer", "Samara"))

console.log(myFriends5); // Output: ['Ahmed', 'Sameer', 'Samara', 'Osama', 'Gamal', 'Ameer']

myFriends5.splice(0, 0, "Sameer", "Samara"); //* (string from index (0), number of items you want to delete (0), add ("Sameer", "Samara"))

console.log(myFriends5); // Output:  ['Sameer', 'Samara', 'Ahmed', 'Sameer', 'Samara', 'Osama', 'Gamal', 'Ameer']

//=========================================================================================
console.log("----------------Joining Arrays---------------------");

//   Arrays Methods [Joining]
//!  - concat(array, array) => Return A New Array
//!   - join(Separator) => Join convert the array into string

let myFriends6 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends6.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2]
); // => so you can concat two arrays and add new items to the array

console.log(allFriends); // Output: ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sameh', 'Haytham', 'Shady', 'Gameel', 1, 2]

console.log(allFriends.join()); // Output: Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Sameh,Haytham,Shady,Gameel,1,2
console.log(allFriends.join("")); // Output: AhmedSayedAliOsamaGamalAmeerSamarSamehHaythamShadyGameel12
console.log(allFriends.join(" @ ")); // Output: Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Sameh @ Haytham @ Shady @ Gameel @ 1 @ 2
console.log(allFriends.join("|")); // Output: Ahmed|Sayed|Ali|Osama|Gamal|Ameer|Samar|Sameh|Haytham|Shady|Gameel|1|2
console.log(allFriends.join("|").toUpperCase()); // Output: AHMED|SAYED|ALI|OSAMA|GAMAL|AMEER|SAMAR|SAMEH|HAYTHAM|SHADY|GAMEEL|1|2

//=========================================================================================

