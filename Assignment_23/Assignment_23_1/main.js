let articles = [
  {
    userId: 10,
    title: "Article Title Number 1",
    description: "Article Description Number 1",
  },
  {
    userId: 5,
    title: "Article Title Number 2",
    description: "Article Description Number 2",
  },
  {
    userId: 5,
    title: "Article Title Number 3",
    description: "Article Description Number 3",
  },
  {
    userId: 5,
    title: "Article Title Number 4",
    description: "Article Description Number 4",
  },
  {
    userId: 5,
    title: "Article Title Number 5",
    description: "Article Description Number 5",
  },
  {
    userId: 5,
    title: "Article Title Number 6",
    description: "Article Description Number 6",
  },
  {
    userId: 25,
    title: "Article Title Number 7",
    description: "Article Description Number 7",
  },
  {
    userId: 25,
    title: "Article Title Number 8",
    description: "Article Description Number 8",
  },
  {
    userId: 15,
    title: "Article Title Number 9",
    description: "Article Description Number 9",
  },
  {
    userId: 15,
    title: "Article Title Number 10",
    description: "Article Description Number 10",
  },
];
let myPromise = new Promise((resolve) => {
  resolve(articles);
}).then((data) => {
  let div = document.querySelector("body");
  data.slice(0, 5).forEach((element) => {
    let p = document.createElement("p");
    let h3 = document.createElement("h3");
    h3.innerText = element.title;
    p.innerText = element.description;
    div.appendChild(h3);
    div.appendChild(p);
  });
});
