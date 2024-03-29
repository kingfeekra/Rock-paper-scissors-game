let rock = 1;
let paper = 2;
let scissors = 3;

let playerCount = 0;
let computerCount = 0;

let playerSelect; //later becomes a function

const container = document.querySelector("#results");
const results = document.createElement("p");
const selections = document.createElement("p");
const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
container.appendChild(selections);
container.appendChild(results);
container.appendChild(playerScore);
container.appendChild(computerScore);

 const btn = document.querySelectorAll('.button'); //return nodelist of buttons, add event listeners to all buttons through loop
    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => console.log(btn[i].id));
        btn[i].addEventListener("click", () => playerSelect = function() { //returns a different selection depending on which button is clicked
            if(i == 0) {
                return "rock";
            }
            else if(i == 1) {
                return "paper";
            }
            else if(i == 2) {
                return "scissors";
            }
        });
        btn[i].addEventListener('click', game); //runs 1 round of the game when player clicks any button
    }; 



function computerPlay() { //function for computer's turn
    
    let randNumb = Math.floor(Math.random()*3) + 1; //random number between 1 and 3 is generated
    if (rock == randNumb) { //if rock, paper or scissors is equal to the random number, return a string
        //console.log("rock");
        return "rock";
    }

    else if (paper == randNumb) {
        //console.log("paper");
        return "paper";   
    }

    else {
        //console.log("scissors");
        return "scissors";
        
    }
    
}; 

function playRound(playerSelection, computerSelection) { //function to play a single round of the game
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") { //various matchups return different results
        computerCount++;
        selections.textContent = "You chose: rock. Computer chose: paper.";
        results.textContent = "You lose! Paper beats rock.";
        playerScore.textContent = "Your score: " + `${playerCount}` + ".";
        computerScore.textContent = "Your score: " + `${computerCount}` + ".";
        return "You lose! Paper beats rock.";
    } 

    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerCount++;
        selections.textContent = "You chose: paper. Computer chose: rock.";
        results.textContent = "You win! Paper beats rock.";
        playerScore.textContent = "Your score: " + `${playerCount}` + ".";
        computerScore.textContent = "Your score: " + `${computerCount}` + ".";
        return "You win! Paper beats rock.";
    }

    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        playerCount++;
        selections.textContent = "You chose: rock. Computer chose: scissors.";
        results.textContent = "You win! Rock beats scissors.";
        playerScore.textContent = "Your score: " + `${playerCount}` + ".";
        computerScore.textContent = "Your score: " + `${computerCount}` + ".";
        return "You win! Rock beats scissors.";
    }

    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerCount++;
        selections.textContent = "You chose: scissors. Computer chose: rock.";
        results.textContent = "You lose! Rock beats scissors.";
        playerScore.textContent = "Your score: " + `${playerCount}` + ".";
        computerScore.textContent = "Your score: " + `${computerCount}` + ".";
        return "You lose! Rock beats scissors.";
    }

    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        playerCount++;
        selections.textContent = "You chose: scissors. Computer chose: paper.";
        results.textContent = "You win! Scissors beats paper.";
        playerScore.textContent = "Your score: " + `${playerCount}` + ".";
        computerScore.textContent = "Your score: " + `${computerCount}` + ".";
        return "You win! Scissors beats paper.";
    }

    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerCount++;
        selections.textContent = "You chose: paper. Computer chose: scissors.";
        results.textContent = "You lose! Scissors beats paper.";
        playerScore.textContent = "Your score: " + `${playerCount}` + ".";
        computerScore.textContent = "Your score: " + `${computerCount}` + ".";
        return "You lose! Scissors beats paper.";
    }

    
    else if (playerSelection.toLowerCase() == computerSelection) {
        selections.textContent = "It's a draw!";
        results.textContent = "Draw.";
        playerScore.textContent = "Your score: " + `${playerCount}` + ".";
        computerScore.textContent = "Your score: " + `${computerCount}` + ".";
        return "Draw.";
    }
}

function game() { //function to repeat the game for 5 rounds
    

    console.log(playRound(playerSelect(), computerPlay()));
  
     if (playerCount == 5) {
        alert("You won 5 rounds! Congratulations!");
        location.reload();
    }
    else if (computerCount == 5) {
        alert("You lost. Computer won 5 rounds.");
        location.reload();
    }
}



    
//game(); //run game function */
