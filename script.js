let userName = prompt("Enter your username: ");
document.getElementById("User").textContent = `Welcome ${userName}`;
let stage = 1;
let score = 0;
const randomRange = function genRand(range) {
  return Math.floor(Math.random() * range) + 1;
}
document.getElementById("p1").textContent = `Your current stage: ${stage}`;
document.getElementById("p2").textContent = `Your current score: ${score}`;
let rangeIncrease = 2;
let result = randomRange(rangeIncrease);
let userGuess = prompt(
  `Select a number between 1 to ${rangeIncrease} for stage One: `
);
function incPar() {
  rangeIncrease++;
  stage++;
  score++;
  document.getElementById("p1").textContent = `Your current stage: ${stage}`;
  document.getElementById("p2").textContent = `Your current score: ${score}`;
}


while (true) {
  if (userGuess == result) {
    alert("You got it correctly, click ok to continue");
    incPar();
    result = randomRange(rangeIncrease);
    userGuess = prompt(
      `Select a number between 1 to ${rangeIncrease} for stage ${stage}: `
    );
  } else {
    document.getElementById("out").textContent = `Dear ${userName}, you finished at stage ${stage} with a total score of ${score} point.`
    document.getElementById("refresh").textContent = `Click here to restart the game`
    break;
  }
}