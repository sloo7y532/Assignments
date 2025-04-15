//================================================================
console.log("-------------------a-------------------");
//? a- Explain what are the differences between dot notation and bracket notation in JavaScript. In your words and with examples ?
// Dot Notation: Use it when the property name is valid (have no spaces etc.)
let obj = {
  name: "John",
  age: 30,
};
console.log(obj.age); // Output: 30

// Bracket Notation: Use it when the property name is not valid (have spaces etc.) or when the property stored in a variable.
let key = "age";
obj[key] = 50;

console.log(obj.age); // Output: 50

//=========================================================================================
console.log("-------------------b-------------------");
//? b- How many ways to create an Object in JS, explain with examples ?
// There are 7 ways to create an Object:
// 1. let obj = { ...} => simple and best for creating single objects
// 2. let obj = new Object(); => less common now
// 3. let obj = Object.create({ ... });
// 4. let obj = Object.assign(target function, obj1, { ... },...); => Merges or copies objects, used for (Prototypal inheritance)
// 5. Using a Constructor Function => Used to create multiple similar objects. The old-school version of classes.
// 6. Using ES6 class => Modern and clean syntax. Used for OOP (object-oriented programming) in JS.
// 7. Using JSON => Useful when working with data from APIs. Converts JSON string to a JS object.
//---------------------------------------------------
// First way
let obj1 = { name: "saleh", age: 33 };
//---------------------------------------------------
// Second way
let obj2 = new Object();
obj2.name = "saleh";
obj2.age = 44;
//OR
let obj3 = new Object({ name: "saleh", age: 44 });
//---------------------------------------------------
// Third way
let obj4 = Object.create({ name: "saleh", age: 55 });
//---------------------------------------------------
// Fourth way
let obj5 = { name: "Frank" };
let obj6 = { age: 40 };

let obj7 = Object.assign({}, obj5, obj6);
//---------------------------------------------------
// Fifth Way
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new Person("Charlie", 28);
//---------------------------------------------------
// Sixth way
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let user2 = new Person1("Diana", 22);
//---------------------------------------------------
// Seventh way
let jsonString = '{"name":"George","age":35}';
let person2 = JSON.parse(jsonString);
//---------------------------------------------------
// console.log(`
//   obj ${obj},
//   obj1 ${obj1},
//   obj2 ${obj2},
//   obj3 ${obj3},
//   obj4 ${obj4},
//   obj7 ${obj7},
//   user1 ${user1},
//   user2 ${user2},
//   person2 ${person2}`
// );
console.log("First way=>", obj1);
console.log("Second way=>", obj2);
console.log("Second way2=>", obj3);
console.log("Third way=>", obj4);
console.log("Fourth way=>", obj7);
console.log("Fifth Way=>", user1);
console.log("Sixth way=>", user2);
console.log("Seventh way=>", person2);
//=========================================================================================
console.log("-------------------c-------------------");
//?  c- What are the differences between Object.assign() and Object.create(), illustrate with examples ?

// Object.assign(): used to merges or copies objects => Copies properties from one object to another
const obj8 = { a: 1 };
const obj9 = { b: 2 };

const merged = Object.assign({}, obj8, obj9);
console.log(merged); // { a: 1, b: 2 }

// Object.create(): Creates an object with a specific prototype => used it when you want to set up inheritance.
let sal = {
  name: "Ali",
  hello() {
    return "hello!!";
  },
};

let obj10 = Object.create(sal);
console.log(obj10);
console.log(obj10.hello());
//=========================================================================================
console.log("-------------------d-------------------");
//?  d- Explain the use of Object.keys() and Object.values() ?
// Object.keys(): Return an array of keys or properties of the object =>It only returns own properties (not inherited ones). It only includes enumerable properties
// Object.values(): Return an array of values of the object property.
//=========================================================================================
console.log("-------------------e-------------------");
//?  e- What is the expected output of the code below, explain why. And how to give an exclusive value to b ?
// object in javascript are reference types.
const a = {};
const b = a; // means b doesn't copy the object - it just points to the same reference in memory as a
b.name = "John";
console.log(a.name); // Output: John
console.log(a); // Output: {name: 'John'}
console.log(b); // Output: {name: 'John'}
// So now a and b are points to the same reference in memory

//?And how to give an exclusive value to b ?
// you can use {spread operator} or {Object.assign()}
//using spread:
const c = {};
const d = { ...c };
d.name = "John";
console.log(c.name); // undefined ,So now a and b are two separate objects.
//=========================================================================================
console.log("-------------------f-------------------");
//?  f- What is the three dots operator in javascript does in the code below, what is it’s use and explain the output code?

const obj12 = { a: 1, b: 2 };
const clone = { ...obj12, a: 99 }; // take a copy of obj12
console.log(clone); // Output: { a: 99, b: 2 }
//=========================================================================================
console.log("-------------------g-------------------");
//?  g- Write a function that takes an object, concatenates then capitalize the keys of the object ?

function conCapKeys(obj) {
  let concatenates = Object.keys(obj);
  let capitalize = concatenates.join("").toUpperCase();
  return capitalize;
}

let person3 = { name: "Ali", age: 33, city: "Buridah" };

console.log("Concatenates and Capitalize the keys of the object: ",conCapKeys(person3));

console.log("===============================================")

// class Car {
//   constructor(model) {
//     this.model = model;
//   }
// }

// const myCar = new Car("Tesla");
// console.log(myCar.model); // "Tesla"
