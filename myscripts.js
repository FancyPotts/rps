function playFiveRounds() {
    let playerTally = 0
    let computerTally = 0
    for (let i = 1; i <= 5; i++) {
        const choices = ["rock", "paper", "scissors"];
        const playerSelection = prompt("Choose your weapon: rock, paper or scissors.");
        console.log(playerSelection);
        const computerSelection = choices[Math.floor((Math.random() * choices.length))];
        console.log(computerSelection)
        if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            console.log("You lose!");
            computerTally++;
            console.log(computerTally);
        } else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "scissors") {
            console.log("You win!");
            playerTally++;
            console.log(playerTally)
        } else {
            console.log("Draw!");
        }
    }
    if (playerTally > computerTally) {
        console.log("Congratulations, you won by " + (playerTally - computerTally))
        } else if (playerTally < computerTally) {
        console.log("Ah boo, you lost by " + (computerTally - playerTally))
    }
}
