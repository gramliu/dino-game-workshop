const dinoGame = new DinoGame();

function loop() {
  // detect collision
  if (dinoGame.didDinoHitCactus()) {
    // collision
    dinoGame.endGame();
  }

  if (dinoGame.gameRunning()) {
    dinoGame.setScore(dinoGame.getScore() + 10);
  }
}

function keypressHandler() {
  if (dinoGame.gameRunning()) {
    dinoGame.jump();
  } else if (dinoGame.gameOver()) {
    dinoGame.reset();
    dinoGame.startGame();
  } else {
    dinoGame.startGame();
  }
}

setInterval(loop, 10);
document.addEventListener("keydown", keypressHandler);
