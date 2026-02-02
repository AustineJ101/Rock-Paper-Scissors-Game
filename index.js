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

function getHumanChoice(){
    return prompt("How would you like to play? Rock, Paper or Scissors?", "");
}


function playGame(){
    let humanScore = 0;

    let computerScore = 0;

    let maxRounds = 5;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice == "rock"){
            if(computerChoice == "scissors"){
                console.log("You Win! Rock beats Scissors");
                humanScore++;
            }else if(computerChoice == "paper"){
                console.log("You Lose! Paper beats Rock");
                computerScore++;
            }else{
                console.log("It's a Draw! You both chose Rock")
            }
        }else if(humanChoice == "paper"){
            if(computerChoice == "rock"){
                console.log("You Win! Paper beats Rock");
                humanScore++;
            }else if(computerChoice == "scissors"){
                console.log("You Lose! Scissors beats Paper");
                computerScore++;
            }else{
                console.log("It's a Draw! You both chose Paper")
            }
        }else if(humanChoice == "scissors"){
            if(computerChoice == "paper"){
                console.log("You Win! Scissors beats Paper");
                humanScore++;
            }else if(computerChoice == "rock"){
                console.log("You Lose! Rock beats Scissors");
                computerScore++;
            }else{
                console.log("It's a Draw! You both chose Scissors")
            }
        }
    
    }

    function declareGameResult(){
        if(humanScore > computerScore){
        console.log(`Game Over! You Win ${humanScore} - ${computerScore}.`);
        }else if(computerScore > humanScore){
            console.log(`Game Over! Computer Wins ${computerScore} - ${humanScore}`);
        }else{
            console.log(`Game Over! It's a ${humanScore} - ${computerScore} Draw`);
        }
    }


    for(let i = 1; i <= maxRounds; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }

    declareGameResult()
    
}

playGame();