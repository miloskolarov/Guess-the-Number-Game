'use strict';

// starting state
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let highscore = 0;
let score = 20;
let guess = Number(document.querySelector('.guess').value);

// Selectors:
const message = document.querySelector('.message');
const scoreSelect = document.querySelector('.score');
const secretNumber = document.querySelector('.number');
const body = document.querySelector('body');

// Compare the input number with randomly generated number
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);

  //No input error message:

  if (!guess) {
    message.textContent = 'No number...';

    // Incorrect number:
  } else if (number > guess) {
    message.textContent = 'The number is too low!';
    score--;
    scoreSelect.textContent = score;

    if (score < 1) {
      message.textContent = 'GAME OVER';
      score = 0;
      scoreSelect.textContent = score;
    }
  } else if (number < guess) {
    message.textContent = 'The number is too high!';
    score--;
    scoreSelect.textContent = score;

    if (score < 1) {
      message.textContent = 'GAME OVER';
      score = 0;
      scoreSelect.textContent = score;
    }

    // Correct number
  } else if (number === guess) {
    message.textContent = 'You WON!';
    body.style.backgroundColor = '#60b347';
    secretNumber.style.width = '30rem';
    secretNumber.textContent = number;

    // Update the highscore

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  scoreSelect.textContent = 20;
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  secretNumber.style.width = '15rem';
  secretNumber.textContent = '?';
  let reset = document.querySelector('.guess');
  reset.value = reset.defaultValue;
  score = 20;
});
