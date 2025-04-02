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
  



const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) { // Antag at containerens bredde er 400px, og dodger er 40px bred
      dodger.style.left = `${left + 10}px`; // Øger værdien for at flytte til højre
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { 
      moveDodgerRight();
    }
  });
  

// jeg kan ikke få dette til at virke
  function moveDodgerUp() {
    const topNumbers = dodger.style.top.replace("px", "");
    const top = parseInt(topNumbers, 10);
  
    if (top > 0) { // Sørger for, at dodger ikke går ud af skærmen
      dodger.style.top = `${top - 10}px`; // Flytter dodger op
    }
  }
  
  function moveDodgerDown() {
    const topNumbers = dodger.style.top.replace("px", "");
    const top = parseInt(topNumbers, 10);
  
    if (top < 360) { // Antag at containerens højde er 400px, og dodger er 40px høj
      dodger.style.top = `${top + 10}px`; // Flytter dodger ned
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      moveDodgerUp();
    }
    if (e.key === "ArrowDown") {
      moveDodgerDown();
    }
  });
  