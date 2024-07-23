const resultBoard: Element | null = document.querySelector(".result-board");

const playerResults: Element | null = document.querySelector(".you");
const computerResults: Element | null = document.querySelector(".computer");

const retryBtn: Element | null = document.querySelector(".retry-btn");

const rockBtn = document.querySelector("#rock") as HTMLElement | null;
rockBtn?.addEventListener("click", playRound);

const paperBtn = document.querySelector("#paper") as HTMLElement | null;
paperBtn?.addEventListener("click", playRound);

const scissorsBtn = document.querySelector("#scissors") as HTMLElement | null;
scissorsBtn?.addEventListener("click", playRound);

retryBtn?.addEventListener("click", () => location.reload());

let playerWins: number = 0;
let computerWins: number = 0;
let gameTie: number = 0;

function playRound(e: MouseEvent): void {
  if (e.currentTarget instanceof HTMLHRElement) {
    let playerSelection = e.currentTarget.id;

    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
      gameTie++;
      playerResults!.textContent = `You: ${playerWins}`;
      resultBoard!.textContent = `Aah, a draw. ${playerSelection} ties with ${computerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerWins++;
      // resultBoard.textContent = `${playerWins}`;
      playerResults!.textContent = `You: ${playerWins}`;
      resultBoard!.textContent = "You win! rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerWins++;
      // resultBoard.textContent = `${playerWins}`;
      playerResults!.textContent = `You: ${playerWins}`;
      resultBoard!.textContent = "You win! paper beats rock";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerWins++;
      // resultBoard.textContent = `${playerWins}`;
      playerResults!.textContent = `You: ${playerWins}`;
      resultBoard!.textContent = "You win! scissors beats paper";
    } else {
      computerWins++;
      // resultBoard.textContent = `${playerWins}`;
      computerResults!.textContent = `Computer: ${computerWins}`;
      resultBoard!.textContent = `You lose! ${playerSelection} is beaten by ${computerSelection}`;
    }

    if (playerWins == 5) {
      resultBoard!.textContent = `You won the game. ${playerSelection} beats ${computerSelection}`;
      resultBoard!.setAttribute("style", "color: green; font-weight: 900");
      retryButton();
      removeEvent();
    } else if (computerWins == 5) {
      resultBoard!.textContent = `You lost! computer won the game. ${playerSelection} is beaten by ${computerSelection}`;
      resultBoard!.setAttribute("style", "color: #CA0B00; font-weight: 900");
      retryButton();
      removeEvent();
    }
  }
}

function retryButton(): void {
  const button = document.createElement("button");
  button.setAttribute(
    "style",
    "background-color: #c2c2aa; color: #ffffff; width: 120px; height: 40px; border: none; border-radius: 8px; font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 900; margin-bottom: 20px; cursor: pointer; transition-delay: 2s"
  );
  button.textContent = "Try Again";
  retryBtn!.appendChild(button);
}

function removeEvent(): void {
  rockBtn?.removeEventListener("click", playRound);
  paperBtn?.removeEventListener("click", playRound);
  scissorsBtn?.removeEventListener("click", playRound);
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
