function getComputerChoice() {
    let choice = Math.floor((Math.random()*3)+1);
    let outcome 
    let user = "CPU"
     if (choice == 1){
        outcome = ["Rock", user, -1];
     } else if (choice == 2){
        outcome = ["Paper", user, 1]
     } else if (choice == 3){
        outcome = ["Scissors", user, 0];
     }
     return outcome;
};

let cpuChoice = getComputerChoice();
let userChoice = prompt("Which do you chose Rock, Paper, or Scissors?");
let player = "you";


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



console.log(`CPU Chose: ${cpuChoice[0]} \nUser Chose: ${userChoice[0]}`);

function evaluateChoices(){
    let arrayEvaluation = cpuChoice[2] + userChoice[2];
    console.log( `Cpu: ${cpuChoice}\nPlayer: ${userChoice}`);
    console.log(arrayEvaluation);

    if (arrayEvaluation == -1) {
        alert(`Player Chose: ${userChoice[0]}\nCPU Chose: ${cpuChoice[0]}. \nWinner is Rock`);
    } else if (arrayEvaluation == 0){
        alert(`Player Chose: ${userChoice[0]}\nCPU Chose: ${cpuChoice[0]}. \nWinner is Paper`);
    } else if (arrayEvaluation == 1){
        alert(`Player Chose: ${userChoice[0]}\nCPU Chose: ${cpuChoice[0]}. \nWinner is Scissors`);
    } else {
        alert(`Player Chose: ${userChoice[0]}\nCPU Chose: ${cpuChoice[0]}. \nThis is a Tie`);
    }
};

evaluateChoices();

