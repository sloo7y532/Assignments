let inputName = document.getElementsByName("name")[0].onblur = () => {
    sessionStorage.setItem("name", inputName.value);
    console.log(this.value);


};
let inputEmail = document.getElementsByName("email")[0];
let inputPass = document.getElementsByName("password")[0];
let gender = document.querySelectorAll("select option");


// sessionStorage.setItem("name", inputName.value);
// sessionStorage.setItem("email", inputEmail.value);
// sessionStorage.setItem("password", inputPass.value);
// sessionStorage.setItem("gender", gender.value);

// console.log(inputName);
// console.log(inputEmail);
// console.log(inputPass);
// console.log(gender);
