let form = document.querySelector(".form");
let mainDiv=document.querySelector(".main-div")
let hiddenText=document.querySelector("#hide")
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let age = document.getElementById("age");
  let validationResult = validate(age);
  if(validationResult===false){
    window.alert("You are too old for this service")
  }
  console.log("validated")
  mainDiv.classList.add("hidden")
  hiddenText.classList.remove("hidden")
});

let validate = (age) => {
  let childAge = Number(age.value);
  if (isNaN(childAge)) {
    return false;
  }
  if (childAge > 18) {
    return false;
  }
  return true;
};
//child has to be under 18 for the application to suggest any sort of therapy

// let button= document.querySelector(".button")
// button.addEventListener("submit", (event)=>{
//     event.preventDefault();
// console.log("test")
// })
// console.log('testGlobalScope')

// function validate(){}  //function declaration

// let validate = function(){} //function expression