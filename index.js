/*
GAME RULES
    * Rock beats Scissors
    * Scissors beats Paper
    * Paper beats Rock
    * Similar choices result in a draw

PSEUDOCODE
    1. Prompt the player to pick a move between Rock, Paper and Scissors and store the result in a variable called playerMove.

    2. Generate a move by the computer and store the result in a variable called computerMove.

    3. Check the playerMove against the computerMove and display the game result in the console as per the game rules.
            IF playerMove equals Rock
                IF computerMove equals Scissors
                    display "You Win" in the console.
                ELSE IF computerMove  equals Paper
                    display "Computer Wins" in the console
                ELSE 
                    display "It's a Tie" in the console
            IF playerMove equals Paper
                IF computerMove equals Rock
                    display "You Win" in the console.
                ELSE IF computerMove equals Scissors
                    display "Computer Wins" in the console
                ELSE 
                    display "It's a Tie" in the console
            IF playerMove equals Scissors
                IF computerMove equals Paper
                    display "You Win" in the console.
                ELSE IF computerMove equals Rock
                    display "Computer Wins" in the console.
                ELSE 
                    display "It's a Tie" in the console
            

*/
   
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


    for(let i = 1; i <= maxRounds; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }

    if(humanScore > computerScore){
        console.log(`Game Over! You Win ${humanScore} - ${computerScore}.`);
    }else if(computerScore > humanScore){
        console.log(`Game Over! Computer Wins ${computerScore} - ${humanScore}`);
    }else{
        console.log(`Game Over! It's a ${humanScore} - ${computerScore} Draw`);
    }

}

playGame();