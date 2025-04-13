let img = document.images;
for (let i = 0; i < img.length; i++) {
  if (img[i].hasAttribute("alt")) {
    img[i].setAttribute("alt", "old");
  } else {
    img[i].setAttribute("alt", "Elzero New");
  }
  console.log(img[i]);
}
