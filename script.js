// GOTTEN A PLACEHOLDER TO SHOW RESULT
const resultBoard = document.querySelector('.result-board');
const playerResults = document.querySelector('.you');
const computerResults = document.querySelector('.computer');

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

  let computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    gameTie++;
    playerResults.textContent = `You: ${playerWins}`;
    resultBoard.textContent = `Aah, a draw. ${playerSelection} ties with ${computerSelection}`;
  } else if (
    playerSelection === "rock" &&
    computerSelection === "scissors"
  ) {
    playerWins++;
    resultBoard.textContent = `${playerWins}`;
    playerResults.textContent = `You: ${playerWins}`;
    resultBoard.textContent = "You win! rock beats scissors";
  } else if (
    playerSelection === "paper" &&
    computerSelection === "rock"
  ) {
    playerWins++;
    resultBoard.textContent = `${playerWins}`;
    playerResults.textContent = `You: ${playerWins}`;
    resultBoard.textContent = "You win! paper beats rock";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "paper"
  ) {
    playerWins++;
    resultBoard.textContent = `${playerWins}`;
    playerResults.textContent = `You: ${playerWins}`;
    resultBoard.textContent = "You win! scissors beats paper";
  } else {
    computerWins++;
    resultBoard.textContent = `${playerWins}`;
    computerResults.textContent = `Computer: ${computerWins}`;
    resultBoard.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  if(playerWins == 5) {
    resultBoard.textContent = `You won the game. ${playerSelection} beats ${computerSelection}`;
    resultBoard.style.color = "green";
    resultBoard.style.fontWeight = "900";
    removeEvent();
  } else if ( computerWins == 5) {
    resultBoard.textContent = `You lost! computer won the game. ${playerSelection} is beaten by ${computerSelection}`;
    resultBoard.style.color = "#CA0B00";
    resultBoard.style.fontWeight = "900";
    removeEvent();
}
}

function removeEvent() {
  rock.removeEventListener('click', playRound);
  paper.removeEventListener('click', playRound);
  scissors.removeEventListener('click', playRound);
}

function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
      return "rock";
    } else if (choice === 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }