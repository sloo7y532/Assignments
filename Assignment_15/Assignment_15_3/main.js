let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ a }, threeNums, twoNums); // { a } creates the target object with one property a: 1.

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
/*
Object.assign(target, ...sources) copies all properties from the source objects into the target object.

In this example, we are using Object.assign() to combine the properties of threeNums and twoNums into a new object called finalObject. The properties from threeNums and twoNums are added to the target object in the order they appear in the arguments. The properties from a are added to the target object as well.
*/
