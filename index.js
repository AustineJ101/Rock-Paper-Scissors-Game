const choices = document.querySelector("#choices");
let humanScore = 0;
let computerScore = 0;
let maxRounds = 5;

choices.addEventListener("click", (e) => {
    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore, computerScore);

});

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

        let roundResult = resolveRound(humanChoice,computerChoice);
        
        switch(roundResult){
            case "draw":
                console.log(`It's a Draw! You both chose ${humanChoice}`);
                break;
            case "human":
                humanScore++;
                console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
                break;
            case "computer":
                computerScore++;
                console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
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

function playGame(){
    let humanScore = 0;

    let computerScore = 0;

    let maxRounds = 5;



    

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
