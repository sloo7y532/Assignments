//=========================================================================================
console.log("------------- Destructuring Arrays Part 1 -------------");
/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

let [, y, , z] = myFriends;

console.log(y); // Sayed
console.log(z); // Maysa
//=========================================================================================
console.log("------------- Destructuring Arrays Part 2 -------------");
/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends1 = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

let [, , , [e, , [, f]]] = myFriends;

console.log(e); // Shady
console.log(f); // Gamal
//=========================================================================================
console.log("------- Destructuring Arrays Part 3 Swap Variables ---------");
/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// Save Book Value In Stash
// let stash = book; // Video

// Change Book Value
// book = video; // Book

// Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);
//=========================================================================================
console.log("------------- Destructuring Objects Part 1 -------------");
/*
  Destructuring
  - Destructuring Object
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
const { theName, theAge, theCountry } = user;

console.log(theName);
console.log(theAge);
console.log(theCountry);
//=========================================================================================
console.log("------------- Destructuring Objects Part 2 -------------");
/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user1 = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry1: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName: n,
  theAge: x,
  theCountry1,
  theColor: co = "Red",
  skills: { html: h, css },
  jender = "Male",
} = user1;

console.log(n);
console.log(x);
console.log(theCountry1);
console.log(co);
console.log(jender);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = user1.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);
//=========================================================================================
console.log("------------- Destructuring Function Parameters -------------");
/*
  Destructuring
  - Destructuring Function Parameters
*/

const user2 = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

function showDetails({ theName: n, theAge: a, skills: { css: c } } = user2) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
}
//=========================================================================================
console.log("------------- Destructuring Mixed Content -------------");
/*
  Destructuring
  - Destructuring Mixed Content
*/

const user3 = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const {
  theName: na,
  theAge: ag,
  skills: [, , three],
  addresses: { egypt: eg },
} = user3;

console.log(`Your Name Is: ${na}`);
console.log(`Your Age Is: ${ag}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${eg}`);