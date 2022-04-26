let rock = 1;
let paper = 2;
let scissors = 3;

//let playerSelection = prompt("Rock, paper or scissors?");

let playerCount = 0;
let computerCount = 0;

function playerSelect() {
    return prompt("Rock, paper or scissors?");
}

function computerPlay() { //function for computer's turn
    
    let randNumb = Math.floor(Math.random()*3) + 1; //random number between 1 and 3 is generated
    if (rock == randNumb) { //if rock, paper or scissors is equal to the random number, return a string
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

function playRound(playerSelection, computerSelection) { //function to play a single round of the game
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") { //various matchups return different results
        computerCount++;
        return "You lose! Paper beats rock."
    } 

    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerCount++;
        return "You win! Paper beats rock."
    }

    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        playerCount++;
        return "You win! Rock beats scissors."
    }

    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerCount++;
        return "You lose! Rock beats scissors."
    }

    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        playerCount++;
        return "You win! Scissors beats paper."
    }

    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerCount++;
        return "You lose! Scissors beats paper."
    }

    
    else if (playerSelection.toLowerCase() == computerSelection) {
        return "Draw."
    }
}

function game() { //function to repeat the game for 5 rounds
    

    console.log(playRound(playerSelect(), computerPlay()));
  
    if (playerCount > computerCount) {
        console.log("Winner!");
        alert("You won!");
    }
    else if (computerCount > playerCount) {
        console.log("Loser.");
        alert("You lost.")
    }
    else {
        console.log("Game ends in a draw.");
        alert(("Draw."))  
    } // depending on the results of the 5 rounds, different messages are alerted
}

const btn = document.querySelectorAll('.button');
    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', game);
    };


//game(); //run game function
