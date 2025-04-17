let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "5") {
    window.open(
      "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/",
      "_blank",
      "width=500,height=500,top=50,left=500"
    );
  }
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);
