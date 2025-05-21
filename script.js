const choices = document.querySelector(".player-choices");

const finalResults = document.querySelector(".final-results");

const progressResults = document.querySelector(".progress-results");

const playerPoints = document.querySelector(".player-score");

const computerPoints = document.querySelector(".computer-score");

choices.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        case "rock":
            playRound("rock");
            break;
        case "paper":
            playRound("paper");
            break;
        case "scissors":
            playRound("scissors");
            break;
    }
});

let humanScore = 0;
let computerScore = 0;

function playRound(choice){

    let playerMove = choice;
    let computerMove = generateComputerMove();

    evaluateRoundResults(playerMove, computerMove);

    if(humanScore == 5 || computerScore == 5){
        handleGameCompletion();
    }else{
        finalResults.textContent = "";
    }

}

function handleGameCompletion(){
    
    displayGameResult(humanScore, computerScore);
    humanScore = 0;
    computerScore = 0;
       
}

function displayGameResult(humanScore, computerScore){
    if(humanScore == computerScore){
        finalResults.textContent = `Game ends in a Tie. You: ${humanScore}, Computer: ${computerScore}`;
    } else if(humanScore > computerScore){
        finalResults.textContent = `Game Over! You Win: ${humanScore} - ${computerScore}`;
    }else{
        finalResults.textContent = `Game Over! Computer Wins: ${computerScore} - ${humanScore}`;
    }
}

function generateComputerMove(){

   let randomNumber =  Math.floor(Math.random() * 3) + 1; //Random number between 1 and 3
   
   let computerChoice = randomNumber == 1? "rock": 
   randomNumber == 2? "paper": "scissors";

   return computerChoice;
}

function evaluateRoundResults(playerMove, computerMove){
    if(playerMove == computerMove){
        progressResults.textContent = `It's a Tie 🙅‍♂️. Computer chose ${computerMove} as well`;
    }

    if(playerMove == "rock"){
        if(computerMove == "scissors"){
            progressResults.textContent = "Rock beats Scissors 😊";
            humanScore += 1;
        } else if(computerMove == "paper"){
            progressResults.textContent = "Paper beats Rock 🤖";
            computerScore += 1;
        }
        
    }else if (playerMove == "paper"){
        if(computerMove == "rock"){
            progressResults.textContent = "Paper beats Rock 😊";
            humanScore += 1;
        }else if(computerMove == "scissors"){
            progressResults.textContent = "Scissors beats Paper 🤖";
            computerScore += 1;
        }
    }else if (playerMove == "scissors"){
        if(computerMove == "paper"){
            progressResults.textContent = "Scissors beats Paper 😊";
            humanScore += 1;
        }else if(computerMove == "rock"){
            progressResults.textContent = "Rock beats Scissors 🤖";
            computerScore += 1;
        }
    }

    playerPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;
}


