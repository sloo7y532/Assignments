async function callArticles() {
  try {
    let response = await fetch("./articles.json");
    let data = await response.json();
    data.length = 5;
    let body = document.querySelector("body");
    data.forEach((element) => {
      let p = document.createElement("p");
      let h3 = document.createElement("h3");
      h3.innerText = element.title;
      p.innerText = element.description;
      body.appendChild(h3);
      body.appendChild(p);
    });
  } catch (error) {
    console.log(error);
  }
}
callArticles();
