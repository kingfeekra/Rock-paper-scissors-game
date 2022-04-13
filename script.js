let rock = 1;
let paper = 2;
let scissors = 3;

let playerChoice = prompt("Rock, paper or scissors?");

function computerPlay() { //function for computer's turn
    let randNumb = Math.floor(Math.random()*3) + 1;
    if (rock == randNumb) {
        console.log("rock");
        return "rock";
    }

    else if (paper == randNumb) {
        console.log("paper");
        return "paper";   
    }

    else {
        console.log("scissors");
        return "scissors";
        
    }
    
}; 

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock."
    } 
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors."
    }
    else if (playerSelection.toLowerCase() == computerSelection) {
        return "Draw."
    }
}

console.log(playRound("rock", computerPlay()));

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i <  5; i++) {
        playRound
    }
}
