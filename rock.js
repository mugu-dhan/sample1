let playerScore = 0;
let computerScore = 0;

// Function to generate a random number between 0 and 2 (inclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to determine the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[getRandomInt(choices.length)];
}

// Function to determine the winner of a single round
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Function to update the scores on the page
function updateScores() {
    document.getElementById('player-score-number').textContent = playerScore;
    document.getElementById('computer-score-number').textContent = computerScore;
}

// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    const winner = checkWinner(playerSelection, computerSelection);

    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    updateScores();
}

// Add event listeners to the buttons
document.getElementById('rock-button').addEventListener('click', () => {
    playRound('rock');
});

document.getElementById('paper-button').addEventListener('click', () => {
    playRound('paper');
});

document.getElementById('scissors-button').addEventListener('click', () => {
    playRound('scissors');
});
