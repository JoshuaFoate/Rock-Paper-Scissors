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

const results = document.querySelector('.results');

let message = document.createElement('div');
message.classList.add('message-results');

let score = document.createElement('div');
score.classList.add('score');

function singleRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        message.textContent = 'Tie!';
        results.appendChild(message);
        let result = 0;
        return result;
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "SCISSORS" || playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        message.textContent = "You lose! " + computerSelection + " beats " + playerSelection.toUpperCase() + "!";
        results.appendChild(message);
        let result = 2;
        return result;    
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        message.textContent = "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection + "!";
        results.appendChild(message);
        let result = 1;
        return result;
    }
    
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    singleRound("ROCK");
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    singleRound("PAPER");
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    singleRound("SCISSORS");
});

// function game() {
//     let i;
//     let j;
//     for (i = 0, j = 0; i < 3 && j < 3;) {
//         let result = singleRound();
//         console.log(result);
//         if (result === 1) {
//             console.log("You won this round!");
//             ++i;
//             console.log("Score: " + i + " : " + j);
//         }
//         else if (result === 2) {
//             console.log("You lost this round !");
//             ++j;
//             console.log("Score: " + i + " : " + j);
//         }
//     }
//     if (i === 3) {
//         console.log("YOU WON!");
//     }
//     else if (j === 3) {
//         console.log("YOU LOST!");
//     }
// }