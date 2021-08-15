
var answerTrueScore = 0;
var answerFalseScore = 0;
var questionCount = 0;

var result = document.getElementById('result');
var restart = document.getElementById('restart');

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");

var q10a1 = document.getElementById("q10a1");
var q10a2 = document.getElementById("q10a2");

if (q1a1) {
  q1a1.addEventListener('click', answerTrue);
}

if (q1a2) {
  q1a2.addEventListener('click', answerFalse);
}

if (q2a1) {
  q2a1.addEventListener('click', answerTrue);
}

if (q2a2) {
  q2a2.addEventListener('click', answerFalse);
}

if (q3a1) {
  q3a1.addEventListener('click', answerTrue);
}

if (q3a2) {
  q3a2.addEventListener('click', answerFalse);
}

if (q4a1) {
  q4a1.addEventListener('click', answerTrue);
}

if (q4a2) {
  q4a2.addEventListener('click', answerFalse);
}

if (q5a1) {
  q5a1.addEventListener('click', answerTrue);
}

if (q5a2) {
  q5a2.addEventListener('click', answerFalse);
}

if (q6a1) {
  q6a1.addEventListener('click', answerTrue);
}

if (q6a2) {
  q6a2.addEventListener('click', answerFalse);
}

if (q7a1) {
  q7a1.addEventListener('click', answerTrue);
}

if (q7a2) {
  q7a2.addEventListener('click', answerFalse);
}

if (q8a1) {
  q8a1.addEventListener('click', answerTrue);
}

if (q8a2) {
  q8a2.addEventListener('click', answerFalse);
}

if (q9a1) {
  q9a1.addEventListener('click', answerTrue);
}

if (q9a2) {
  q9a2.addEventListener('click', answerFalse);
}

if (q10a1) {
  q10a1.addEventListener('click', answerTrue);
}

if (q10a2) {
  q10a2.addEventListener('click', answerFalse);
}

if (restart) {
  restart.addEventListener('click', restartQuiz);
}

function answerTrue() {
  answerTrue += 1;
  questionCount += 1;
  console.log("questionCount=" + questionCount + "answerTrueScore=" + answerTrueScore);
  if (questionCount == 10) {
    console.log("The quiz is done!!")
    updateResult();
  }
}

function answerFalse() {
  answerFalse += 1;
  questionCount += 1;
  console.log("questionCount=" + questionCount + "answerTrueScore=" + answerFalseScore);
  if (questionCount == 10) {
    console.log("The quiz is done!!")
    updateResult();
  }
}

function updateResult() {
  if (answerTrueScore >= 6) {
    result.innerHTML = "Nice job! Want to learn more about the palm oil industry and its impacts? Then check out our Learn more and Take action page!";

    console.log("Nice job! Want to learn more about the palm oil industry and its impacts? Then check out our Learn more and Take action page!");
  } else if (answerFalseScore >= 2) {
    result.innerHTML = " Good effort! Not everyone knows about this problem which is why we encourage you to look at our Learn more and Take action page!";
    console.log("Good effort! Not everyone knows about this problem which is why we encourage you to look at our Learn more and Take action page!");
  }
}

function restartQuiz() {
  questionCount = 0;
  answerTrueScore = 0;
  answerFalseScore = 0;

  result.innerHTML = "Your result is...";

  console.log("you restarted");
}
