// GOTTEN A PLACEHOLDER TO SHOW RESULT
// const resultBoard = document.querySelector('.result-board');
// resultBoard.textContent = "you won the game";

const rock = document.querySelector('#rock');
rock.addEventListener('click', playRound)

const paper = document.querySelector('#paper');
paper.addEventListener('click', playRound)

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playRound)

let playerWins = 0;
let computerWins = 0;
let gameTie = 0;

function playRound(e) {

  let playerSelection = e.target.id;
  console.log(playerSelection)

  let computerSelection = computerPlay();
  console.log(computerSelection);

  if (playerSelection === computerSelection) {
    gameTie++;
    console.log('Total Draw: ' + gameTie)
    console.log('player win ' + playerWins)
    console.log('computer score ' + computerWins)
    console.log("Oops, that's a draw");
  } else if (
    playerSelection === "rock" &&
    computerSelection === "scissors"
  ) {
    playerWins++;
    console.log('Total Draw: ' + gameTie)
    console.log('player score ' + playerWins)
    console.log('computer score ' + computerWins)
    console.log("You win! rock beats scissors");
  } else if (
    playerSelection === "paper" &&
    computerSelection === "rock"
  ) {
    playerWins++;
    console.log('Total Draw: ' + gameTie)
    console.log('player score ' + playerWins)
    console.log('computer score ' + computerWins)
    console.log("You win! paper beats rock");
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "paper"
  ) {
    playerWins++;
    console.log('Total Draw: ' + gameTie)
    console.log('player score ' + playerWins)
    console.log('computer score ' + computerWins)
    console.log("You win! scissors beats paper");
  } else {
    computerWins++;
    console.log('Total Draw: ' + gameTie)
    console.log('player score ' + playerWins)
    console.log('computer score ' + computerWins)
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }

  if(playerWins >= 5) {
    console.log('You won the game')
  } else if ( computerWins >= 5) {
  console.log('Computer won the game')
  }
}


function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
      console.log(choice);
      return "rock";
    } else if (choice === 2) {
      console.log(choice);
      return "paper";
    } else {
      console.log(choice);
      return "scissors";
    }
  }
