function toLower(string) {
  return string.toLowerCase();
}


function game() {
  const choices = ["rock", "paper", "scissors"];
  const playerSelection = toLower(prompt(
    "Choose your weapon: rock, paper or scissors."
  ));
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  if (
    playerSelection === computerSelection ||
    playerSelection === computerSelection ||
    playerSelection === computerSelection
  ) {
    return "Draw! Try again.";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}


function playFirstToThree() {
  let playerTally = 0;
  let computerTally = 0;
  while (playerTally !== 3 && computerTally !== 3) {
    let outcome = game();
    console.log(outcome);
    if (outcome === "You lose!") {
      computerTally++;
    } else if (outcome === "You win!") {
      playerTally++;
    }
  }
  if (playerTally > computerTally) {
    console.log("Congratulations, you won by " + (playerTally - computerTally));
  } else {
    console.log("Ah boo, you lost by " + (computerTally - playerTally));
  }
}
