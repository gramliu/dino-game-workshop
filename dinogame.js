const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const gameOverText = document.getElementById("game-over");
const cactusAnimation = cactus.getAnimations()[0];
const scoreText = document.getElementById("score");

class DinoGame {
  constructor() {
    cactusAnimation.pause();
    this.score = 0;
    this.isGameOver = false;
    this.isGameRunning = false;
  }

  gameRunning() {
    return this.isGameRunning;
  }

  gameOver() {
    return this.isGameOver;
  }

  reset() {
    cactusAnimation.reverse();
    cactusAnimation.finish();
    cactusAnimation.reverse();
    this.score = 0;
    this.isGameOver = false;
    gameOverText.classList.add("game-over-hidden");
  }

  jump() {
    if (dino.classList != "jump") {
      dino.classList.add("jump");

      setTimeout(function () {
        dino.classList.remove("jump");
      }, 400);
    }
  }

  startGame() {
    this.isGameRunning = true;
    cactusAnimation.play();
  }

  endGame() {
    this.isGameRunning = false;
    this.isGameOver = true;
    gameOverText.classList.remove("game-over-hidden");
    cactusAnimation.pause();
  }

  #getCactusPosition() {
    return parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  }

  #getDinoJumpHeight() {
    return parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  }

  didDinoHitCactus() {
    const cactusPosition = this.#getCactusPosition();
    const dinoJumpHeight = this.#getDinoJumpHeight();
    return cactusPosition < 50 && cactusPosition > 0 && dinoJumpHeight < 140;
  }

  setScore(value) {
    this.score = value;
  }

  getScore() {
    return this.score;
  }

  updateScoreText() {
    scoreText.textContent = this.getScore();
  }
}
