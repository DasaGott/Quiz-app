const quizData = [
  {
    question: "How does a FOR loop start?",
    a: "for (i = 0; i <= 5; i++) ",
    b: "for (i = 0; i <= 5)",
    c: "for (i <= 5; i++)",
    d: "for i = 1 to 5",
    correct: "a",
  },
  {
    question:
      "How do you round the number 7.25, to the nearest integer?",
    a: "Math.round(7.25)  ",
    b: "round(7.25)",
    c: "Math.rnd(7.25)",
    d: "rnd(7.25)",
    correct: "a",
  },
  {
    question:
      "How do you find the number with the highest value of x and y?",
    a: "Math.ceil(x, y) ",
    b: "Math.max(x, y)  ",
    c: "top(x, y)",
    d: "ceil(x, y)",
    correct: "b",
  },
  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    a: "if (i <> 5)",
    b: "if i <> 5",
    c: "if (i != 5)",
    d: "if i =! 5 then",
    correct: "c",
  },
  {
    question:
      "How can you detect the client's browser name?",
    a: "browser.name",
    b: "client.navName",
    c: "client.name",
    d: "navigator.appName",
    correct: "d",
  },
];

const quizEl = document.getElementById("quiz");
const questionEl =
  document.getElementById("question");
const answerEls =
  document.querySelectorAll(".answer");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn =
  document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (
      answer === quizData[currentQuiz].correct
    ) {
      score++;
    }
    currentQuiz++;
  }

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    const percentage =
      (score / quizData.length) * 100;
    quizEl.innerHTML = `<h2>Your score is this quiz is ${percentage} %</h2>
    <button onclick="location.reload()">Reload<button>`;
  }
});

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
