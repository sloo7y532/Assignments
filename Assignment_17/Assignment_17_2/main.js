const addInput = document.querySelector(".classes-to-add");
const removeInput = document.querySelector(".classes-to-remove");
const currentElement = document.querySelector(".element.current");
const resultsDiv = document.querySelector(".classes-list div");

function updateClassList() {
  const classes = Array.from(currentElement.classList).sort();

  // delete last result
  resultsDiv.innerHTML = "";

  if (classes.length === 0) {
    resultsDiv.textContent = "No Classes To Show";
  } else {
    classes.forEach((c) => {
      const span = document.createElement("span");
      span.textContent = c;
      resultsDiv.appendChild(span);
    });
  }
}

function handleClassInput(input, action) {
  const value = input.value.trim();
  if (value !== "") {
    const classNames = value.toLowerCase().split(" ");
    classNames.forEach((className) => {
      if (action === "add") {
        currentElement.classList.add(className);
      } else if (action === "remove") {
        currentElement.classList.remove(className);
      }
    });
    input.value = "";
    updateClassList();
  }
}

addInput.addEventListener("blur", () => {
  handleClassInput(addInput, "add");
});

removeInput.addEventListener("blur", () => {
  handleClassInput(removeInput, "remove");
});

updateClassList();
