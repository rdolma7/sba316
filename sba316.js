let form = document.querySelector(".form");
let mainDiv = document.querySelector(".main-div");
let hiddenText = document.getElementById("hide");
let video = document.querySelector(".video");

let validate = (age) => {
  let childAge = Number(age);
  if (isNaN(childAge)) {
    return false;
  }
  if (childAge > 18) {
    return false
  }
  return true;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(mainDiv);
  let age = form.elements["age"].value;
  console.log(age);
  let validationResult = validate(age);
  if (validationResult === false) {
    alert("You are too old for this service");
   window.location.reload();
   return
  } 


  console.log("validated");
 
  // hiddenText.classList.remove("hidden");

  let activityStatus = form.elements["Your Activity Level"].value;

  console.log(activityStatus);
  if (activityStatus === "hyper") {
    video.src =
      "https://www.youtube.com/embed/zuMqCaUMbOs?si=t66NaRIJJkNOZ4td&autoplay=1";
  } else if (activityStatus === "needsEnergy") {
    video.src =
      "https://www.youtube.com/embed/ZlDeUVvtsZ4?si=ADg8kfxNgmJRyTQV&autoplay=1";
  } else if (activityStatus === "motivation") {
    video.src =
      "https://www.youtube.com/embed/huTTxXPj2gY?si=Pb1ITJYFPNf6Vj3p&autoplay=1";
  }
  video.style.display = "block";
  mainDiv.style.display = "none";
  // let buttonDiv = document.createElement("div");
  let hideBtn = document.createElement("button");

  // let pauseBtn = document.createElement("button");
  hideBtn.className = "hide";
  // pauseBtn.className = "pause";
  hideBtn.textContent = "CLOSE";
  // pauseBtn.textContent="Pause"
  // buttonDiv.appendChild(playBtn);
  // buttonDiv.appendChild(pauseBtn);
  hideBtn.addEventListener("click", (event) => {
    console.log("click");
    if (event.target.className === "hide") {
      console.log("hasClassName===hide");
      console.log(video);
      document.body.removeChild(video);
      document.body.removeChild(hideBtn);
      let message = document.createElement("h1");
      message.innerText = "I HOPE THIS HELPED! Have a great day:)";
      document.body.prepend(message);
    }
  });
  document.body.appendChild(hideBtn);
  return;
});

let m;
//child has to be under 18 for the application to suggest any sort of therapy

// let button= document.querySelector(".button")
// button.addEventListener("submit", (event)=>{
//     event.preventDefault();
// console.log("test")
// })
// console.log('testGlobalScope')

// function validate(){}  //function declaration

// let validate = function(){} //function expressio
