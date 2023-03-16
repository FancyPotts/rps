function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    let computerChoose = Math.floor((Math.random() * 3));
    return choices[computerChoose]
}