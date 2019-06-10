/* 
      Author: Isaac Elesia
      Date: Nov. 26, 2018. 
*/

let dragged;
let gamePlaying;
let intro = document.querySelector(".display");
let heading = document.querySelector(".heading");
let cards = document.querySelector(".cards");
let start = document.querySelector(".start");
let newGame = document.querySelector(".new");
let displayTitle = document.querySelector(".display-title");
let winner = document.querySelector(".winner");

init();

start.addEventListener("click", startGame);
newGame.addEventListener("click", startGame);

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {}, false);

document.addEventListener(
  "dragstart",
  function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function(event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener("drop", cardMovement, false);

/* events fired when the drage ends */
document.addEventListener("dragend", game, false);
//=========================================
//                  Inroduction Page
//===========================================
function init() {
  intro.style.display = "grid";
  winner.style.display = "none";
  newGame.style.display = "none";
  heading.style.display = "none";
  cards.style.display = "none";
}

//=========================================
//                   Start Game
//===========================================
function startGame() {
  intro.style.display = "none";
  heading.style.display = "block";
  cards.style.display = "grid";

  generateCards();
}
//=========================================
//                  Win Screen
//===========================================
function winScreen() {
  intro.style.display = "grid";
  winner.style.display = "inline-block";
  newGame.style.display = "block";
  displayTitle.style.display = "none";
  start.style.display = "none";
  heading.style.display = "none";
  cards.style.display = "none";

  cards.innerHTML = "";
}
//=========================================
//                    Generate Cards
//===========================================

function generateCards() {
  let emptySpace = Math.floor(Math.random() * 18) + 1;

  for (let i = 1; i < 19; i++) {
    let alphabet;
    let image;
    let alphaNum = Math.floor(Math.random() * 4) + 1;
    let cardNum = Math.floor(Math.random() * 8) + 2;

    let className = 0 + i + "_card";
    if (alphaNum == 1) {
      alphabet = "C";
    } else if (alphaNum == 2) {
      alphabet = "D";
    } else if (alphaNum == 3) {
      alphabet = "H";
    } else if (alphaNum == 4) {
      alphabet = "S";
    }

    if (i == emptySpace) {
      image = "";
    } else {
      image = "<img src='img/" + cardNum + alphabet + ".png' class='card'>";
    }

    let pageContent = "<div class='" + className + "' >" + image + "</div> ";

    cards.insertAdjacentHTML("beforeend", pageContent);
  }
}

// ===============================
//        Card Movements
// ==============================

function cardMovement(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  let cardName = dragged.parentNode.className;
  let cardNum = parseFloat(cardName.slice(0, 3));
  let left = cardNum - 1 + "_card";
  let right = cardNum + 1 + "_card";
  let up = cardNum - 6 + "_card";
  let down = cardNum + 6 + "_card";

  if (event.target.className != "card") {
    if (
      event.target.className == left ||
      event.target.className == right ||
      event.target.className == up ||
      event.target.className == down
    ) {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  }
}

//=========================================
//                    Drag  End
//===========================================
function game(event) {
  // reset the transparency
  event.target.style.opacity = "";
  //========================
  //          Droped Card
  //=======================
  let dropedCard = event.target;
  let dropedCardSrc = dropedCard.src;
  let dropedCardSlice = dropedCardSrc.slice(-5);
  let dropedCardChar = dropedCardSlice.charAt(0);

  let dropedCardParent = dropedCard.parentNode.className;
  let cardNum = parseFloat(dropedCardParent.slice(0, 3));
  //========================
  //          Left Card
  //=======================
  let leftCardChar = "U";
  let leftCard = document.getElementsByClassName(cardNum - 1 + "_card");
  if (leftCard.item(0) != null && leftCard.item(0).firstElementChild != null) {
    let leftCardSrc = leftCard.item(0).firstElementChild.src;
    let leftCardSlice = leftCardSrc.slice(-5);
    leftCardChar = leftCardSlice.charAt(0);
  }
  //========================
  //          Right Card
  //=======================
  let rightCardChar = "W";
  let rightCard = document.getElementsByClassName(cardNum + 1 + "_card");
  if (
    rightCard.item(0) != null &&
    rightCard.item(0).firstElementChild != null
  ) {
    let rightCardSrc = rightCard.item(0).firstElementChild.src;
    let rightCardSlice = rightCardSrc.slice(-5);
    rightCardChar = rightCardSlice.charAt(0);
  }

  //========================
  //          Up Card
  //=======================
  let upCardChar = "Z";
  let upCard = document.getElementsByClassName(cardNum - 6 + "_card");
  if (upCard.item(0) != null && upCard.item(0).firstElementChild != null) {
    let upCardSrc = upCard.item(0).firstElementChild.src;
    let upCardSlice = upCardSrc.slice(-5);
    upCardChar = upCardSlice.charAt(0);
  }

  //========================
  //          Up Card Right
  //=======================
  let upCardRightChar = "Q";
  let upCardRight = document.getElementsByClassName(cardNum - 5 + "_card");
  if (upCardRight.item(0) != null && upCard.item(0).firstElementChild != null) {
    let upCardRightSrc = upCardRight.item(0).firstElementChild.src;
    let upCardRightSlice = upCardRightSrc.slice(-5);
    upCardRightChar = upCardRightSlice.charAt(0);
  }
  //========================
  //          Up Card Left
  //=======================
  let upCardLeftChar = "R";
  let upCardLeft = document.getElementsByClassName(cardNum - 7 + "_card");
  if (
    upCardLeft.item(0) != null &&
    upCardLeft.item(0).firstElementChild != null
  ) {
    let upCardLeftSrc = upCardLeft.item(0).firstElementChild.src;
    let upCardLeftSlice = upCardLeftSrc.slice(-5);
    upCardLeftChar = upCardLeftSlice.charAt(0);
  }

  //========================
  //          Down Card
  //=======================
  let downCardChar = "X";
  let downCard = document.getElementsByClassName(cardNum + 6 + "_card");
  if (downCard.item(0) != null && downCard.item(0).firstElementChild != null) {
    let downCardSrc = downCard.item(0).firstElementChild.src;
    let downCardSlice = downCardSrc.slice(-5);
    downCardChar = downCardSlice.charAt(0);
  }
  //========================
  //          Down Card Right
  //=======================
  let downCardRightChar = "Y";
  let downCardRight = document.getElementsByClassName(cardNum + 7 + "_card");
  if (
    downCardRight.item(0) != null &&
    downCardRight.item(0).firstElementChild != null
  ) {
    let downCardRightSrc = downCardRight.item(0).firstElementChild.src;
    let downCardRightSlice = downCardRightSrc.slice(-5);
    downCardRightChar = downCardRightSlice.charAt(0);
  }
  //========================
  //          Down Card Left
  //=======================
  let downCardLeftChar = "T";
  let downCardLeft = document.getElementsByClassName(cardNum + 5 + "_card");
  if (
    downCardLeft.item(0) != null &&
    downCardLeft.item(0).firstElementChild != null
  ) {
    let downCardLeftSrc = downCardLeft.item(0).firstElementChild.src;
    let downCardLeftSlice = downCardLeftSrc.slice(-5);
    downCardLeftChar = downCardLeftSlice.charAt(0);
  }
  //========================
  //         Check If Player Win's
  //=========================
  if (dropedCardChar == upCardChar && dropedCardChar == rightCardChar) {
    winScreen();
  } else if (
    dropedCardChar == downCardChar &&
    dropedCardChar == rightCardChar
  ) {
    winScreen();
  } else if (dropedCardChar == downCardChar && dropedCardChar == leftCardChar) {
    winScreen();
  } else if (dropedCardChar == upCardChar && dropedCardChar == leftCardChar) {
    winScreen();
  } else if (
    dropedCardChar == upCardChar &&
    dropedCardChar == upCardRightChar
  ) {
    winScreen();
  } else if (dropedCardChar == upCardChar && dropedCardChar == upCardLeftChar) {
    winScreen();
  } else if (
    dropedCardChar == downCardChar &&
    dropedCardChar == downCardRightChar
  ) {
    winScreen();
  } else if (
    dropedCardChar == downCardChar &&
    dropedCardChar == downCardLeftChar
  ) {
    winScreen();
  } else if (
    dropedCardChar == leftCardChar &&
    dropedCardChar == downCardLeftChar
  ) {
    winScreen();
  } else if (
    dropedCardChar == rightCardChar &&
    dropedCardChar == downCardLeftChar
  ) {
    winScreen();
  } else if (
    dropedCardChar == leftCardChar &&
    dropedCardChar == upCardLeftChar
  ) {
    winScreen();
  } else if (
    dropedCardChar == rightCardChar &&
    dropedCardChar == upCardRightChar
  ) {
    winScreen();
  }
}
