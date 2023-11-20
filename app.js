let newColor;
const questions = {
  red: [
    {
      question: "RED",
      answers: ["France", "United Kingdom", "Nigeria", "Austria"],
      correctIndex: 2
    },
    {
      question: "RED",
      answers: ["Italy", "Spain", "Romania", "Rwanda"],
      correctIndex: 3
    },
    {
        question: "RED",
        answers: ["Puerto Rico", "Poland", "Sierra Leone", "Slovenia"],
        correctIndex: 2
      },
      {
        question: "RED",
        answers: ["Somalia", "Italy", "Syria", "Poland"],
        correctIndex: 0
      },
      {
        question: "RED",
        answers: ["Hungary", "Sudan", "Sweden", "Singapore"],
        correctIndex: 2
      },
      {
        question: "RED",
        answers: ["Thailand", "Puerto Rico", "Syria", "Ukraine"],
        correctIndex: 3
      },
      {
        question: "RED",
        answers: ["Hungary", "Sudan", "Sweden", "Singapore"],
        correctIndex: 2
      },
      {
        question: "RED",
        answers: ["Sudan", "United Kingdom", "Syria", "Scotland"],
        correctIndex: 3
      },
      {
        question: "RED",
        answers: ["Wales", "Tanzania", "Uzbekistan", "China"],
        correctIndex: 1
      },
      {
        question: "RED",
        answers: ["Uruguay", "Yemen", "Syria", "United Arab Emirates"],
        correctIndex: 0
      },
      {
        question: "RED",
        answers: ["Algeria", "Armenia", "Argentina", "England"],
        correctIndex: 2
      },
      {
        question: "RED",
        answers: ["Burkina Faso", "Costa Rica", "Colombia", "Ireland"],
        correctIndex: 3
      },
      {
        question: "RED",
        answers: [ "Costa Rica", "Ivory Coast", "Thailand", "France"],
        correctIndex: 1
      },
      {
        question: "RED",
        answers: ["Bosnia & Herzegovina" , "Armenia", "Algeria", "Spain"],
        correctIndex: 0
      },
      {
        question: "RED",
        answers: ["Haiti", "Gabon", "Iceland", "Kyrgyzstan"],
        correctIndex: 1
      },
      {
        question: "RED",
        answers: ["China" , "Kazakhstan", "Luxembourg", "Lithuania"],
        correctIndex: 1
      },
      {
        question: "RED",
        answers: ["Indonesia", "Gambia", "Italy", "Lesotho"],
        correctIndex: 3
      },
      {
        question: "RED",
        answers: ["Germany", "Wales", "Bahamas", "Armenia"],
        correctIndex: 2
      },
      {
        question: "RED",
        answers: ["Bangladesh", "Chad", "Bolivia", "Brazil"],
        correctIndex: 3
      },
      {
        question: "RED",
        answers: ["Chad", "Bolivia", "Ukraine", "Germany"],
        correctIndex: 2
      },
      {
        question: "RED",
        answers: ["Trinidad & Tobago", "Nicaragua", "Montenegro", "Mexico"],
        correctIndex: 1
      },
      {
        question: "RED",
        answers: ["Tunisia", "Tonga", "Ukraine", "Germany"],
        correctIndex: 2
      },
      {
        question: "RED",
        answers: ["Mexico", "Bolivia", "England", "Pakistan"],
        correctIndex: 3
      },
      {
        question: "RED",
        answers: ["Namibia", "Niger", "Oman", "Monaco"],
        correctIndex: 1
      },
      {
        question: "RED",
        answers: ["Nepal", "France", "Sierra Leone", "Serbia"],
        correctIndex: 2
      },
      {
        question: "RED",
        answers: ["Colombia", "Niger", "United Arab Emirates", "Burkina Faso"],
        correctIndex: 1
      },
      {
        question: "RED",
        answers: ["Ireland", "Namibia", "Yemen", "Canada"],
        correctIndex: 0
      },
      {
        question: "RED",
        answers: [ "Botswana", "Ivory Coast", "South Africa", "Republic of Congo"],
        correctIndex: 1
      },
      {
        question: "RED",
        answers: [ "Singapore", "Luxembourg", "Senegal", "Djibouti"],
        correctIndex: 3
      },
  ],
  blue:
  [ 
      {
        question: "BLUE",
        answers: [ "Democratic Republic of Congo", "France", "Senegal", "Djibouti"],
        correctIndex: 2
      },
      {
        question: "BLUE",
        answers: [ "Singapore", "Ukraine", "United Kingdom", "Australia"],
        correctIndex: 0
      },  
      {
        question: "BLUE",
        answers: [ "Sweden", "France", "Cameroon", "Rwanda"],
        correctIndex: 2
      },
      {
        question: "BLUE",
        answers: [ "Italy", "Botswana", "Democratic Republic of Congo", "Brazil"],
        correctIndex: 0
      },
      {
        question: "BLUE",
        answers: [ "China", "New Zealand", "Sierra Leone", "Estonia"],
        correctIndex: 0
      },
      {
        question: "BLUE",
        answers: [ "Slovakia", "Serbia", "Bangladesh", "United States"],
        correctIndex: 2
      },
      {
        question: "BLUE",
        answers: [ "China", "New Zealand", "Sierra Leone", "Estonia"],
        correctIndex: 0
      },
      {
        question: "BLUE",
        answers: [ "Slovenia", "Scotland", "Australia", "Yemen"],
        correctIndex: 3
      },
      {
        question: "BLUE",
        answers: [ "Russia", "Japan", "Finland", "Estonia"],
        correctIndex: 1
      },
      {
        question: "BLUE",
        answers: [ "El Salvador", "Lesotho", "Liberia", "Lithuania"],
        correctIndex: 3
      },
      {
        question: "BLUE",
        answers: [ "Lebanon", "Luxembourg", "South Korea", "Israel"],
        correctIndex: 0
      },
      {
        question: "BLUE",
        answers: [ "Honduras", "Iran", "Liberia", "Greece"],
        correctIndex: 1
      },
      {
        question: "BLUE",
        answers: [ "Lebanon", "Luxembourg", "South Korea", "Israel"],
        correctIndex: 0
      },
      {
        question: "BLUE",
        answers: [ "Cape Verde", "Cuba", "Egypt", "Gambia"],
        correctIndex: 1
      },
      {
        question: "BLUE",
        answers: [ "Lebanon", "Luxembourg", "South Korea", "Israel"],
        correctIndex: 0
      },
      {
        question: "BLUE",
        answers: [ "Bulgaria", "Central African Republic", "Egypt", "Chile"],
        correctIndex: 0
      },
      {
        question: "BLUE",
        answers: [ "Chad", "Barbados", "Bosnia and Herzegovina", "Poland"],
        correctIndex: 3
      },
      {
        question: "BLUE",
        answers: [ "Hong Kong", "Jordan", "Bolivia", "Gabon"],
        correctIndex: 2
      },
      {
        question: "BLUE",
        answers: [ "Iraq", "Cape Verde", "Egypt", "Laos"],
        correctIndex: 0
      },
      {
        question: "BLUE",
        answers: [ "Belgium", "Armenia", "Andorra", "Croatia"],
        correctIndex: 0
      },
      {
        question: "BLUE",
        answers: [ "Eritrea", "Haiti", "Iceland", "Denmark"],
        correctIndex: 2
      },
],
green:
  [ 
      {
        question: "GREEN",
        answers: [ "Bangladesh", "France", "Senegal", "Ireland"],
        correctIndex: 1
      },
      {
        question: "GREEN",
        answers: [ "Singapore", "Ivory Coast", "Pakistan", "Wales"],
        correctIndex: 0
      },  
      {
        question: "GREEN",
        answers: [ "Senegal", "South Africa", "Cameroon", "Japan"],
        correctIndex: 3
      },
      {
        question: "GREEN",
        answers: [ "Russia", "Rwanda", "Equatorial Guinea", "Brazil"],
        correctIndex: 0
      },
      {
        question: "GREEN",
        answers: [ "Eritrea", "New Zealand", "Sierra Leone", "Gabon"],
        correctIndex: 1
      },
      {
        question: "GREEN",
        answers: [ "Ghana", "Serbia", "Bangladesh", "Guinea"],
        correctIndex: 1
      },
      {
        question: "GREEN",
        answers: [ "Italy", "Hungary", "Iran", "Estonia"],
        correctIndex: 3
      },
      {
        question: "GREEN",
        answers: [ "Kuwait", "Jordan", "Latvia", "Benin"],
        correctIndex: 2
      },
      {
        question: "GREEN",
        answers: [ "Bulgaria", "Afghanistan", "Burundi", "Armenia"],
        correctIndex: 3
      },
      {
        question: "GREEN",
        answers: [ "Zambia", "Wales", "Albania", "Azerbaijan"],
        correctIndex: 2
      },
      {
        question: "GREEN",
        answers: [ "Belgium", "Benin", "Comoros", "Djibouti"],
        correctIndex: 0
      },
      {
        question: "GREEN",
        answers: [ "Niger", "Nigeria", "Namibia", "Nepal"],
        correctIndex: 1
      },
      {
        question: "GREEN",
        answers: [ "Netherlands", "Pakistan", "Mozambique", "Portugal"],
        correctIndex: 0
      },
      {
        question: "GREEN",
        answers: [ "Saudi Arabia", "Sri Lanka", "Turkey", "Togo"],
        correctIndex: 2
      },
      {
        question: "GREEN",
        answers: [ "Zimbabwe", "Vietnam", "Togo", "Uzbekistan"],
        correctIndex: 1
      },
      {
        question: "GREEN",
        answers: [ "Pakistan", "Rwanda", "Sudan", "Tajikistan"],
        correctIndex: 0
      },
      {
        question: "GREEN",
        answers: [ "Tanzania", "South Africa", "Saudi Arabia", "Monaco"],
        correctIndex: 3
      },
      {
        question: "GREEN",
        answers: [ "Madagascar", "Malawi", "Moldova", "Tanzania"],
        correctIndex: 2
      },
      {
        question: "GREEN",
        answers: [ "Switzerland", "Mexico", "Ghana", "Mauritania"],
        correctIndex: 0
      },
      {
        question: "GREEN",
        answers: [ "Somalia", "Mali", "Sao Tome and Principe", "Turkmenistan"],
        correctIndex: 0
      },
      {
        question: "GREEN",
        answers: [ "Eritrea", "Croatia", "Ethiopia", "Guyana"],
        correctIndex: 1
      },
    ],
    white: [
    {
      question: "WHITE",
      answers: [ "Cyprus", "Mali", "Estonia", "Georgia"],
      correctIndex: 1
    },
    {
      question: "WHITE",
      answers: [ "England", "Croatia", "Australia", "Guyana"],
      correctIndex: 3
    },
    {
      question: "WHITE",
      answers: [ "England", "Guatemala", "Gabon", "Wales"],
      correctIndex: 2
    },
    {
      question: "WHITE",
      answers: [ "Germany", "Italy", "Australia", "Honduras"],
      correctIndex: 0
    },
  ],
  black: [
    {
      question: "BLACK",
      answers: [ "Germany", "Mali", "Estonia", "Ghana"],
      correctIndex: 1
    },
    {
      question: "BLACK",
      answers: [ "Egypt", "Belgium", "Austria", "Barbados"],
      correctIndex: 2
    },
    {
      question: "BLACK",
      answers: [ "Syria", "Botswana", "Gabon", "Kenya"],
      correctIndex: 2
    },
    {
      question: "BLACK",
      answers: [ "Luxembourg", "Lesotho", "South Korea", "Iraq"],
      correctIndex: 0
    },
    {
      question: "BLACK",
      answers: [ "Kuwait", "Kenya", "Bahamas", "North Korea"],
      correctIndex: 3
    },
    {
      question: "BLACK",
      answers: [ "Jordan", "Brunei", "Syria", "Indonesia"],
      correctIndex: 3
    },
  ],
yellow: [
  {
    question: "YELLOW",
    answers: [ "Ecuador", "Mali", "Estonia", "Ghana"],
    correctIndex: 2
  },
  {
    question: "YELLOW",
    answers: [ "Guinea", "Belgium", "Austria", "Gabon"],
    correctIndex: 2
  },
  {
    question: "YELLOW",
    answers: [ "Sudan", "Lithuania", "Ethiopia", "Republic of Congo"],
    correctIndex: 0
  },
  {
    question: "YELLOW",
    answers: [ "Sweden", "Uzbekistan", "Ukraine", "Ecuador"],
    correctIndex: 1
  },
  {
    question: "YELLOW",
    answers: [ "Zambia", "Spain", "Romania", "Rwanda"],
    correctIndex: 0
  },
  {
    question: "YELLOW",
    answers: [ "Sweden", "Senegal", "Tanzania", "Puerto Rico"],
    correctIndex: 3
  },
  {
    question: "YELLOW",
    answers: [ "Ukraine", "Uganda", "Rwanda", "Oman"],
    correctIndex: 3
  },
  {
    question: "YELLOW",
    answers: [ "Pakistan", "Mozambique", "Togo", "Venezuela"],
    correctIndex: 0
  },
  {
    question: "YELLOW",
    answers: [ "Moldova", "Togo", "Uzbekistan", "Senegal"],
    correctIndex: 2
  },
  {
    question: "YELLOW",
    answers: [ "Sudan", "Seychelles", "Andorra", "Chad"],
    correctIndex: 0
  },
]
};

const backgroundColors = ["red", "blue", "green", "white", "black", "yellow"]
 // "yellow", "gold", "white", "black", "purple", "orange"];
let currentQuestionIndex = -1;

function startQuiz() {
  document.getElementById("intro-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  nextQuestion();
}

function nextQuestion() {
  newColor = getRandomColor();

  document.getElementById('question').style.backgroundColor = newColor

  if (newColor === "black") {
    document.getElementById('question').style.color = "white"
  }

  if (newColor === "yellow") {
    document.getElementById('question').style.color = "black"
  }

  if (newColor === "white") {
    document.getElementById('question').style.color = "black"
  }

  document.body.style.backgroundColor = newColor;
  document.getElementById("question-container").style.backgroundColor = newColor;
  document.querySelector(".next-btn").style.display = "none";

  currentQuestionIndex = (currentQuestionIndex + 1) % questions[newColor].length;
  const currentQuestion = questions[newColor][currentQuestionIndex];

  document.getElementById("question").textContent = currentQuestion.question;

  const answerButtons = document.querySelectorAll(".answer");
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    answerButtons[i].textContent = currentQuestion.answers[i];
    answerButtons[i].style.backgroundColor = "black";
    answerButtons[i].style.color = "white";
    answerButtons[i].disabled = false;
  }

  if(newColor === "black")
  document.querySelectorAll(".answer").forEach((button) => {
    button.style.backgroundColor = "white"
    button.style.color = "black"
  })

  if(newColor === "white")
  document.querySelectorAll(".answer").forEach((button) => {
    button.style.backgroundColor = "black"
    button.style.color = "white"
  })
}

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  const color = backgroundColors[randomIndex];
  return color;
}

function checkAnswer(index) {
  const currentQuestion = questions[newColor][currentQuestionIndex];
  const selectedAnswer = currentQuestion.answers[index];

  if (index === currentQuestion.correctIndex) {
    document.body.style.backgroundColor = "#4CAF50";
    document.getElementById("question-container").style.backgroundColor = "#4CAF50";
    document.getElementById('question').style.backgroundColor = "#4CAF50"
  } else {
    document.body.style.backgroundColor = "#FF5733";
    document.getElementById("question-container").style.backgroundColor = "#FF5733";
    document.getElementById('question').style.backgroundColor = "#FF5733"
  }

  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;
    if (questions[newColor][currentQuestionIndex].answers.indexOf(button.textContent) === currentQuestion.correctIndex) {
      button.style.backgroundColor = "#4CAF50";
    } else {
      button.style.backgroundColor = "#FF5733";
    }
  });

  // Show the next button immediately
  document.querySelector(".next-btn").style.display = "block";
}


document.querySelector(".next-btn").onclick = function() {
  nextQuestion();
};
