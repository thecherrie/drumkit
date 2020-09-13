
var allButtons = document.querySelectorAll(".drum");
for(var i = 0; i<allButtons.length; i++){
  allButtons[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);
  });
}

function playSound(keyPressed) {

  switch (keyPressed) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default: console.log(keyPressed);

  }

}

document.addEventListener("keydown", function(event) {
  var keyPressed = event.key;
  playSound(keyPressed);
  animateButton(keyPressed);
});

function animateButton(keyPressed) {
  var activeButton = document.querySelector("."+keyPressed);
  if(activeButton == null){
    console.log("Press one of the real buttons!");
  }else{
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

// var audio = new Audio('sounds/tom-1.mp3');
