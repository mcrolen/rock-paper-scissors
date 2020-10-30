let winCount = 0;
let lossCount = 0;
let tieCount = 0;

const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score");
const tieScore = document.querySelector("#tie-score");

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
                    console.log("Tie!");
                    tieCount++;
                    tieScore.textContent = tieCount;
                    break;
                case "scissors":
                    console.log("You win! Rock smashes scissors!");
                    winCount++;
                    playerScore.textContent = winCount;
                    break;
                case "paper":
                    console.log("You lose! Paper covers rock!");
                    lossCount++;
                    cpuScore.textContent = lossCount;
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    console.log("You lose! Rock smashes scissors!");
                    lossCount++;
                    cpuScore.textContent = lossCount;
                    break;
                case "scissors":
                    console.log("Tie!");
                    tieCount++;
                    tieScore.textContent = tieCount;
                    break;
                case "paper":
                    console.log("You win! Scissors cut paper!");
                    winCount++;
                    playerScore.textContent = winCount;
                    break;
            }
            break;
        case "paper":
            switch(computerSelection) {
                case "rock":
                    console.log("You win! Paper covers rock!");
                    winCount++;
                    playerScore.textContent = winCount;
                    break;
                case "scissors":
                    console.log("You lose! Scissors cut paper!");
                    lossCount++;
                    cpuScore.textContent = lossCount;
                    break;
                case "paper":
                    console.log("Tie!");
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