#Rock-Paper-Scissors Console Game

This Rock-Paper-Scissors game built with JavaScript runs entirely in the console.

After starting the game, you will be prompted to enter your choice of either `Rock`, `Paper`, or `Scissors`.
The game will then generate a random move for the computer,compare the two choices, and display the result of each round. 
After the set number of rounds, the final scores are displayed and the overall result is declared.

#How the code works

`getComputerChoice()`

Generates a random choice for the computer between "Rock", "Paper" and "Scissors" and returns it

`getHumanChoice()`

Prompts the user for a choice and returns the user input.

`validatePlayerChoice()`

Gets the user input from `getHumanChoice()` in whichever case it is and returns a consistent value that can
be strictly compared with the computer choices.

`playRound(humanChoice, computerChoice)`

Contains the game logic where: 
  - Rock beats Scissors
  - Paper beats Rock
  - Scissors beats Paper

`playGame(rounds = 2)`

Allows you to play two rounds of the game by default although you can play as many rounds as you wish by passing as different value in the function call.

`declareFinalResults(playerPoints, computerPoints)`

Declares the final results based on the outcome of each round





