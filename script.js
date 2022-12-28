'use strict';

// starting state
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let highscore = 0;
let score = 20;

// Compare the input number with randomly generated number
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check clicked');
  let guess = Number(document.querySelector('.guess').value);
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
      document.querySelector('.highscore').textContent = score;
    }
  } else if (number !== guess && score < 1) {
    console.log('You die'); /*Does not work, return later */
  }
});

//Play again functionality:
/* Add event listener to "Again button"
       Write a function that resets: score, background color ('#222'),
       number field width(15rem), number text content("?") number(call random generator),
       message("Start guessing")  and guess value("");    
     */
