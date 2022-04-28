const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER = 'PLAYER_WON';
const RESULT_COMPUTER = 'COMPUTER_WON';

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }

  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function (comChoice, plyChoice) {
  if (comChoice === plyChoice) {
    return RESULT_DRAW;
  } else if (
    (comChoice === ROCK && plyChoice === PAPER) ||
    (comChoice === PAPER && plyChoice === SCISSORS) ||
    (comChoice === SCISSORS && plyChoice === ROCK)
  ) {
    return RESULT_PLAYER;
  } else {
    return RESULT_COMPUTER;
  }
};

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log('Game is starting ...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  const winner = getWinner(computerChoice, playerChoice);
  console.log(
    `Player chose: ${playerChoice} & Computer chose: ${computerChoice}\nThe result is: ${winner}`
  );
});
