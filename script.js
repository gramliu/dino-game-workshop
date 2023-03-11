const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const gameOverText = document.getElementById("game-over");
const cactusAnimation = cactus.getAnimations()[0];
const scoreText = document.getElementById("score");

cactusAnimation.pause();

let gameRunning = false;
let gameOver = false;
let score = 0;

function resetAnimation() {
  cactusAnimation.reverse();
  cactusAnimation.finish();
  cactusAnimation.reverse();
}

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 400);
  }
}

const isAlive = setInterval(function () {
  // get current dino Y position
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoBottom < 140) {
    // collision
    cactusAnimation.pause();
    gameOverText.classList.remove("game-over-hidden");
    gameRunning = false;
    gameOver = true;
  }

  if (gameRunning) {
    score += 10;
  }

  scoreText.textContent = score;
}, 10);

document.addEventListener("keydown", function (event) {
  if (gameRunning) {
    jump();
  } else if (gameOver) {
    gameRunning = true;
    resetAnimation();
    gameOver = false;
    score = 0;
    gameOverText.classList.add("game-over-hidden");
  } else {
    gameRunning = true;
    cactusAnimation.play();
  }
});
