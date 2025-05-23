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
    return false;
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
    return;
  }

  console.log("validated");

  let activityStatus = form.elements["Your Child's Activity Level"].value;

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
  let hideBtn = document.createElement("button");

  hideBtn.className = "hide";

  hideBtn.textContent = "CLOSE";
  hideBtn.addEventListener("click", (event) => {
    console.log("click");
    if (event.target.className === "hide") {
      console.log("hasClassName===hide");
      console.log(video);
      document.body.removeChild(video);
      document.body.removeChild(hideBtn);
      let factsAndMessagediv= document.createElement("div")
      let facts = document.getElementsByClassName("facts")[0];
      console.log(facts)
      let textArray = [
        "It Can Improve Physical and Emotional Well-Being",
        "It Can Enhance Communication and Socialization Skills",
        "It Can Benefit a Wide Range of Individuals",
      ];
      for (let i = 0; i < 3; i++) {
        let newli = document.createElement("li")
        newli.textContent= textArray[i]
        facts.appendChild(newli)
      }
      let message = document.createElement("h1");
      message.innerText = "I HOPE THIS HELPED! Have a great day:)";
      factsAndMessagediv.appendChild(facts)
      factsAndMessagediv.appendChild(message)
      facts.parentNode.style.display= "flex"
      facts.parentNode.style.flexDirection= "column"
      document.body.prepend(factsAndMessagediv);
    }
  });
  document.body.appendChild(hideBtn);
  return;
});
