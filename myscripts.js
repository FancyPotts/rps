function toLower(string) {
  return string.toLowerCase();
}


function game() {
  const choices = ["rock", "paper", "scissors"];
  const draw = "Draw!";
  const win = "You win!";
  const lose = "You lose!";
  const playerSelection = toLower(prompt(
    "Choose your weapon: rock, paper or scissors."
  ));
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  if (
    playerSelection === computerSelection ||
    playerSelection === computerSelection ||
    playerSelection === computerSelection
  ) {
    console.log(draw)
    return draw;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    console.log(win)
    return win;
  } else {
    console.log(lose)
    return lose;
  }
}


function playFirstToThree() {
  let playerTally = 0;
  let computerTally = 0;
  while (playerTally !== 3 && computerTally !== 3) {
    let outcome = game();
    if (outcome === "You lose!") {
      computerTally++;
    } else if (outcome === "You win!") {
      playerTally++;
    }
  }
  // When were the rock puns the most funny?... The stone age!
  if (playerTally > computerTally) {
    console.log("Congratulations, you won by " + (playerTally - computerTally));
  } else {
    console.log("Ah boo, you lost by " + (computerTally - playerTally));
  }
}
