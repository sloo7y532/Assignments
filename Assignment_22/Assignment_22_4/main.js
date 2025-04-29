let request = new XMLHttpRequest();

request.open("GET", "../Assignment_22_1/articles.json");

request.send();

request.addEventListener("load", function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    let div = document.createElement("div");
    div.id = "data";
    mainData.forEach((element) => {
      div.innerHTML += `<div><h2>${element.title}</h2>
    <p>${element.content}}</p>
    <p>${element.author}</p>
    <p>${element.category}</p></div>
      `;
    });
    document.body.appendChild(div);
  }
});
