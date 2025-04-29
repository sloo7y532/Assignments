//=========================================================================================
console.log("-------------------a-------------------");
//?  a- Destructure name, age and city from the code below ?

const data = {
  info: ["Ahmed", { age: 25, city: "Alex" }],
};
let {
  info: [name, { age, city }],
} = data;
console.log(name, age, city);
//=========================================================================================
console.log("-------------------b-------------------");
//?  b- What’s the difference between setInterval and setTimeout in simple words with simple example ?

//* setTimeout() => Runs a function {once} after a delay.
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

//* setInterval() => Runs a function {repeatedly} every set amount of time.
// setInterval(() => {
//   console.log("Hello every 2 seconds");
// }, 2000); delete the coments to see the code
//=========================================================================================
console.log("-------------------c-------------------");
//?  c- Start an interval using setInterval that logs “Tick” every second and cancel it on the 6th second ?

const interval = setInterval(() => {
  console.log("Tick");
}, 1000);
setTimeout(() => {
  clearInterval(interval);
  console.log("Stop");
}, 6000);
//=========================================================================================
console.log("-------------------d-------------------");
//?  d- What are the potential problems that may occur when you don’t clear an interval ?
/*
    1-Infinite Loop / Never Stops
        The function keeps running forever, even if you no longer need it.
    2-Performance Issues
        If intervals pile up (like creating many intervals without clearing), they use up memory and CPU.
        This can slow down the browser or crash the app.
    3-Duplicate Actions
        You might end up with multiple intervals doing the same thing, causing duplicate network requests, UI updates, etc.
    4-Memory Leaks
        Intervals keep running and hold references to variables or DOM elements. This prevents garbage collection and can cause memory leaks.
    5-Hard to Debug
        If something keeps happening over and over, and you forgot there's an interval running in the background, it's hard to find the source.
*/

//=========================================================================================

/* A Map is a built-in JavaScript object that stores key-value pairs, where:
    Keys can be any data type (not just strings like in regular objects)
    Order of entries is preserved
    Has useful methods to manage data easily
*/
const myMap = new Map([
  ["name", "Alice"],
  ["age", 25],
]);
// methods
const userInfo = new Map();

userInfo.set("name", "John");
userInfo.set("age", 30);
userInfo.set("isLoggedIn", true);

console.log(userInfo.get("name")); // John
console.log(userInfo.has("age")); // true
console.log(userInfo.size); // 3

userInfo.delete("age");
console.log(userInfo.size); // 2

userInfo.clear();
console.log(userInfo.size); // 0

// Loop throug a map
for (const [key, value] of userInfo) {
  console.log(`${key} => ${value}`);
}

// Or
userInfo.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Example with object as key
const objKey = { id: 1 };
const map = new Map();

map.set(objKey, "I’m an object key!");
console.log(map.get(objKey)); // Works perfectly

//=========================================================================================
console.log("-------------------e-------------------");
//?  e- What’s the difference between a Map and an Object, explain with respect to size property, key type, iteration method, ordering of elements inside ?
/*
* Feature     | Map                                    | Object
Key Types     | Any type (objects, functions)          | Only strings & symbols
Size Property | ✅ .size                              | ❌ No built-in, use Object.keys(obj).length
Iteration     | Easy with {for...of}, {forEach}        | Use {for...in} or {Object.keys()}
Order of Keys | Insertion order is kept                | Mostly unordered (some rules apply)
Performance   | Faster for frequent additions/removals | Slower for large sets of key changes
Use Case      | Ideal for dynamic key-value pairs      | Best for static or fixed keys
*/

//=========================================================================================

/*
###  What is a `WeakSet`?

A **`WeakSet`** is a special kind of set that:
- Only stores **objects** (not primitives like numbers or strings)
- Stores them **weakly**—if the object is no longer used elsewhere, it gets **garbage collected**
- Is **not iterable** (you can’t loop through it)

---

### 🧪 Syntax & Example

*/
const ws1 = new WeakSet();

const obj4 = { name: "Alice" };
const obj5 = { name: "Bob" };

ws.add(obj4);
ws.add(obj5);

console.log(ws.has(obj4)); // true

ws.delete(obj5);
console.log(ws1.has(obj4)); // false

/*
### ❌ You can’t do these with `WeakSet`:
```javascript
ws.add(1);           // ❌ Error: Invalid value used in weak set
for (let item of ws) // ❌ Error: WeakSet is not iterable
```

---

### ✅ Valid Methods:

| Method       | What it does                        |
|--------------|-------------------------------------|
| `.add(obj)`  | Adds an object                      |
| `.has(obj)`  | Checks if the object is in the set  |
| `.delete(obj)`| Removes the object                 |

---

### 🧠 Why use `WeakSet`?

It's used when you:
- Want to keep a list of **objects** without preventing them from being garbage collected
- Are tracking **temporary object references**, like DOM nodes or cache

---

### 🕵️ Real-world use case:

*/
const visitedNodes = new WeakSet();

function visit(node) {
  if (visitedNodes.has(node)) {
    console.log("Already visited");
    return;
  }

  visitedNodes.add(node);
  console.log("Visiting", node);
}

/*
This is useful in things like:
- DOM node tracking
- Preventing memory leaks in large web apps

*/

//=========================================================================================
console.log("-------------------f-------------------");
//?  f- The code below gives an error: Invalid value used in weak set, what does it mean. Explain both alternatives to this implementation ?

//* A WeakSet in JavaScript can only store objects, not primitives like numbers, strings, booleans, etc.
// solution
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

const ws = new WeakSet([obj1, obj2, obj3]);
// or you can use Set
//=========================================================================================
console.log("-------------------g-------------------");
//?  g- Write a func,on that takes a string and returns the first character that repeats. If no character repeats, return null. Hint (Use Sets) ?

function firstRepeatingChar(str) {
  const seen = new Set();

  for (let char of str) {
    if (seen.has(char)) {
      return char; // Found the first repeat
    }
    seen.add(char);
  }

  return null; // No repeating character
}
console.log(firstRepeatingChar("hello")); // → "l"
console.log(firstRepeatingChar("abcdef")); // → null
console.log(firstRepeatingChar("aabbcc")); // → "a"
