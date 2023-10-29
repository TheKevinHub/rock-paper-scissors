let wins = 0;
let losses = 0;
let round = 0;

let btnRock = document.querySelector(".btnRock");
let btnPaper = document.querySelector(".btnPaper");
let btnScissors = document.querySelector(".btnScissors");
let roundClass = document.querySelector(".round");
let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
let results = document.querySelector(".results");
let gameResults = document.querySelector(".gameResults");
let btnsContainer = document.querySelector(".btnsContainer");
let roundContainer = document.querySelector(".roundContainer");

document.querySelector(".btnPlayAgain").style.visibility = 'hidden';
document.querySelector(".endContainer").style.visibility = 'hidden';
document.querySelector(".gameResults").style.visibility = 'hidden';


function getComputerChoice() {
    let compChoice = Math.ceil(Math.random() * 3);
    return compChoice == 1 ? compChoice = "Rock"
    : compChoice == 2 ? compChoice = "Paper"
    : compChoice = "Scissors";
}

function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper, Scissors?");
    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    
    while (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors")
    {
        alert("Sorry, that's not an option. Try again.");
        getPlayerChoice();
    }

    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        results.textContent = "Tie! Round is reset.";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        wins += 1;
        round += 1;
        results.textContent = "Player wins this round! Rock beats Paper.";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        wins += 1;
        round += 1;
        results.textContent = "Player wins this round! Paper beats Rock.";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        wins += 1;
        round += 1;
        results.textContent = "Player wins this round! Scissors beats Paper.";
    }
    else {
        losses += 1;
        round += 1;
        results.textContent = `Computer wins this round... ${computerSelection} beats ${playerSelection}.`;
    }
    roundClass.textContent = `Current Round: ${round}`;
    player.textContent = `Player Score: ${wins}`;
    computer.textContent = `Computer Score: ${losses}`;

    if (round === 5)
    {
        roundContainer.remove();
        results.remove();
        btnsContainer.remove();
        if (wins > losses) {
            gameResults.textContent = `Player wins the game with a score of ${wins}!`;
        }
        else {
            gameResults.textContent = `Computer wins the game with a score of ${losses}...`;
        }
        document.querySelector(".btnPlayAgain").style.visibility = 'visible';
    }
}

// function game() {
//     wins = 0;
//     losses = 0;
//     round = 0;

//     while (round < 5) {
//         round += 1;
//         playRound(getPlayerChoice(), getComputerChoice());
//     }
//     if (wins > losses) {
//         alert("Player wins the game! " + wins + " to " + losses);
//     }
//     else {
//         alert("Computer wins the game... " + losses + " to " + wins);
//     }
// }

// game();
btnRock.addEventListener("click", function(e){playRound("Rock", getComputerChoice())});
btnPaper.addEventListener("click", function(e){playRound("Paper", getComputerChoice())});
btnScissors.addEventListener("click", function(e){playRound("Scissors", getComputerChoice())});