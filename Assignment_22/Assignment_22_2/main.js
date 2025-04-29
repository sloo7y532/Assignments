let request = new XMLHttpRequest();

request.open("GET", "../Assignment_22_1/articles.json");

request.send();

request.addEventListener("load", function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);

    console.log(data);
    console.log("Data Loaded");
  }
});
