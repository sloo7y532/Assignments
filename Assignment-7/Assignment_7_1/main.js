// Test Case 1
let num = 9; // "009"

if (num < 10) {
  console.log(`00${num}`);
} else if (10 < num && num < 100) {
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(num);
}

// Test Case 2
let num1 = 20; // "020"

if (num1 < 10) {
  console.log(`00${num1}`);
} else if (10 < num1 && num1 < 100) {
  console.log(`0${num1}`);
} else if (num1 >= 100) {
  console.log(num1);
}

// Test Case 3
let num2 = 110; // "110"

if (num2 < 10) {
  console.log(`00${num2}`);
} else if (10 < num2 && num2 < 100) {
  console.log(`0${num2}`);
} else if (num2 >= 100) {
  console.log(num2);
}
