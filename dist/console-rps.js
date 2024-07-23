"use strict";
// let playerWins: number = 0;
// let computerWins: number = 0;
// let gameTie: number = 0;
// function game() {
//   // taking input from player
//   const playerDecision: string | null = prompt(
//     "what is your choice?: rock, paper or scissors?"
//   );
//   const playerSelection = playerDecision?.toLowerCase() ?? "";
//   console.log(playerSelection);
//   // computer should have a say. here is the code to make that happen
//   function computerPlay(): "rock" | "paper" | "scissors" {
//     const choice: number = Math.floor(Math.random() * 3) + 1;
//     if (choice === 1) {
//       console.log(choice);
//       return "rock";
//     } else if (choice === 2) {
//       console.log(choice);
//       return "paper";
//     } else {
//       console.log(choice);
//       return "scissors";
//     }
//   }
//   const computerSelection = computerPlay();
//   console.log(computerSelection);
//   // the logic of the game that compare player and computer choice and determines who win or lose the round
//   function PlayRound(
//     player: string,
//     computer: () => "rock" | "paper" | "scissors"
//   ) {
//     if (playerSelection === computerSelection) {
//       gameTie++;
//       return "Oops, that's a draw";
//     } else if (playerSelection === "rock" && computerSelection === "scissors") {
//       playerWins++;
//       return "You win! Rock beats Scissors";
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//       playerWins++;
//       return "You win! Paper beats Rock";
//     } else if (
//       playerSelection === "scissors" &&
//       computerSelection === "paper"
//     ) {
//       playerWins++;
//       return "You win! Rock beats Scissors";
//     } else {
//       computerWins++;
//       return `You lose! ${computerSelection} beats ${playerSelection}`;
//     }
//   }
//   console.log(PlayRound(playerSelection, computerPlay));
// }
// // we want the game to play 5times. here is the code that loop the game
// for (let i = 0; i < 5; i++) {
//   console.log(game());
// }
// // after the 5round, we should have a winner. this code does that
// if (playerWins > computerWins) {
//   console.log("You won the game. Really?");
// } else if (computerWins > playerWins) {
//   console.log("You lost the game to Computer");
// } else {
//   console.log("The game ended in a tie");
// }
