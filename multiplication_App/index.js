const num1 = Math.floor(Math.random() * 10 + 1);
const num2 = Math.floor(Math.random() * 10 + 1);
const question = document.querySelector("#question");
const input = document.querySelector("#input");
const form = document.querySelector("#form");
const scoreEl = document.querySelector("#score");
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreEl.innerText(`score: ${score}`);
const correctAnswer = num1 * num2;
form.addEventListener("submit", (e) => {
  const userAnswer = +input.value;
  if (userAnswer === correctAnswer) {
    score++;
    localStorage();
  } else {
    score--;
    localStorage();
  }
});
question.innerText = `What is ${num1} multiply by ${num2}`;
function localStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
