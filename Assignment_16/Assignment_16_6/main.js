const form = document.querySelector("form");
const elementsInput = document.querySelector("[name='elements']");
const textInput = document.querySelector("[name='texts']");
const typeSelect = document.querySelector("[name='type']");
const results = document.querySelector(".results");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // to clear the previous results
  results.innerHTML = "";

  const count = elementsInput.value;
  const text = textInput.value;
  const type = typeSelect.value.toLowerCase();

  for (let i = 1; i <= count; i++) {
    const el = document.createElement(type);
    el.className = "box";
    el.id = i;
    el.textContent = text;

    results.appendChild(el);
  }
});
