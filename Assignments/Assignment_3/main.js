//=================================================================
console.log("--------------a-------------------");
//?  a- Write a nested ternary operator that logs the maximum of three numbers and its corresponding variable ?

let a = 20;
let b = 30;
let c = 40;
let max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);
//=================================================================
console.log("--------------b-------------------");
//?  b- Write a piece of code that evaluates a student’s grade. (once with if else, and once with
//?     switch)
//?     Greater than 90% is an A
//?     Greater than 80% is a B
//?     Greater than 70% is a C
//?     Greater than 60% is a D

let studentGrade = 95;

if (studentGrade >= 90 && studentGrade <= 100) {
  console.log("A");
} else if (studentGrade >= 80 && studentGrade < 90) {
  console.log("B");
} else if (studentGrade > 70 && studentGrade < 80) {
  console.log("C");
} else if (studentGrade > 60 && studentGrade < 70) {
  console.log("D");
} else {
  console.log("F");
}

switch (true) {
  case studentGrade >= 90 && studentGrade <= 100:
    console.log("A");
    break;
  case studentGrade >= 80 && studentGrade < 90:
    console.log("B");
    break;
  case studentGrade > 70 && studentGrade < 80:
    console.log("C");
    break;
  case studentGrade > 60 && studentGrade < 70:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}
//=================================================================
console.log("--------------c-------------------");
//?  c- What happens in a switch statement if you have two cases with the same value? Explain with an example ?

let switchValue = 5;

switch (switchValue) {
  case 5:
    console.log("Value is 5"); // it's only will excute this code and break, because cases are checked sequentially
    break;
  case 5:
    console.log("Value is also 5"); // will be ignored
    break;
  default:
    console.log("Value is neither 5 nor 5");
    break;
}
//=================================================================
console.log("--------------d-------------------");
//?   What is the expected output of the following code? Explain why ?

let selectedState = "green";

switch (selectedState) {
  case "red":
    console.log("STOP!");
  case "green":
    console.log("GO");
  case "yellow":
    console.log("wait...");
  default:
    console.log("chaos");
}
//* Output:  GO
//*          wait...
//*          chaos
 
//Explanation: since we don't have the break statement, so it will go to the green case and print it and will continue cheak the rest and print them 
//=================================================================
console.log("--------------e-------------------");
//?  e- What is the expected output of the following code? Explain why ?

let testValue = 4;

switch (testValue) {
    case 4:
        console.log("hi");
        break;
    default:
        console.log("bye");
}
//* Output:  hi

//Explanation: Since the testValue is 4, the switch statement will check the cases sequentially
//  and it will find a match for 4 and print "hi". It will not check the default case because it has a break statement.