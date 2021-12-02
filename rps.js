// this keep track of the game play score
let playerWins = 0;
let computerWins = 0;
let gameTie = 0;

function game(){
// this code that input from player and return the value
let playerSelection = prompt('what is your choice: rock, paper or scissors?');
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

// this program generate random number
function computerPlay() { 
  return Math.floor(Math.random() * 3) + 1;
}
console.log(computerPlay());

// random numbers that is been generated is assigned to either RPS
let computerSelection = computerPlay();
if (computerSelection === 1){
    computerSelection = 'rock'
} else if (computerSelection === 2) {
    computerSelection = 'paper'
} else {
computerSelection = 'scissors'
}
console.log(computerSelection);

// this function is the main logic that compare player and computer choice and return the winner 
// of the game round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        gameTie++
        return 'Ooops, that was a tie'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWins++
        return 'you win!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins++
        return 'you win!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWins++
        return 'you win!'
    } else {
        computerWins++
        return 'you lose! computer wins'
    }
}
console.log(playRound(playerSelection, computerSelection));

// this return the final result of the game play
let gameResult = playRound(); 
if (playerWins > computerWins){
    return 'player wins the game';
} else if (playerWins < computerWins) {
    return  'computer wins the game';
} else {
    return 'the game ended in a draw';
} 

}

// this loop the playround 5 times
for (i = 0; i < 5; i++){
    game();
}