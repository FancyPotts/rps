function playRPS() {
    const choices = ["rock", "paper", "scissors"];
    const playerSelection = prompt("Choose your weapon: rock, paper or scissors.");
    const computerSelection = choices[Math.floor((Math.random() * choices.length))];
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissor" || playerSelection === "scissor" && computerSelection === "rock") {
        console.log("You lose!")
    } else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissor" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "scissor") {
        console.log("You win!");
    } else {
        console.log("Draw!");
    }
}
    