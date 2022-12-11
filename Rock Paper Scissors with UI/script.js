var playerScore = 0;
var computerScore = 0;
var round = 0;


document.getElementById("win-message").textContent = 'Can You Beat The Computer?';
document.getElementById("round").textContent = round;
document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;


function capitalize(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

//Chooses rock paper or scisssors at random for computer
function computerPlay() {
    var computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}



//Plays one round, iterates the round counter, assigns points to winner and returns string.
function playRound(playerSelection, computerSelection) {
    var playerWin = 'You Win! ' + capitalize(playerSelection) + ' Beats ' + capitalize(computerSelection) + '.';
    var computerWin = 'You Lose! ' + capitalize(computerSelection) + ' Beats ' + capitalize(playerSelection) + '.';
    var gameTie = 'Its a Draw! You both chose ' + capitalize(playerSelection);
    round++;
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return badInput;
    }

    else if (playerSelection === computerSelection) {
        return gameTie;
    }

    else {
        if (playerSelection === 'rock') {
            if (computerSelection !== 'paper') {
                playerScore++;
                return playerWin;
            } else {
                computerScore++;
                return computerWin;
            }
        }
        if (playerSelection === 'paper') {
            if (computerSelection !== 'scissors') {
                playerScore++;
                return playerWin;
            } else {
                computerScore++;
                return computerWin;
            }
        }
        if (playerSelection === 'scissors') {
            if (computerSelection !== 'rock') {
                playerScore++;
                return playerWin;

            } else {
                computerScore++;
                return computerWin;
            }
        }

    }
}

//Takes string from playRound as input, iterates game till at least one player reaches 5 points   
function game(player) {
    if (playerScore < 5 && computerScore < 5) {
        var playerSelection = player
        const computerSelection = computerPlay();
        var roundText = playRound(playerSelection, computerSelection);
        document.getElementById("win-message").textContent = roundText;
        document.getElementById("round").textContent = round;
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
    }

    if (playerScore == 5) {
        document.getElementById('win-message').textContent = 'You are strong, you beat the Computer!';
        document.getElementById('win-message').setAttribute('style', 'color: green;');
    }
    if (computerScore == 5) {
        document.getElementById('win-message').textContent = 'Too weak! The Computer Wins The Game!!';
        document.getElementById('win-message').setAttribute('style', 'color: red;');
    }
}


var rockBtn = document.querySelector('#rock-btn');
var paperBtn = document.querySelector('#paper-btn');
var scissorsBtn = document.querySelector('#scissors-btn');
var resetButton = document.querySelector('#reset-button');


rockBtn.addEventListener('click', () => {
    game('rock');
});

paperBtn.addEventListener('click', () => {
    game('paper');
});

scissorsBtn.addEventListener('click', () => {
    game('scissors');
});


resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById('win-message').setAttribute('style', 'color: black;');
    document.getElementById("round").textContent = round;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("win-message").textContent = 'Can you beat the Computer?';

});