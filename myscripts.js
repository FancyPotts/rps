let playerTally = 0;
let computerTally = 0;
let outcomeElement = document.getElementById("outcome");
const scoreDiv = document.getElementById("score");
const resetButton = document.getElementById("reset");

function game(playerSelection) {
  const choices = ["rock", "paper", "scissors"];
  const draw = "Draw!";
  const win = "You win!";
  const lose = "You lose!";
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  if (
    playerSelection === computerSelection ||
    playerSelection === computerSelection ||
    playerSelection === computerSelection
  ) {
    outcomeMessage = draw;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    outcomeMessage = win;
    playerTally++;
  } else {
    outcomeMessage = lose;
    computerTally++;
  }
  outcomeElement.textContent = outcomeMessage;
  scoreDiv.innerHTML = `Your score: ${playerTally} | Computer score: ${computerTally}`;
  if (playerTally === 5 && computerTally < 5) {
    outcomeElement.textContent = "You're the first to five! Congratulations!";
  } else if (computerTally === 5 && playerTally < 5) {
    outcomeElement.textContent =
      "The computer got to five first! You lose!";
  } else if (computerTally > 5 || playerTally > 5) {
    outcomeElement.textContent =
      "Uhhh the game ended already... But you keep doing you.";
  }
}

document.getElementById("rock").addEventListener("click", function () {
  game("rock");
});
document.getElementById("paper").addEventListener("click", function () {
  game("paper");
});
document.getElementById("scissors").addEventListener("click", function () {
  game("scissors");
});
resetButton.addEventListener("click", function () {
  playerTally = 0;
  computerTally = 0;
  scoreDiv.innerHTML = `Your score: ${playerTally} | Computer score: ${computerTally}`;
  outcomeElement.textContent = 'Game reset! Let\'s do this again!';
});
