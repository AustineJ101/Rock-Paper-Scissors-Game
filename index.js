const choices = document.querySelectorAll("button");
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

const rounds = document.querySelector(".rounds-played");
const human = document.querySelector(".human-score");
const computer = document.querySelector(".computer-score");
const roundUpdates = document.querySelector(".round-updates");
const finalResult = document.querySelector(".final-result");

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        let humanChoice = getHumanChoice(e);
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        if(finalResult.textContent){
            finalResult.textContent = "";
        }

        if(roundsPlayed === maxRounds){
            declareGameResult(humanScore, computerScore);
            resetGame()
        }     

    });
})


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber){
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissors"
    }

}

function getHumanChoice(event){
    const btnId = event.target.id;
    switch(btnId){
        case "1": 
            return "rock";
        case "2": 
            return "paper";
        case "3": 
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    roundsPlayed++;

    let message;
    let roundResult = resolveRound(humanChoice,computerChoice);
    
    switch(roundResult){
        case "draw":
            message = `It's a Draw! You both chose ${humanChoice}`;
            updateUserInterface(message);
            break;
        case "human":
            humanScore++;
            message = `You Win! ${humanChoice} beats ${computerChoice}`;
            updateUserInterface(message);
            break;
        case "computer":
            computerScore++;
            message = `You Lose! ${computerChoice} beats ${humanChoice}`;
            updateUserInterface(message)
    }

}

function resolveRound(human, computer){
   
        if(human === computer){
            return "draw";
        }else if((human === "rock" && computer === "scissors") ||
         (human === "paper" && computer === "rock") || 
         (human === "scissors" && computer === "paper")){
            return "human";
        }else if((human === "rock" && computer === "paper") ||
         (human === "paper" && computer === "scissors") ||
          (human === "scissors" && computer === "rock")){
            return "computer";
        } 
}

function declareGameResult(humanScore, computerScore){
        if(humanScore > computerScore){
            finalResult.textContent = `Game Over! You Win ${humanScore} - ${computerScore}.`;
        }else if(computerScore > humanScore){
            finalResult.textContent =`Game Over! Computer Wins ${computerScore} - ${humanScore}`;
        }else{
            finalResult.textContent =`Game Over! It's a ${humanScore} - ${computerScore} Draw`;
        }
}

function updateUserInterface(message){
    human.textContent = humanScore;
    computer.textContent = computerScore;
    roundUpdates.textContent = message;
    rounds.textContent = roundsPlayed;
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}