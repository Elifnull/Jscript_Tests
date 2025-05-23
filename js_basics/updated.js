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

let cpuChoice = getComputerChoice();
let userChoice = prompt("Which do you chose Rock, Paper, or Scissors?");
let player = "you";
let cpuScore = 0;
let userScore = 0;


switch (userChoice.toLowerCase().charAt(0)){
    case "r":
        userChoice = ["Rock", player, -1];
    break;

    case "p":
        userChoice = ["Paper", player, 1];
    break;

    case "s":
        userChoice = ["Scissors", player, 0];
    break;
}



function evaluateChoices(){
    console.log(`CPU Chose: ${cpuChoice[0]} \nUser Chose: ${userChoice[0]}`);

    if (cpuChoice[0] == "Rock" && userChoice[0] == "Scissors" || 
        cpuChoice[0] == "Scissors" && userChoice[0] == "Paper" ||
        cpuChoice[0] == "Paper" && userChoice[0] == "Rock"){
            cpuScore++;
            alert(`User Chose: ${userChoice[0]}\nCPU Chose: ${cpuChoice[0]}. \nCPU wins with ${cpuChoice[0]}
                \nCpu Score: ${cpuScore}`);
            
        }
    else if (userChoice[0] == "Rock" && cpuChoice[0] == "Scissors" || 
        userChoice[0] == "Scissors" && cpuChoice[0] == "Paper" ||
        userChoice[0] == "Paper" && cpuChoice[0] == "Rock"){
            userScore++;
            alert(`User Chose: ${userChoice[0]}\nCPU Chose: ${cpuChoice[0]}. \nUser wins with ${cpuChoice[0]}
                \nUser Score: ${userScore}`);
            
        }
};

function playGame(){
    if(cpuScore+userScore < 5){
        for (let round = 0; round < 5; round++){
            evaluateChoices();
        }}
    else {
        cpuScore = 0;
        userScore = 0;
    }
}

playGame();