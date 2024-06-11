document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.buttons button');
  const clearButton = document.getElementById('clear-screen');

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const team = event.target.getAttribute('data-team');
      const points = parseInt(event.target.getAttribute('data-points'));
      changeScore(team, points);
    });
  })
  clearButton.addEventListener('click', () => {
    clearScores();
  });
});

function changeScore(team, points) {
  const scoreElement = document.getElementById(`${team}-score`);
  let currentScore= parseInt(scoreElement.textContent);
  currentScore += points;
  scoreElement.textContent = currentScore;
}

function clearScores() {
  document.getElementById('home-score').textContent = 0;
  document.getElementById('guest-score').textContent = 0;
}

