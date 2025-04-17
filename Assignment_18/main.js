//=========================================================================================
console.log("-------------------- What Is BOM ? ------------------");

/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

window.document.title = "Hello JS";
//or
document.title = "Hello JS";
//=========================================================================================
console.log("-------------------- Alert, Confirm, Prompt ------------------");
/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/
//! check the comments

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

console.log(promptMsg);
//=========================================================================================
console.log("------------- setTimeout and clearTimeout ---------------");
/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/
//! check the comments

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }
{
  let btn = document.querySelector("button");

  btn.onclick = function () {
    clearTimeout(counter);
  };

  function sayMsg(user, age) {
    console.log(`Iam Message For ${user} Age Is : ${age}`);
  }

  let counter = setTimeout(sayMsg, 3000, "Osama", 38);
}
//=========================================================================================
console.log("------------- setInterval and clearInterval ------------------");
/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

{
  let div = document.querySelector("div");

  function countdown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
      clearInterval(counter);
    }
  }

  let counter = setInterval(countdown, 1000);
}
//=========================================================================================
console.log("------------- Window Location Object ------------------");
/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

console.log(location);
console.log(location.href); // will print the url of the the page

// location.href = "https://google.com";//* assignm new url
// location.href = "/#sec02";//! assign new hash
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);// will print the IP with the port
// console.log(location.hostname);// will print the IP

// console.log(location.protocol);// http or https

// console.log(location.hash);//! will return to the hash like { /#sec02 }
//=========
/*
location.assign(url)
-Adds the new URL to the history stack.
-The user can click "Back" in the browser to return to the previous page.
Example:
*/
location.assign("https://example.com");
//=========

/*
location.replace(url)
-Replaces the current page in the history stack.
-The user cannot go back to the previous page using the back button.

Example:
*/
location.replace("https://example.com");
//=========================================================================================
console.log("------------- Window Open And Close ------------------");
/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

setTimeout(function () {
  window.open("", "_self", "", false);
}, 2000);

setTimeout(function () {
  window.open(
    "https://google.com",
    "_blank",
    "width=400,height=400,left=200,top=10"
  );
}, 2000);
//=========================================================================================
console.log("------------- Window History Object ------------------");
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);
//=========================================================================================
console.log("------- Scroll, ScrollTo, ScrollBy, Focus, Print, Stop ------");
/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });
//=========================================================================================
console.log("-------- Scroll To Top Using ScrollY Practice --------------");
/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);


//! this is an example of scroll button, vist the scroll folder to see this example  
let btn = document.querySelector(".scroll");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};