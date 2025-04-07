//?  a/
for (let i = 0; i < 5; i++) {
  let stars = "*";
  for (let j = 0; j < 5 - 1; j++) {
    stars += "*";
  }
  console.log(stars);
}
//==================================================
//? b
for (let i = 1; i <= 5; i++) {
  let tri = "";
  let spaces = "";
  for (let j = 0; j < i; j++) {
    tri += "*";
  }
  for (let k = 5; k > i; k--) {
    spaces += " ";
  }
  console.log(spaces + tri);
}
//==================================================
//? c
for (let i = 1; i <= 5; i++) {
  let tri = "";
  for (let j = 0; j < i; j++) {
    tri += "*";
  }
  console.log(tri);
}

//==================================================
//? d
for (let i = 0; i < 5; i++) {
  let stars = "";
  let spaces = "";
  for (let j = 0; j < i * 2 + 1; j++) {
    stars += "*";
  }
  for (let k = 5; k > i; k--) {
    spaces += " ";
  }
  console.log(spaces.concat(stars));
}
