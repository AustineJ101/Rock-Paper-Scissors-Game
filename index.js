const playButtons = document.querySelector("#play-buttons");

const rockButton = document.querySelector("#rockBtn");

const paperButton = document.querySelector("#paperBtn");

const scissorsButton = document.querySelector("#scissorsBtn");

const results = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let randomNumber = Math.floor((Math.random() * 3) + 1);
  let computerChoice =  randomNumber === 1? "Rock": 
  randomNumber === 2? "Paper": "Scissors"

  return computerChoice;

}

function getHumanChoice(event){
    let humanChoice;
    switch(event.target.id){
      case "rockBtn":
        humanChoice = "Rock";
        break;
      case "paperBtn":
        humanChoice = "Paper";
        break;
      case "scissorsBtn":
        humanChoice = "Scissors";
        break
  }
  return humanChoice;
}

function renderResult(){
    if(humanScore === 5){
        results.textContent = `You: ${humanScore} Computer: ${computerScore}
        YOU WIN!!`
        humanScore = 0;
        computerScore = 0;
    } else if(computerScore === 5){
        results.textContent = `Computer: ${computerScore} You: ${humanScore}
        COMPUTER WINS!!`
        humanScore = 0;
        computerScore = 0;
    } else{
        results.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "Rock"){

        if(computerChoice === "Scissors"){
            humanScore++;
            renderResult();
        }else if(computerChoice === "Paper"){
            computerScore++;
            renderResult();
        }else{
            results.textContent = `It's a Tie!`
        }

    }else if(humanChoice === "Paper"){

        if(computerChoice === "Rock"){
            humanScore++;
            renderResult();
        }else if(computerChoice === "Scissors"){
            computerScore++;
            renderResult();
        }else{
            results.textContent = `It's a Tie!`
        }

    }else if(humanChoice === "Scissors"){

        if(computerChoice === "Paper"){
            humanScore++;
            renderResult();
        }else if(computerChoice === "Rock"){
            computerScore++;
            renderResult();
        }else{
            results.textContent = `It's a Tie!`
        }

    }
}

playButtons.addEventListener("click", (e) =>{
    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);   
});