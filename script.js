const dinoGame = new DinoGame();

const isAlive = setInterval(function () {
  // detect collision
  if (dinoGame.didDinoHitCactus()) {
    // collision
    dinoGame.endGame();
  }

  if (dinoGame.gameRunning()) {
    dinoGame.setScore(dinoGame.getScore() + 10);
  }

  dinoGame.updateScoreText();
}, 10);

document.addEventListener("keydown", function (event) {
  if (dinoGame.gameRunning()) {
    dinoGame.jump();
  } else if (dinoGame.gameOver()) {
    dinoGame.reset();
    dinoGame.startGame();
  } else {
    dinoGame.startGame();
  }
});
