let winCount = 0;
let lossCount = 0;
let tieCount = 0;

const playerScore = document.querySelector('#player-score');
const cpuScore = document.querySelector('#cpu-score');
const tieScore = document.querySelector('#tie-score');
const gameResult = document.querySelector('#game-result');

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    gameResult.textContent = "Tie!";
                    tieCount++;
                    tieScore.textContent = tieCount;
                    break;
                case "scissors":
                    gameResult.textContent = "You win! Rock smashes scissors!";
                    winCount++;
                    playerScore.textContent = winCount;
                    break;
                case "paper":
                    gameResult.textContent = "You lose! Paper covers rock!";
                    lossCount++;
                    cpuScore.textContent = lossCount;
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    gameResult.textContent = "You lose! Rock smashes scissors!";
                    lossCount++;
                    cpuScore.textContent = lossCount;
                    break;
                case "scissors":
                    gameResult.textContent = "Tie!";
                    tieCount++;
                    tieScore.textContent = tieCount;
                    break;
                case "paper":
                    gameResult.textContent = "You win! Scissors cut paper!";
                    winCount++;
                    playerScore.textContent = winCount;
                    break;
            }
            break;
        case "paper":
            switch(computerSelection) {
                case "rock":
                    gameResult.textContent = "You win! Paper covers rock!";
                    winCount++;
                    playerScore.textContent = winCount;
                    break;
                case "scissors":
                    gameResult.textContent = "You lose! Scissors cut paper!";
                    lossCount++;
                    cpuScore.textContent = lossCount;
                    break;
                case "paper":
                    gameResult.textContent = "Tie!";
                    tieCount++;
                    tieScore.textContent = tieCount;
                    break;
            }
            break;
    }
    if (winCount >= 5) alert("You win!");
    if (lossCount >= 5) alert("You lose!");
}

function startGame (e) {;
    playRound(this.id, computerPlay());
}

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', startGame));