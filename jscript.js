let playerScore = 0;
let cpuScore = 0;
let round = 0;
let playerRPS = ""; 

const playerChoice = document.querySelector("#choiceSelectionDiv");
const playerSpanScore = document.querySelector("#playerScore");
const cpuSpanScore = document.querySelector("#computerScore");

playerChoice.addEventListener("click", e => { 
    let selectedChoice = e.target.id;
    let logChoices = console.log(`${selectedChoice} is ${typeof(selectedChoice)}`);

    switch (playerChoice) {
        case "Rock":
            playerRPS = selectedChoice;
            logChoices
            break;
        case "Paper":
            playerRPS = selectedChoice;
            logChoices
            break;
        case "Scissors":
            playerRPS = selectedChoice;
            logChoices
            break;
    }
});

function getComputerChoice() {
    let choice = Math.floor((Math.random()*3)+1);
    let outcome 
     if (choice == 1){
        outcome = "Rock";
     } else if (choice == 2){
        outcome = "Paper";
     } else if (choice == 3){
        outcome = "Scissors";
     }
     return outcome;
};

function evaluateGame () {
    
};