'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const gues = Number(document.querySelector('.guess').value);
  console.log(gues, typeof gues);

  if (!gues) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
});
