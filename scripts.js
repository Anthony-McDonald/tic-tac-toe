const firebutton = document.querySelector('.fire');
const waterbutton = document.querySelector('.water');
let player1Turn = true;
let boxesFilled = 0;
let playerWon = false;


player1 = createPlayer("player")
player1.sideSelect("fire")
player2 = createPlayer("player")

firebutton.addEventListener("click", function() {

    styleDisplaySwitcher(".sidebox", ".gamewindow")
    player1.sideSelect("fire")
    player2.sideSelect("water")
    
  });

waterbutton.addEventListener("click", function() {
   styleDisplaySwitcher(".sidebox", ".gamewindow")
   player1.sideSelect("water")
   player2.sideSelect("fire")
 }); 


 function styleDisplaySwitcher(toSwitch, switchTo) {
    const elementToSwitch = document.querySelector(toSwitch);
    const elementToSwitchTo = document.querySelector(switchTo);

    let elementDisplay = window.getComputedStyle(elementToSwitch).display;
    
    if (elementDisplay == "flex") {
        elementToSwitch.style.display = "none";
        elementToSwitchTo.style.display = "flex"
    } else {
        elementToSwitch.style.display = "flex"
        elementToSwitchTo.style.display = "none"
    }
 }

// ----------------------------

// var myModule = (function() {
//   'use strict';

//   var _privateProperty = 'Hello World';

//   function _privateMethod() {
//     console.log(_privateProperty);
//   }

//   return {
//     publicMethod: function() {
//       _privateMethod();
//     }
//   };
// })();

// myModule.publicMethod(); // outputs 'Hello World'
// console.log(myModule._privateProperty); // is undefined protected by the module closure
// myModule._privateMethod(); // is TypeError protected by the module closure

const gameBoard = (() => {
  
  let boxContent = [0,1,2,3,4,5,6,7,8]
  return {
    publicArrayReturner: function() {
      return boxContent
    }
  }
})();

// TODO: FIGURE OUT MODULE LOGIC TO DECIDE WHERE YOU WANT WHOSE TURN AND IMG PLACEMENT TO GO

let boxes = document.querySelectorAll(".ttbox");


//On box click logic

for (let i = 0; i < boxes.length; i++) {
  console.log(gameBoard.publicArrayReturner()[i]);
  // boxes[i].textContent = gameBoard.publicArrayReturner()[i];
  boxes[i].addEventListener("click", bindClick(i));

}

function bindClick(i) {
  return function() {
    playerToGo = 
      console.log("you clicked region number " + i);

      if (!hasOnlyImg(boxes[i]) && !playerWon) {
        if (player1Turn) {
          boxes[i].innerHTML = player1.returnSideImage();
          } else {
          boxes[i].innerHTML = player2.returnSideImage();
          }
          player1Turn = !player1Turn;
          boxesFilled++;
      }

      checkForWin(i)
  }};

  function checkForWin(i) {
    let playerWhoPlayed = !player1Turn;

   //top row
   if (lineChecker(0,1,2)) {
    triggerWin(player1Turn)
  }
   //mid row
   if (lineChecker(3,4,5)) {
    triggerWin(player1Turn)
  }
   //bottom row
   if (lineChecker(6,7,8)) {
    triggerWin(player1Turn)
  }
   //left vertical
   if (lineChecker(0,3,6)) {
    triggerWin(player1Turn)
  }
   //left middle
   if (lineChecker(1,4,7)) {
    triggerWin(player1Turn)
  }
   //left right
   if (lineChecker(2,5,8)) {
    triggerWin(player1Turn)
  }
   // \ diagonal
   if (lineChecker(0,4,8)) {
    triggerWin(player1Turn)
  }
   // / diagonal
   if (lineChecker(2,4,6)) {
    triggerWin(player1Turn)
  }

  if (drawChecker() && !playerWon) {
    setTimeout(function() {alert('Game over folks, sadly nobody wins this time, but also nobody loses!');},5);
  }
  }

  function hasOnlyImg(div) {
    if (div.children.length != 1)
      return false;
    return div.children[0].tagName == "IMG";
  }

  function drawChecker() {
    if (boxesFilled == 9) {
      console.log("draw")
      return true;
    }
    return false;
    
  }

  function lineChecker(a,b,c) {
    if (boxes[a].innerHTML == boxes[b].innerHTML && boxes[b].innerHTML == boxes[c].innerHTML && hasOnlyImg(boxes[c]))  {
      return true;
    }
    return false;
  }

  function triggerWin(player1Turn) {

    if (!playerWon) {
      if (player1Turn) {
        setTimeout(function() {alert('Player 1 wins!, game over folks!');},5);
      } else {
        setTimeout(function() {alert('Player 2 wins!, game over folks!');},5);
      }
    } else {
      alert("game is already over, click restart to play again");
    }
    playerWon = true;

  }
  

// ----------------------------
// const User = function (name) {
//   this.name = name;
//   this.discordName = "@" + name;
// }
// // hey, this is a constructor - 
// // then this can be refactored into a factory!

// function createUser (name) {
//   const discordName = "@" + name;
//   return { name, discordName };
// }
// // and that's very similar, except since it's just a function,
// // we don't need a new keyword



function createPlayer(controller) {
  return {
    side: "",
    controller: controller,
  sideSelect(team) {
    this.side = team;
    },
  returnSideImage() {
    let fireimg = "<img src='imgs/firefriend.png' />"

    let waterimg = "<img src='imgs/waterfriend.png' />"

    if (this.side == "fire") {
      return fireimg
    } else if (this.side == "water") {
      return waterimg;
    } else {
      return "side not chosen or fire/water typed incorrectly"
    }
  }
  }
}


console.log(player1);
console.log(player2);
