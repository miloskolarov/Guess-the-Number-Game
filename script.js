'use strict';

// starting state
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let highscore = 0;
let score = 20;
let guess = Number(document.querySelector('.guess').value);

// Compare the input number with randomly generated number
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check clicked');
  guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number...';
  } else if (number > guess) {
    document.querySelector('.message').textContent = 'The number is too low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (number < guess) {
    document.querySelector('.message').textContent = 'The number is too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (number === guess) {
    document.querySelector('.message').textContent = 'You WON!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (number !== guess && score < 1) {
    console.log('You die'); /*Does not work, return later */
  }
});

document.querySelector('.again').addEventListener('click', function () {
  /* bugg- Highscore gets updated with any score */
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  let reset = document.querySelector('.guess');
  reset.value = reset.defaultValue;
  score = 20;
});
