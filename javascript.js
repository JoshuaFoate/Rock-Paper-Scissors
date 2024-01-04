function getComputerChoice() {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    let choice = Math.floor(Math.random() * (max - min) + min);
    if (choice === 0) {
        return "ROCK";
    }
    else if (choice === 1) {
        return "PAPER";
    }
    else if (choice === 2) {
        return "SCISSORS";
    }
}

function singleRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Type Rock, Paper, or Scissors!")
    if (playerSelection.toUpperCase() !== "ROCK" && playerSelection.toUpperCase() !== "PAPER" && playerSelection.toUpperCase() !== "SCISSORS") {
        alert("You need to type either rock, paper, or scissors!");
        singleRound();
    }
    if (playerSelection.toUpperCase() === computerSelection) {
        alert("Tie! Play again!")
        singleRound();
        return;
    }
    else if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "PAPER" || playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS" || playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK") {
        let result = "HAHAHA! " + computerSelection + " beats " + playerSelection.toUpperCase() + "!"
        return console.log(result);
    }
    else if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS" || playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK" || playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER") {
        let result = "Good job! " + playerSelection.toUpperCase() + " beats " + computerSelection + "!"
        return console.log(result);
    }
}

console.log(singleRound());