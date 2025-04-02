"use strict"

// const dodger = document.getElementById("dodger");

// dodger.style.backgroundColor = "#FF69B4";

// dodger.style.bottom = "100px";

// dodger.style.bottom = "0px";

// dodger.style.left = "0px";

// document.addEventListener("keydown", function (event) {
//     console.log(event);
//   });



//   document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });
  



// const dodger = document.getElementById("dodger");

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });


//   function moveDodgerRight() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left < 360) { // Antag at containerens bredde er 400px, og dodger er 40px bred
//       dodger.style.left = `${left + 10}px`; // Øger værdien for at flytte til højre
//     }
//   }
  
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowRight") { 
//       moveDodgerRight();
//     }
//   });
  

// // jeg kan ikke få dette til at virke
//   function moveDodgerUp() {
//     const topNumbers = dodger.style.top.replace("px", "");
//     const top = parseInt(topNumbers, 10);
  
//     if (top > 0) { // Sørger for, at dodger ikke går ud af skærmen
//       dodger.style.top = `${top - 10}px`; // Flytter dodger op
//     }
//   }
  
//   function moveDodgerDown() {
//     const topNumbers = dodger.style.top.replace("px", "");
//     const top = parseInt(topNumbers, 10);
  
//     if (top < 360) { // Antag at containerens højde er 400px, og dodger er 40px høj
//       dodger.style.top = `${top + 10}px`; // Flytter dodger ned
//     }
//   }
  
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowUp") {
//       moveDodgerUp();
//     }
//     if (e.key === "ArrowDown") {
//       moveDodgerDown();
//     }
//   });
  
//   const right = document.getElementById("movementSound");

//   function playSoundOnMovement {


//   }


//chatten hjalp med at rette ovenstående til følgende:

// const dodger = document.getElementById("dodger");

// function moveDodgerLeft() {
//   const leftNumbers = dodger.style.left.replace("px", "") || "0"; 
//   const left = parseInt(leftNumbers, 10);

//   if (left > 0) {
//     dodger.style.left = `${left - 10}px`;
//     playSoundOnMovement(); // Play sound on movement
//   }
// }

// function moveDodgerRight() {
//   const leftNumbers = dodger.style.left.replace("px", "") || "0";
//   const left = parseInt(leftNumbers, 10);

//   if (left < 360) {
//     dodger.style.left = `${left + 10}px`;
//     playSoundOnMovement(); // Play sound on movement
//   }
// }

// function moveDodgerUp() {
//   const topNumbers = dodger.style.top.replace("px", "") || "0";
//   const top = parseInt(topNumbers, 10);

//   if (top > 0) {
//     dodger.style.top = `${top - 10}px`;
//     playSoundOnMovement(); // Play sound on movement
//   }
// }

// function moveDodgerDown() {
//   const topNumbers = dodger.style.top.replace("px", "") || "0";
//   const top = parseInt(topNumbers, 10);

//   if (top < 360) {
//     dodger.style.top = `${top + 10}px`;
//     playSoundOnMovement(); // Play sound on movement
//   }
// }

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
//   }
//   if (e.key === "ArrowRight") {
//     moveDodgerRight();
//   }
//   if (e.key === "ArrowUp") {
//     moveDodgerUp();
//   }
//   if (e.key === "ArrowDown") {
//     moveDodgerDown();
//   }
// });





//Game over sound
const gameoverSound = document.getElementById("gameoverSound");

function playGameOverSound() {
    gameoverSound.currentTime = 0; // Restart sound from the beginning
    gameoverSound.play(); // Play the sound
  }

  const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movement_sound");

function playSoundOnMovement() {
  movementSound.currentTime = 0;
  movementSound.play();
}

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "") || "0"; 
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
    playSoundOnMovement();
  } else {
    playGameOverSound(); // Play game over sound when hitting the left edge
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "") || "0";
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Assuming container width is 400px, dodger width is 40px
    dodger.style.left = `${left + 10}px`;
    playSoundOnMovement();
  } else {
    playGameOverSound(); // Play game over sound when hitting the right edge
  }
}

function moveDodgerUp() {
  const topNumbers = dodger.style.top.replace("px", "") || "0";
  const top = parseInt(topNumbers, 10);

  if (top > 0) {
    dodger.style.top = `${top - 10}px`;
    playSoundOnMovement();
  } else {
    playGameOverSound(); // Play game over sound when hitting the top edge
  }
}

function moveDodgerDown() {
  const topNumbers = dodger.style.top.replace("px", "") || "0";
  const top = parseInt(topNumbers, 10);

  if (top < 360) { // Assuming container height is 400px, dodger height is 40px
    dodger.style.top = `${top + 10}px`;
    playSoundOnMovement();
  } else {
    playGameOverSound(); // Play game over sound when hitting the bottom edge
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

  