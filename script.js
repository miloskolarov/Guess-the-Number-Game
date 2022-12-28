'use strict';

// starting state
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let highscore = 0;
let score = 20;

// Write check function
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check clicked');
});
//Add event listener to check
//Add function on event ("click")

//function:
/*   let guess= get the value from the input field and convert it to number 
     if there is no number print message "No number"
     if the number is too low print the message "Number is too low" and decrament the score
     if the number is too high print the message "Number is too high" and decrament the  score
     if the guess equals the number print the message "You won the game"
        change background color of body element to green ('#60b347')
        change the width of ".number" class to '30rem'
        set ".number" text content to randomly ganerated number
        if the score is higher than previous higscore, make current score the higscore 
     if score = 0, print "Game Over" */

//Play again functionality:
/* Add event listener to "Again button"
       Write a function that resets: score, background color ('#222'),
       number field width(15rem), number text content("?") number(call random generator),
       message("Start guessing")  and guess value("");    
     */
