let parg = document.querySelector("p");
let div = document.querySelector(".our-element");
parg.remove();
// before
let startDiv = document.createElement("div");
startDiv.classList.add("start");
startDiv.setAttribute("title", "Start Element");
startDiv.setAttribute("data-value", "Start");
startDiv.textContent = "Start";
div.before(startDiv);
//after
let endDiv = document.createElement("div");
endDiv.classList.add("end");
endDiv.setAttribute("title", "End Element");
endDiv.setAttribute("data-value", "End");
endDiv.textContent = "End";
div.after(endDiv);
