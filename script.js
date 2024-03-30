let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", function () {
  let score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  let displayScore = document.querySelector(".score");
  const background = document.querySelector("body");

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    displayMessage(`🎉 You've guessed the correct number!`);
    score++;
    displayScore.textContent = score;
    background.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      displayScore.textContent = score;
    } else {
      displayMessage(`💥 You've lost the game!`);
      displayScore.textContent = 0;
    }
  }
});
