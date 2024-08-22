'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;

document.querySelector('.guess').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.querySelector('.check').click();
  }
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess >= 1 && guess <= 20) {
    if (guess === number) {
      document.querySelector('.message').textContent = 'Correct Number!';
      score++;
      document.querySelector('.score').textContent = score;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = number;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      document.querySelector('.check').disabled = true;
      document.querySelector('.check').style.backgroundColor = '#bbb';
    } else if (guess !== number) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > number ? 'Too High!' : 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  } else {
    document.querySelector('.message').textContent =
      'Enter Number Between 1 and 20';
  }
});

function again() {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
  document.querySelector('.check').style.backgroundColor = '';
}
