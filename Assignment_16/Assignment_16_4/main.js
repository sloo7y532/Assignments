let one = document.body.children[0];
let two = document.body.children[1];

one.attributes[1].value = two.attributes[1].value;
two.attributes[1].value = two.attributes[0].value;

let T = one.textContent;
one.textContent = two.textContent;
two.textContent = T;

console.log(one);
console.log(two);
