//=========================================================================================
console.log("------------------- DOM ---------------------");
/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
// console.log(document.forms[0].one.value);
console.log(document.links[0].href);
//=========================================================================================
console.log("------------ DOM [Get / Set Elements] ---------------");
/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement2 = document.querySelector(".js");

console.log(myElement2.innerHTML);
console.log(myElement2.textContent);

myElement2.innerHTML = "Text From <span>Main.js</span> File";
myElement2.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");
//=========================================================================================
console.log("------------ DOM [Check Attributes] ---------------");
/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src"); // if {myP} has {data-src} attribute and the {data-src} attribute is empty then remove the attribute
  } else {
    myP.setAttribute("data-src", "New Value"); // else set a new attribute (NewValue) to the data-src attribute
  }
} else {
  console.log(`Not Found`);
}

if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  // hasAttributes() means return true if the "div" has any attribute
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}
//=========================================================================================
console.log("------------ DOM [Create Elements] ---------------");
/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One"); // create plain text
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);
//=========================================================================================
console.log("------------ DOM [Create Elements]-2 ---------------");
/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = "product";

document.body.appendChild(myMainElement);
//=========================================================================================
console.log("------------ DOM [Deal With Childrens] ---------------");
/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myElement1 = document.querySelector("div");

console.log(myElement1);
console.log(myElement1.children);
console.log(myElement1.children[0]);
console.log(myElement1.childNodes);
console.log(myElement1.childNodes[0]);

console.log(myElement1.firstChild);
console.log(myElement1.lastChild);

console.log(myElement1.firstElementChild);
console.log(myElement1.lastElementChild);
//=========================================================================================
console.log("------------ DOM [Events] ---------------");

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu => the right click menue in the mouse
  --- onmouseenter => when the mouse enter
  --- onmouseleave => when the mouse leave

  --- onload
  --- onscroll
  --- onresize
form
  --- onfocus => when you enter the input field
  --- onblur => when you leave the input field
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};
//=========================================================================================
console.log("------------ Validate Form And Prevent Default ---------------");
/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

// video link: https://elzero.org/javascript-2021-validate-form-and-prevent-default/
//=========================================================================================
console.log("------------ Validate Form And Prevent Default ---------------");
