function getComputerChoice() {
    let choice = Math.floor((Math.random()*3)+1);
    let outcome 
     if (choice == 1){
        outcome = "Rock"
     } else if (choice == 2){
        outcome = "Paper"
     } else if (choice == 3){
        outcome = "Scissors"
     }
     return outcome;
};

let userChoice = prompt("Which do you chose Rock, Paper, or Scissors?")

switch (userChoice.toLowerCase()){
    case 
}
console.log(getComputerChoice());
console.log(typeof(userChoice));

function evaluateChoise(userChoice,getComputerChoice){
    //notes
};

