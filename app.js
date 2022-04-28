const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER = 'PLAYER_WON';
const RESULT_COMPUTER = 'COMPUTER_WON';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (comChoice, plyChoice = DEFAULT_USER_CHOICE) =>
  comChoice === plyChoice
    ? RESULT_DRAW
    : (comChoice === ROCK && plyChoice === PAPER) ||
      (comChoice === PAPER && plyChoice === SCISSORS) ||
      (comChoice === SCISSORS && plyChoice === ROCK)
    ? RESULT_PLAYER
    : RESULT_COMPUTER;

startGameBtn.addEventListener('click',() => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log('Game is starting ...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice)
  }

  alert(
    `Player chose: ${playerChoice || DEFAULT_USER_CHOICE} & Computer chose: ${computerChoice}\nThe result is: ${winner}`
  );
});
