let userInput = prompt("Print Number From – To", "5-20");
let user = userInput.split("-");
let smaller = parseInt(user[0]);
let bigger = parseInt(user[1]);
let result = "";

if (smaller > bigger) {
  let i = 0;
  i = bigger;
  bigger = smaller;
  smaller = i;
}
for (let i = smaller; i <= bigger; i++) {
  console.log(i);
  result += i + "<br>";
}

document.write(result);
//
