let scores, roundScore, round, hitNum, activePlayer, gamePlaying;

init();

document.querySelector(".btn-hit").addEventListener("click", function() {
  if (gamePlaying) {
    // Random number
    let alphaNum = Math.floor(Math.random() * 4) + 1;
    let cardNum = Math.floor(Math.random() * 8) + 2;

    let alphabet;
    hitNum += 1;
    if (alphaNum == 1) {
      alphabet = "C";
    } else if (alphaNum == 2) {
      alphabet = "D";
    } else if (alphaNum == 3) {
      alphabet = "H";
    } else if (alphaNum == 4) {
      alphabet = "S";
    }

    //Display the result
    if (hitNum == 1) {
      document.getElementById("card-1").style.display = "block";
      document.getElementById("card-1").src =
        "img/" + cardNum + alphabet + ".png";
    } else if (hitNum == 2) {
      document.getElementById("card-2").style.display = "block";
      document.getElementById("card-2").src =
        "img/" + cardNum + alphabet + ".png";
    } else if (hitNum == 3) {
      document.getElementById("card-3").style.display = "block";
      document.getElementById("card-3").src =
        "img/" + cardNum + alphabet + ".png";
    } else if (hitNum == 4) {
      document.getElementById("card-4").style.display = "block";
      document.getElementById("card-4").src =
        "img/" + cardNum + alphabet + ".png";
    } else if (hitNum == 5) {
      document.getElementById("card-5").style.display = "block";
      document.getElementById("card-5").src =
        "img/" + cardNum + alphabet + ".png";
    }

    //Update the round score IF the payer dose not have up to 5 cards

    if (round[0] < 6 && round[1] < 6 && hitNum < 6) {
      //Add score
      roundScore += cardNum;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Check the winner
      winner();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add Hit Number to grobal round
    round[activePlayer] += hitNum;

    // Check if player won the game
    winner();
  }
});

function winner() {
  // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;
  // Update the UI
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
  // check for the winner
  if (scores[activePlayer] == 21) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.getElementById("card-1").style.display = "none";
    document.getElementById("card-2").style.display = "none";
    document.getElementById("card-3").style.display = "none";
    document.getElementById("card-4").style.display = "none";
    document.getElementById("card-5").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    gamePlaying = false;
  } else if (scores[activePlayer] > 21 && activePlayer == 0) {
    document.querySelector("#name-1").textContent = "Winner!";
    document.getElementById("card-1").style.display = "none";
    document.getElementById("card-2").style.display = "none";
    document.getElementById("card-3").style.display = "none";
    document.getElementById("card-4").style.display = "none";
    document.getElementById("card-5").style.display = "none";
    document.querySelector(".player-1-panel").classList.add("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    gamePlaying = false;
  } else if (scores[activePlayer] > 21 && activePlayer == 1) {
    document.querySelector("#name-0").textContent = "Winner!";
    document.getElementById("card-1").style.display = "none";
    document.getElementById("card-2").style.display = "none";
    document.getElementById("card-3").style.display = "none";
    document.getElementById("card-4").style.display = "none";
    document.getElementById("card-5").style.display = "none";
    document.querySelector(".player-0-panel").classList.add("winner");
    document.querySelector(".player-1-panel").classList.remove("active");
    gamePlaying = false;
  } else {
    //Next player
    nextPlayer();
  }
}

function nextPlayer() {
  //Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  hitNum = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.getElementById("card-1").style.display = "none";
  document.getElementById("card-2").style.display = "none";
  document.getElementById("card-3").style.display = "none";
  document.getElementById("card-4").style.display = "none";
  document.getElementById("card-5").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  round = [0, 0];
  hitNum = 0;
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById("card-1").style.display = "none";
  document.getElementById("card-2").style.display = "none";
  document.getElementById("card-3").style.display = "none";
  document.getElementById("card-4").style.display = "none";
  document.getElementById("card-5").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
