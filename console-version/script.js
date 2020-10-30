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

function playRound(playerSelection, computerSelection, winsCount) {

    switch(playerSelection.toLowerCase()) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    console.log("Tie!");
                    break;
                case "scissors":
                    console.log("You win! Rock smashes scissors!");
                    winsCount++;
                    break;
                case "paper":
                    console.log("You lose! Paper covers rock!");
                    winsCount--;
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    console.log("You lose! Rock smashes scissors!");
                    winsCount--;
                    break;
                case "scissors":
                    console.log("Tie!");
                    break;
                case "paper":
                    console.log("You win! Scissors cut paper!");
                    winsCount++;
                    break;
            }
            break;
        case "paper":
            switch(computerSelection) {
                case "rock":
                    console.log("You win! Paper covers rock!");
                    winsCount++;
                    break;
                case "scissors":
                    console.log("You lose! Scissors cut paper!");
                    winsCount--;
                    break;
                case "paper":
                    console.log("Tie!");
                    break;
            }
            break;
    }
    return winsCount;
}

function game() {
    let gameCount = 0;
    let winsCount = 0;

    while (gameCount < 5) {
        winsCount = playRound(prompt("Choose your implement!", ""), computerPlay(), winsCount);
        gameCount++;    
    }

    if (winsCount > 0) {
        console.log(`You won! 😎`);
    } else if (winsCount < 0) {
        console.log(`You lost! 😥`);
    } else {
        console.log(`Draw! 😅`);
    }
}

game();