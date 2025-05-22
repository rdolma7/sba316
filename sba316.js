let form = document.querySelector(".form");
let mainDiv = document.querySelector(".main-div");
let hiddenText = document.querySelector("#hide");
let video = document.querySelector(".video")
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let activityStatus= form.elements["Kids Activity Level"].value
  // console.log(activityStatus)
  if(activityStatus === "hyper"){
    video.src = "https://www.youtube.com/embed/zuMqCaUMbOs?si=t66NaRIJJkNOZ4td&autoplay=1"
  }else if(activityStatus ==="needsEnergy"){
    video.src="https://www.youtube.com/embed/ZlDeUVvtsZ4?si=ADg8kfxNgmJRyTQV&autoplay=1"
  }else if(activityStatus==="motivation"){
    video.src="https://www.youtube.com/embed/Ud_eeFkzH4w?si=DENuQ2LKLVSSkxqw&autoplay=1"
  }
  video.style.display = "block"
  mainDiv.style.display = "none"
  return
  let age = form.elements["age"].value
  let validationResult = validate(age);
  if (validationResult === false) {
    window.alert("You are too old for this service");
    window.location.reload();
  } else {
    let body = document.body;
    body = "";
  }
  console.log("validated");
  mainDiv.classList.add("hidden");
  hiddenText.classList.remove("hidden");

  
});

let validate = (age) => {
  let childAge = Number(age.value);
  if (isNaN(childAge)) {
    return false;
  }
  if (childAge > 18) {
  let dob=document.querySelector("input[id=age]")
window.alert("dob")
  }
  return true;
};

let m;
//child has to be under 18 for the application to suggest any sort of therapy

// let button= document.querySelector(".button")
// button.addEventListener("submit", (event)=>{
//     event.preventDefault();
// console.log("test")
// })
// console.log('testGlobalScope')

// function validate(){}  //function declaration

// let validate = function(){} //function expression

