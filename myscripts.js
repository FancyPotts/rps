function playFirstToThree() {
  let playerTally = 0;
  let computerTally = 0;

  while (playerTally !== 3 && computerTally !== 3) {
    const choices = ["rock", "paper", "scissors"];
    const playerSelection = prompt(
      "Choose your weapon: rock, paper or scissors."
    );
    const computerSelection =
      choices[Math.floor(Math.random() * choices.length)];
    if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      console.log("You lose!");
      computerTally++;
    } else if (
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "rock" && computerSelection === "scissors")
    ) {
      console.log("You win!");
      playerTally++;
    } else {
      console.log("Draw!");
    }
  }
  if (playerTally > computerTally) {
    console.log("Congratulations, you won by " + (playerTally - computerTally));
  } else if (playerTally < computerTally) {
    console.log("Ah boo, you lost by " + (computerTally - playerTally));
  }
}
