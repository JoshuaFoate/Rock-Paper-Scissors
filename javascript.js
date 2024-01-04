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

function singleRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Type Rock, Paper, or Scissors!")
    if (playerSelection.toUpperCase() !== "ROCK" && playerSelection.toUpperCase() !== "PAPER" && playerSelection.toUpperCase() !== "SCISSORS") {
        alert("You need to type either rock, paper, or scissors!");
        return singleRound();
    }
    if (playerSelection.toUpperCase() === computerSelection) {
        alert("Tie! Play again!")
        return singleRound();
    }
    else if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "PAPER" || playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS" || playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK") {
        let message = "HAHAHA! " + computerSelection + " beats " + playerSelection.toUpperCase() + "!";
        let result = 2;
        console.log(message);
        return result;    
    }
    else if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS" || playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK" || playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER") {
        let message = "Good job! " + playerSelection.toUpperCase() + " beats " + computerSelection + "!";
        let result = 1;
        console.log(message);
        return result;
    }
}

function game() {
    let i;
    let j;
    for (i = 0, j = 0; i < 3 && j < 3;) {
        let result = singleRound();
        console.log(result);
        if (result === 1) {
            console.log("You won this round!");
            ++i;
            console.log("Score: " + i + " : " + j);
        }
        else if (result === 2) {
            console.log("You lost this round !");
            ++j;
            console.log("Score: " + i + " : " + j);
        }
    }
    if (i === 3) {
        console.log("YOU WON!");
    }
    else if (j === 3) {
        console.log("YOU LOST!");
    }
}

game();