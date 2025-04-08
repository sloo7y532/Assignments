//=========================================================================================
console.log("----------------Object---------------------");
/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
  // Properties
  theName: "Osama",
  theAge: 38,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};

console.log(user.theName); // Osama
console.log(user.theAge); // 38
console.log(user.sayHello()); // Hello
//=========================================================================================
console.log("----------------Dot Notation vs Bracket Notation--------------");
/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

let user1 = {
  theName: "Osama",
  country: "Egypt",
};

console.log(user1.theName); //                Output: Osama
console.log(user1.country); // user1.country  Output: Egypt
console.log(user1.myVar); // user1.country    Output: undefined
console.log(user1[myVar]); // user1.country   Output: Egypt
//! Dot Notation: user1.theName
//! Bracket Notation: user1[myVar]
//=========================================================================================
console.log("----------------Nested Object-----------------");
/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let user2 = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user2.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user2.name); // Output: Osama
console.log(user2.age); //  Output:38
console.log(user2.skills); // Output: ["HTML", "CSS", "JS"]
console.log(user2.skills.join(" | ")); // Output: HTML | CSS | JS
console.log(user2.skills[2]); // Access With Index |  Output: JS
console.log(user2.addresses.ksa); // Output: Riyadh
console.log(user2.addresses.egypt.one); // Output: Cairo
console.log(user2["addresses"].egypt.one); // Output: Cairo
console.log(user2["addresses"]["egypt"]); // Output: {one: "Cairo", two: "Giza"}
console.log(user2["addresses"]["egypt"]["one"]); // Output: Cairo

console.log(user2.checkAv()); // Output: Not Free
//=========================================================================================
console.log("---------------------Object-------------------");
/*
  Object
  - Create With New Keyword new Object();
*/

let user3 = new Object({
  // new way to create object
  age: 20,
});

console.log(user3);

user3.age = 38; // assign values to the object using dot notation
user3["country"] = "Egypt"; // assign values to the object using bracket notation

user3.sayHello = function () {
  return `Hello`;
};

console.log(user3);
console.log(user3.age);
console.log(user3.country);
console.log(user3.sayHello());
//=========================================================================================
console.log("---------------------This-------------------");
/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this); // window
console.log(this === window); // true

myVar = 100;

console.log(window.myVar); // 100
console.log(this.myVar); // 100

function sayHello() {
  console.log(this); // sayHello()
  return this;
}
sayHello();

console.log(sayHello() === window); // true

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };// button .....

let user4 = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(user4.age);
console.log(user4.ageInDays());
//=========================================================================================
console.log("---------------------Create Object-------------------");
/*
  Object
  - Create Object With Create Method
*/

let user5 = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
  doubleAge2: function () {
    return user5.age * 2;
  },
};

console.log(user5); // {age: 20, doubleAge: ƒ}
console.log(user5.age); // 20
console.log(user5.doubleAge()); // 40

let obj = Object.create({}); // Another way to create object

obj.a = 100;

console.log(obj); // {a: 100}

let copyObj = Object.create(user5); // take a copy of object user5

copyObj.age = 50;

console.log(copyObj); // {age: 50}
console.log(copyObj.age); // 50
console.log(copyObj.doubleAge()); // 100
console.log(copyObj.doubleAge2()); // 40
/* 
🧠 Why does this happen?
doubleAge() uses this.age
this refers to the calling object — in this case, copyObj.

copyObj.age is 50, so: 50 * 2 = 100.

doubleAge2() uses user5.age
It directly references user5.age, which is 20.

So: 20 * 2 = 40, even though you're calling it from copyObj.
*/
//=========================================================================================
console.log("----------Create Object With Assign Method------------");
/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
  prop1: 1,
};

let obj2 = {
  prop2: 2,
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2); //! here we use Object.assign(), So here we assign obj1 and obj2 to targetObject, and if two propertys are equal then he will take the first property
console.log(finalObject);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);
//! see Assignment_15_2