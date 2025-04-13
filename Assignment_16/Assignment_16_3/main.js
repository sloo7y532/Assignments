let user = document.getElementsByName("dollar")[0];
user.onchange = () => {
  let userInput = user.value;
  let result = (userInput * 15.6).toFixed(2);
  document.getElementsByClassName("result")[0]
  .textContent = `{${userInput}} USD Dollar = {${result}} Egyptian Pound`;
};

document.forms[0].onclick = () => {
  document
    .getElementsByTagName("form")[0]
    .addEventListener("submit", function (e) {
      e.preventDefault();
    });
};
