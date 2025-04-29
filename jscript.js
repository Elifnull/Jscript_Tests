let playerScore = 0;
let cpuScore = 0;
let round = 0;
let playerRPS = ""; 

const playerChoice = document.querySelector("#choiceSelectionDiv");
const playerScoreValue = document.querySelector("#playerScore");
const computerScoreValue = document.querySelector("#computerScore");
const roundValue = document.querySelector("#roundValue");


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

function evaluateGame (computerChoice,playerChoice) {
    if (computerChoice == "Rock" && playerChoice == "Scissors" || 
        computerChoice == "Scissors" && playerChoice == "Paper" ||
        computerChoice == "Paper" && playerChoice == "Rock"){
            cpuScore++;
            alert(`You Lost with ${playerChoice}
                \n Computer you won with ${computerChoice}!
                \nscore:
                \nCPU - ${cpuScore}\nPlayer - ${playerScore}`);
            
        }
    else if (computerChoice == playerChoice){
      
        alert(`Game is a tie, both players chose ${computerChoice}
            \nscore:
            \nCPU - ${cpuScore}
            \nPlayer - ${playerScore}`);
    } else { 
        playerScore++;
        alert(`Congratulations player you won with ${playerChoice}!
            \nCPU Lost with ${computerChoice}
            \nscore:
            \nCPU - ${cpuScore}
            \nPlayer - ${playerScore}`);
        
    }
};

function playRound (playerChoice){
    if(round < 5){
    const computerChoice = getComputerChoice();
    evaluateGame(computerChoice,playerChoice);
    round++;
    console.log(round)
    setComputerAndPlayerAndRoundValues(playerScore,cpuScore,round);
    }
    else {
        alert(`congratulations you've played 5 rounds here are the stats
            \nPlayer - ${playerScore}
            \nCPU - ${cpuScore}`);
        setValuesToZero();
        setComputerAndPlayerAndRoundValues(playerScore,cpuScore,round);
    }
};

function setValuesToZero (){
    [cpuScore, playerScore, round] = [0, 0, 0];
};

function setComputerAndPlayerAndRoundValues (playerScore, computerScore, roundCount){
    playerScoreValue.textContent = `${playerScore}`;
    computerScoreValue.textContent =`${computerScore}`;
    roundValue.textContent = `${roundCount}`;
    
};

playerChoice.addEventListener("click", e => { 
    let selectedChoice = e.target.id;

    switch (selectedChoice) {
        case "Rock":
            playRound(selectedChoice);
            break;
        case "Paper":
            playRound(selectedChoice);
            break;
        case "Scissors":
            playRound(selectedChoice);
            break;
    }
});