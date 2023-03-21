function toLower(string) {
  return string.toLowerCase();
}


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
    outcomeMessage = draw
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    outcomeMessage = win
  } else {
    outcomeMessage = lose
  }
  let outcomeElement = document.getElementById('outcome');
  outcomeElement.textContent = outcomeMessage;
}


document.getElementById("rock").addEventListener("click", function() {
  game("rock")
});
document.getElementById("paper").addEventListener("click", function() {
  game("paper")
});
document.getElementById("scissors").addEventListener("click", function() {
  game("scissors")
});



// function playFirstToThree() {
//   let playerTally = 0;
//   let computerTally = 0;
//   while (playerTally !== 3 && computerTally !== 3) {
//     let outcome = game();
//     if (outcome === "You lose!") {
//       computerTally++;
//     } else if (outcome === "You win!") {
//       playerTally++;
//     }
//   }
//   // When were the rock puns the most funny?... The stone age!
//   if (playerTally > computerTally) {
//     console.log("Congratulations, you won by " + (playerTally - computerTally));
//   } else {
//     console.log("Ah boo, you lost by " + (computerTally - playerTally));
//   }
// }
