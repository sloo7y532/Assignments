//=========================================================================================
console.log("----------------Anonymous Function---------------------");
/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

//! Anonymons Function: it's a function without a name

let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("show").onclick = function () {
  console.log("show");
};

setTimeout(function elzero() {
  //* you don't need to put a name for this function (elzero), so you can delete it
  console.log("Good");
}, 2000);
//=========================================================================================
console.log("----------------Nested Function---------------------");
/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}

console.log(sayMessage("Osama", "Mohamed"));

// Example 2

function sayMessage1(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessage1("Osama", "Mohamed"));

// Example 3

function sayMessage2(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage2("Osama", "Mohamed"));

//=========================================================================================
console.log("----------------Arrow Function---------------------");
/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print1 = function () {
  return 10;
};

let print2 = () => 10; //* with Arrow Function: if you want to return single value you can delete the return

let print3 = function (num) {
  return num;
};

let print4 = (num) => num;

let print5 = function (num1, num2) {
  return num1 + num2;
};

let print6 = (num1, num2) => num1 + num2;

console.log(print1(100, 50));
console.log(print2(100, 50));
console.log(print3(100, 50));
console.log(print4(100, 50));
console.log(print5(100, 50));
console.log(print6(100, 50));
//=========================================================================================
console.log("----------------Global And Local Scope---------------------");
/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();
/*
  Output:
  From Global 1
  From Global 2
  Function - From Local 10
  Function - From Local 20
*/
//=========================================================================================
console.log("----------------Block Scope [If, Switch, For]------------");
/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
  let x = 50; //* if you replace let with var
  console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);

/*
  Output:
  From If Block 50
  From Global 10
*/
//----------------------------------
var y = 10;

if (10 === 10) {
  var y = 50; //! var y is redeclared inside the if block, but var is function-scoped, so it modifies the global y instead of creating a new one. to fix it use { let or const } instead
}

console.log(`From Global ${x}`);

/*
  Output:
  From Global 50
*/
//=========================================================================================

