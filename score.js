// Iteration 8: Making scoreboard functional
let scoreboard = document.getElementById('score-board');
scoreboard.innerText = localStorage.getItem('score');

let playAgaianBtn = document.getElementById('play-again-button');
playAgaianBtn.addEventListener('click', function () {
  window.location.href = './game.html';
});