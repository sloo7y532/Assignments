let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");

div.onclick = (e) => {
  console.log(`This is ${e.target.tagName}`);
};
span.onclick = (e) => {
  console.log(`This is ${e.target.tagName}`);
};
p.onclick = (e) => {
  console.log(`This is ${e.target.tagName}`);
};
article.onclick = (e) => {
  console.log(`This is ${e.target.tagName}`);
};
section.onclick = (e) => {
  console.log(`This is ${e.target.tagName}`);
};
