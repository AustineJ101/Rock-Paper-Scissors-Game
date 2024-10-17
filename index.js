function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  let computerChoice = randomNumber === 1? "Rock":
  randomNumber === 2? "Paper": "Scissors";

  return computerChoice;
}

function getHumanChoice(){
  let humanChoice = prompt("To play, choose either 'Rock', 'Paper', or 'Scissors'?"  );
  return humanChoice;
}

// Ensures that the user input is case insensitive 
function validatePlayerChoice(){
  let playerChoice = getHumanChoice();
  let choiceArr = playerChoice.toLowerCase().split(''); 
  choiceArr[0] = choiceArr[0].toUpperCase(); 
  let validChoice = choiceArr.join('');
  return validChoice;
}

  let humanScore = 0;

  let computerScore = 0;
  // Game Logic which then keeps track of the scores
function playRound(humanChoice, computerChoice){
  
  if(humanChoice === "Rock"){

      if(computerChoice === "Paper"){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }else if(computerChoice === "Scissors"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++
      }else{
        console.log(`It's a tie! You choose ${humanChoice}, computer chooses ${computerChoice}`)
      }

  } else if(humanChoice === "Paper"){

        if(computerChoice === "Scissors"){
          console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
          computerScore++;
        }else if(computerChoice === "Rock"){
          console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
          humanScore++
        }else{
          console.log(`It's a tie! You choose ${humanChoice}, computer chooses ${computerChoice}`)
        }
      
  } else if(humanChoice === "Scissors"){

        if(computerChoice === "Rock"){
          console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
          computerScore++;
        }else if(computerChoice === "Paper"){
          console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
          humanScore++
        }else{
          console.log(`It's a tie! You choose ${humanChoice}, computer chooses ${computerChoice}`)
        }
      }
  
}


// Within this fuction, you can set how many rounds to play
function playGame(rounds = 2){

  for(let i = 1; i <= rounds; i++){

    let computerMove = getComputerChoice();

    let playerMove = validatePlayerChoice();

    playRound(playerMove, computerMove);

  }

  declareFinalResults(humanScore, computerScore);

}


function declareFinalResults(playerPoints, computerPoints){
  let result = playerPoints === computerPoints? "Game Over! It's a Tie" : 
  playerPoints > computerPoints? "Game Over! YOU WIN": "Game Over! COMPUTER WINS";

  console.log(result, playerPoints, computerPoints);
}


playGame();