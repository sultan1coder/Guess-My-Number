'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const gues = Number(document.querySelector('.guess').value);
  console.log(gues, typeof gues);

  if (!gues) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (gues === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (gues > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the game';
    }
  } else if (gues < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
