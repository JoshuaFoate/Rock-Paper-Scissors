/* Creating the elements for results, message,
   score, and the winner.
*/
const results = document.querySelector('.results');

let message = document.createElement('div');
message.classList.add('message-results');

let score = document.createElement('div');
score.classList.add('score');
results.appendChild(score);

let winner = document.createElement('div');
winner.classList.add('winner');
results.appendChild(winner);

/* Getting the computer's choice, random selection
   between rock, paper and scissors.
*/
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

/* Function to play a single round of the game
   after the player makes a choice. This function
   records the score and tells the player whether
   they won, lost or tied the round.
*/
i = 0;
j = 0;
function singleRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result;
    winner.textContent = '';

    if (playerSelection === computerSelection) {
        message.textContent = 'Tie!';
        results.appendChild(message);
        result = 0;
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "SCISSORS" || playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        message.textContent = computerSelection + " beats " + playerSelection.toUpperCase() + "!";
        results.appendChild(message);
        result = 2;
        j++;
        score.textContent = 'Score ' + i + ':' + j;
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        message.textContent = playerSelection.toUpperCase() + " beats " + computerSelection + "!";
        results.appendChild(message);
        result = 1;
        i++;
        score.textContent = 'Score ' + i + ':' + j;
    }
    if (i === 5) {
        winner.textContent = 'You win!';
        i = 0;
        j = 0;
    }
    else if (j === 5) {
        winner.textContent = 'You lose!';
        i = 0;
        j = 0;
    }
    return;
}

/* Event listeners for the buttons to exectute
   the singleRound function when clicked.
*/
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