let currentQuestion = 0;

const questions = [
  {
    text: "Who makes you smile without trying? 😊",
    options: ["Someone very handsome 😎", "Me 😌"]
  },
  {
    text: "Who feels like home, no matter the distance? 🏡",
    options: ["The one who loves you the most ❤️", "Me 🥰"]
  },
  {
    text: "Who do you want by your side today and always? 💍",
    options: ["Me 😌", "You already know 😏"]
  }
];

function startGame() {
  document.getElementById("screen1").classList.add("hidden");
  document.getElementById("screen2").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const buttons = document.querySelectorAll(".options button");

  questionEl.innerText = questions[currentQuestion].text;
  buttons[0].innerText = questions[currentQuestion].options[0];
  buttons[1].innerText = questions[currentQuestion].options[1];
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("screen2").classList.add("hidden");
    document.getElementById("screen3").classList.remove("hidden");
  }
}

function noClicked() {
  document.getElementById("errorMsg").classList.remove("hidden");
}

function yesClicked() {
  document.getElementById("screen3").classList.add("hidden");
  document.getElementById("screen4").classList.remove("hidden");
  document.getElementById("song").play();
  launchConfetti();
}

function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.innerText = ["🎉", "💖", "✨", "❤️"][Math.floor(Math.random() * 4)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}


