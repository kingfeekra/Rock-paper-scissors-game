let rock = 1;
let paper = 2;
let scissors = 3;

function computerPlay() {
    let randNumb = Math.floor(Math.random()*3) + 1;
    console.log(randNumb);
    if (rock == randNumb) {
        return "Rock";
    }

    else if (paper == randNumb) {
        return "Paper";
    }

    else {
        return "Scissors";
    }
};

function playRound() {
    
}

console.log(computerPlay());
