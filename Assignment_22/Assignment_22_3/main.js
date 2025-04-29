let request = new XMLHttpRequest();

request.open("GET", "../Assignment_22_1/articles.json");

request.send();

request.addEventListener("load", function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);

    mainData.forEach((element) => {
      element.category = "All";
    });
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
});
