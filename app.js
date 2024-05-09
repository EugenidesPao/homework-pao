// Initialize score variable
let score = 0; 
function checkAnswer(answer) {
  const result = document.getElementById('result');
  if (answer === 'd') {
    score++; // Increment score on correct answer
    result.textContent = "ถูกต้อง sod อยู่ชั้น16";
    result.style.color = 'green';
  } else {
    result.textContent = "Incorrect! Try again.";
    result.style.color = 'red';
  }
  updateScore(); // Update score display after each answer
}

function checkAnswer2(answer) {
  const result2 = document.getElementById('result2');
  if (answer === 'a') {
    score++; // Increment score on correct answer
    result2.textContent = "ถูกต้องนะครับ";
    result2.style.color = 'green';
  } else {
    result2.textContent = "Incorrect! Try again.";
    result2.style.color = 'red';
  }
  updateScore(); // Update score display after each answer
}

function updateScore() {
  const scoreDisplay = document.getElementById('score');
  scoreDisplay.textContent = `คะแนน: ${score}`; // Update score text
}
