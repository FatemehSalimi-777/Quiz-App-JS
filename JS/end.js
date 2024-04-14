const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const scoreElement = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelector("input");

scoreElement.innerText = score;

const saveHandler = () => {
  if (!input.value || !score) {
    alert("Invalid username or score!");
  } else {
    const finalScore = { name: input.value, score: score };
    highScores.push(finalScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.removeItem("score");
    window.location.assign("/");
  }
};

button.addEventListener("click", saveHandler);
