console.log("1- ", document.getElementById("elzero"));
console.log("2- ", document.getElementsByTagName("div")[0]);
console.log("3- ", document.getElementsByClassName("element")[0]);

console.log("4- ", document.querySelector("#elzero"));
console.log("5- ", document.querySelector(".element"));
console.log("6- ", document.querySelector("div"));
console.log("7- ", document.querySelector("div.element"));

console.log("8- ", document.querySelectorAll("#elzero")[0]);
console.log("9- ", document.querySelectorAll(".element")[0]);
console.log("10- ", document.querySelectorAll("div")[0]);
console.log("11- ", document.querySelectorAll("div.element")[0]);

console.log("12- ", document.body.firstElementChild);
console.log("13- ", document.getElementsByName("js")[0]);
console.log("14- ", document.body.children[0]);
console.log("15- ",(document.getElementById("elzero").parentNode.getElementsByTagName("div"))[0]);
