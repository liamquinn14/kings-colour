let newColor;
let answered = false
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
        answers: [ "Russia", "Rwanda", "Guinea", "Brazil"],
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
    {
        question: "WHITE",
        answers: [ "Niger", "United States", "Namibia", "China"],
        correctIndex: 3
      },
      {
        question: "WHITE",
        answers: [ "North Macedonia", "Kiribati", "Monaco", "Malta"],
        correctIndex: 0
      },
      {
        question: "WHITE",
        answers: [ "Saudi Arabia", "Chile", "Liechtenstein", "Peru"],
        correctIndex: 2
      },
      {
        question: "WHITE",
        answers: [ "Georgia", "Vietnam", "Indonesia", "Russia"],
        correctIndex: 1
      },
      {
        question: "WHITE",
        answers: [ "Rwanda", "Kenya", "Sudan", "Costa Rica"],
        correctIndex: 0
      },
      {
        question: "WHITE",
        answers: [ "Tanzania", "England", "Peru", "Poland"],
        correctIndex: 0
      },
      {
        question: "WHITE",
        answers: [ "Israel", "Panama", "Moldova", "Phillipines"],
        correctIndex: 2
      },
      {
        question: "WHITE",
        answers: [ "Switzerland", "Cyprus", "Mexico" , "Mauritania"],
        correctIndex: 3
      },
      {
        question: "WHITE",
        answers: [ "Somalia", "Argentina", "Sao Tome and Principe", "Lebanon"],
        correctIndex: 2
      },
      {
        question: "WHITE",
        answers: [ "Eritrea", "Croatia", "Niger", "Japan"],
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
    {
      question: "BLACK",
      options: ["Germany", "South Africa", "Japan", "Jamaica"],
      correctIndex: 2
    }
    
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

const backgroundColors = ["yellow","red", "blue", "green", "white", "black"]
let currentQuestionIndex = -1;

function startQuiz() {
  document.getElementById("intro-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  document.body.style.cssText = 'background-image: none'
  nextQuestion();
}

function nextQuestion() {
  answered = false
    do {
      newColor = getRandomColor();
    } while (!questions[newColor] || questions[newColor].length === 0);
  
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
  if (!currentQuestion.answers) {
    nextQuestion()
  } else {
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    answerButtons[i].textContent = currentQuestion.answers[i];
    answerButtons[i].style.backgroundColor = "black";
    answerButtons[i].style.color = "white";
    answerButtons[i].disabled = false;
    }
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

  document.querySelectorAll('.answer').addEventListener('mouseover', function () {
    this.classList.add('hovered');
  });
  
  document.getElementById('question').addEventListener('mouseout', function () {
    this.classList.remove('hovered');
  });
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
  document.querySelectorAll(".answer").forEach((button) => {
    if (button.textContent === "Italy") {
      button.textContent += " 🇮🇹"
    } else if (button.textContent === "Spain") {
      button.textContent += " 🇪🇸"
    } else if (button.textContent === "Brazil") {
      button.textContent += " 🇧🇷"
    } else if (button.textContent === "Rwanda") {
      button.textContent += " 🇷🇼"
    } else if (button.textContent === "France") {
      button.textContent += " 🇫🇷"
    } else if (button.textContent === "China") {
      button.textContent += " 🇨🇳"
    } else if (button.textContent === "Canada") {
      button.textContent += " 🇨🇦"
    } else if (button.textContent === "Singapore") {
      button.textContent += " 🇸🇬"
    } else if (button.textContent === "Ireland") {
      button.textContent += " 🇮🇪"
    } else if (button.textContent === "Finland") {
      button.textContent += " 🇫🇮"
    } else if (button.textContent === "Estonia") {
      button.textContent += " 🇪🇪"
    } else if (button.textContent === "Mali") {
      button.textContent += " 🇲🇱"
    } else if (button.textContent === "Malawi") {
      button.textContent += " 🇲🇼"
    } else if (button.textContent === "Germany") {
      button.textContent += " 🇩🇪"
    } else if (button.textContent === "Sweden") {
      button.textContent += " 🇸🇪"
    } else if (button.textContent === "Norway") {
      button.textContent += " 🇳🇴"
    } else if (button.textContent === "Japan") {
      button.textContent += " 🇯🇵"
    } else if (button.textContent === "Lesotho") {
      button.textContent += " 🇱🇸"
    } else if (button.textContent === "Botswana") {
      button.textContent += " 🇧🇼"
    } else if (button.textContent === "Ghana") {
      button.textContent += " 🇬🇭"
    } else if (button.textContent === "Niger") {
      button.textContent += " 🇳🇪"
    } else if (button.textContent === "Nigeria") {
      button.textContent += " 🇳🇬"
    } else if (button.textContent === "India") {
      button.textContent += " 🇮🇳"
    } else if (button.textContent === "Bangladesh") {
      button.textContent += " 🇧🇩"
    } else if (button.textContent === "Pakistan") {
      button.textContent += " 🇵🇰" 
    } else if (button.textContent === "Cameroon") {
      button.textContent += " 🇨🇲"
    } else if (button.textContent === "South Africa") {
      button.textContent += " 🇿🇦"
    } else if (button.textContent === "Namibia") {
      button.textContent += " 🇳🇦"
    } else if (button.textContent === "Zambia") {
      button.textContent += " 🇿🇲"
    } else if (button.textContent === "Algeria") {
      button.textContent += " 🇩🇿"
    } else if (button.textContent === "Tunisia") {
      button.textContent += " 🇹🇳"
    } else if (button.textContent === "Democratic Republic of Congo") {
      button.textContent += " 🇨🇩" 
    } else if (button.textContent === "Egypt") {
      button.textContent += " 🇪🇬"
    } else if (button.textContent === "Angola") {
      button.textContent += " 🇦🇴"
    } else if (button.textContent === "Burkina Faso") {
      button.textContent += " 🇧🇫"
    } else if (button.textContent === "Burundi") {
      button.textContent += " 🇧🇮"
    } else if (button.textContent === "Benin") {
      button.textContent += " 🇧🇯"
    } else if (button.textContent === "Central African Republic") {
      button.textContent += " 🇨🇫" 
    } else if (button.textContent === "Ivory Coast") {
      button.textContent += " 🇨🇮"
    } else if (button.textContent === "Cape Verde") {
      button.textContent += " 🇨🇻"
    } else if (button.textContent === "Djibouti") {
      button.textContent += " 🇩🇯"
    } else if (button.textContent === "Eritrea") {
      button.textContent += " 🇪🇷"
    } else if (button.textContent === "Ethiopia") {
      button.textContent += " 🇪🇹" 
    } else if (button.textContent === "Gabon") {
      button.textContent += " 🇬🇦"
    } else if (button.textContent === "Gambia") {
      button.textContent += " 🇬🇲"
    } else if (button.textContent === "Guinea") {
      button.textContent += " 🇬🇳"
    } else if (button.textContent === "Kenya") {
      button.textContent += " 🇰🇪"
    } else if (button.textContent === "Liberia") {
      button.textContent += " 🇱🇷" 
    } else if (button.textContent === "Libya") {
      button.textContent += " 🇱🇾"
    } else if (button.textContent === "Morocco") {
      button.textContent += " 🇲🇦" 
    } else if (button.textContent === "Madagascar") {
      button.textContent += " 🇲🇬"
    } else if (button.textContent === "Mauritania") {
      button.textContent += " 🇲🇷"
    } else if (button.textContent === "Mauritius") {
      button.textContent += " 🇲🇺"
    } else if (button.textContent === "Mozambique") {
      button.textContent += " 🇲🇿"
    } else if (button.textContent === "Seychelles") {
      button.textContent += " 🇸🇨"
    } else if (button.textContent === "Sudan") {
      button.textContent += " 🇸🇩"
    } else if (button.textContent === "Sierra Leone") {
      button.textContent += " 🇸🇱"
    } else if (button.textContent === "Senegal") {
      button.textContent += " 🇸🇳"
    } else if (button.textContent === "Somalia") {
      button.textContent += " 🇸🇴"
    } else if (button.textContent === "South Sudan") {
      button.textContent += " 🇸🇸"
    } else if (button.textContent === "Eswatini") {
      button.textContent += " 🇸🇿"
    } else if (button.textContent === "Chad") {
      button.textContent += " 🇹🇩"
    } else if (button.textContent === "Togo") {
      button.textContent += " 🇹🇬"
    } else if (button.textContent === "Tanzania") {
      button.textContent += " 🇹🇿"
    } else if (button.textContent === "Uganda") {
      button.textContent += " 🇺🇬"
    } else if (button.textContent === "Zimbabwe") {
      button.textContent += " 🇿🇼"
    } else if (button.textContent === "Argentina") {
      button.textContent += " 🇦🇷"
    } else if (button.textContent === "Barbados") {
      button.textContent += " 🇧🇧"
    } else if (button.textContent === "Bahamas") {
      button.textContent += " 🇧🇸"
    } else if (button.textContent === "Chile") {
      button.textContent += " 🇨🇱"  
    } else if (button.textContent === "Colombia") {
      button.textContent += " 🇨🇴"
    } else if (button.textContent === "Costa Rica") {
      button.textContent += " 🇨🇷"
    } else if (button.textContent === "Cuba") {
      button.textContent += " 🇨🇺"
    } else if (button.textContent === "Dominican Republic") {
      button.textContent += " 🇩🇴"
    } else if (button.textContent === "Ecuador") {
      button.textContent += " 🇪🇨"
    } else if (button.textContent === "Grenada") {
      button.textContent += " 🇬🇩"
    } else if (button.textContent === "Guatemala") {
      button.textContent += " 🇬🇹"
    } else if (button.textContent === "Guyana") {
      button.textContent += " 🇬🇾"
    } else if (button.textContent === "Honduras") {
      button.textContent += " 🇭🇳"
    } else if (button.textContent === "Haiti") {
      button.textContent += " 🇭🇹"
    } else if (button.textContent === "Jamaica") {
      button.textContent += " 🇯🇲"
    } else if (button.textContent === "Mexico") {
      button.textContent += " 🇲🇽"
    } else if (button.textContent === "Nicaragua") {
      button.textContent += " 🇳🇮"
    } else if (button.textContent === "Panama") {
      button.textContent += " 🇵🇦"
    } else if (button.textContent === "Peru") {
      button.textContent += " 🇵🇪"
    } else if (button.textContent === "Puerto Rico") {
      button.textContent += " 🇵🇷"
    } else if (button.textContent === "Suriname") {
      button.textContent += " 🇸🇷"
    } else if (button.textContent === "El Salvador") {
      button.textContent += " 🇸🇻"
    } else if (button.textContent === "Trinidad & Tobago") {
      button.textContent += " 🇹🇹"
    } else if (button.textContent === "United States") {
      button.textContent += " 🇺🇸"
    } else if (button.textContent === "Uruguay") {
      button.textContent += " 🇺🇾"
    } else if (button.textContent === "Venezuela") {
      button.textContent += " 🇻🇪"
    } else if (button.textContent === "United Arab Emirates") {
      button.textContent += " 🇦🇪"
    } else if (button.textContent === "Afghanistan") {
      button.textContent += " 🇦🇫"
    } else if (button.textContent === "Azerbaijan") {
      button.textContent += " 🇦🇿"
    } else if (button.textContent === "Bahrain") {
      button.textContent += " 🇧🇭"
    } else if (button.textContent === "Brunei") {
      button.textContent += " 🇧🇳"
    } else if (button.textContent === "Hong Kong") {
      button.textContent += " 🇭🇰"
    } else if (button.textContent === "Indonesia") {
      button.textContent += " 🇮🇩"
    } else if (button.textContent === "Israel") {
      button.textContent += " 🇮🇱"
    } else if (button.textContent === "Iraq") {
      button.textContent += " 🇮🇶"
    } else if (button.textContent === "Iran") {
      button.textContent += " 🇮🇷"
    } else if (button.textContent === "Jordan") {
      button.textContent += " 🇯🇴"
    } else if (button.textContent === "Kyrgyzstan") {
      button.textContent += " 🇰🇬"
    } else if (button.textContent === "Cambodia") {
      button.textContent += " 🇰🇭"
    } else if (button.textContent === "North Korea") {
      button.textContent += " 🇰🇵"
    } else if (button.textContent === "South Korea") {
      button.textContent += " 🇰🇷"
    } else if (button.textContent === "Kuwait") {
      button.textContent += " 🇰🇼"
    } else if (button.textContent === "Kazakhstan") {
      button.textContent += " 🇰🇿"
    } else if (button.textContent === "Laos") {
      button.textContent += " 🇱🇦"
    } else if (button.textContent === "Lebanon") {
      button.textContent += " 🇱🇧"
    } else if (button.textContent === "Sri Lanka") {
      button.textContent += " 🇱🇰"
    } else if (button.textContent === "Myanmar") {
      button.textContent += " 🇲🇲"
    } else if (button.textContent === "Mongolia") {
      button.textContent += " 🇲🇳"
    } else if (button.textContent === "Malaysia") {
      button.textContent += " 🇲🇾"
    } else if (button.textContent === "Nepal") {
      button.textContent += " 🇳🇵"
    } else if (button.textContent === "Oman") {
      button.textContent += " 🇴🇲"
    } else if (button.textContent === "Phillipines") {
      button.textContent += " 🇵🇭"
    } else if (button.textContent === "Qatar") {
      button.textContent += " 🇶🇦"
    } else if (button.textContent === "Russia") {
      button.textContent += " 🇷🇺"
    } else if (button.textContent === "Saudi Arabia") {
      button.textContent += " 🇸🇦"
    } else if (button.textContent === "Syria") {
      button.textContent += " 🇸🇾"
    } else if (button.textContent === "Thailand") {
      button.textContent += " 🇹🇭"
    } else if (button.textContent === "Tajikistan") {
      button.textContent += " 🇹🇯"
    } else if (button.textContent === "Turkmenistan") {
      button.textContent += " 🇹🇲"
    } else if (button.textContent === "Turkey") {
      button.textContent += " 🇹🇷"
    } else if (button.textContent === "Taiwan") {
      button.textContent += " 🇹🇼"
    } else if (button.textContent === "Uzbekistan") {
      button.textContent += " 🇺🇿"
    } else if (button.textContent === "Vietnam") {
      button.textContent += " 🇻🇳"
    } else if (button.textContent === "Yemen") {
      button.textContent += " 🇾🇪"
    } else if (button.textContent === "Andorra") {
      button.textContent += " 🇦🇩"
    } else if (button.textContent === "Albania") {
      button.textContent += " 🇦🇱"
    } else if (button.textContent === "Armenia") {
      button.textContent += " 🇦🇲"
    } else if (button.textContent === "Austria") {
      button.textContent += " 🇦🇹"
    } else if (button.textContent === "Bosnia & Herzegovina") {
      button.textContent += " 🇧🇦"
    } else if (button.textContent === "Belgium") {
      button.textContent += " 🇧🇪"
    } else if (button.textContent === "Bulgaria") {
      button.textContent += " 🇧🇬"
    } else if (button.textContent === "Belarus") {
      button.textContent += " 🇧🇾"
    } else if (button.textContent === "Switzerland") {
      button.textContent += " 🇨🇭"
    } else if (button.textContent === "Cyprus") {
      button.textContent += " 🇨🇾"
    } else if (button.textContent === "Czech Republic") {
      button.textContent += " 🇨🇿"
    } else if (button.textContent === "Denmark") {
      button.textContent += " 🇩🇰"
    } else if (button.textContent === "United Kingdom") {
      button.textContent += " 🇬🇧"
    } else if (button.textContent === "Georgia") {
      button.textContent += " 🇬🇪"
    } else if (button.textContent === "Croatia") {
      button.textContent += " 🇭🇷"
    } else if (button.textContent === "Hungary") {
      button.textContent += " 🇭🇺"
    } else if (button.textContent === "Iceland") {
      button.textContent += " 🇮🇸"
    } else if (button.textContent === "Liechtenstein") {
      button.textContent += " 🇱🇮"
    } else if (button.textContent === "Lithuania") {
      button.textContent += " 🇱🇹"
    } else if (button.textContent === "Luxembourg") {
      button.textContent += " 🇱🇺"
    } else if (button.textContent === "Latvia") {
      button.textContent += " 🇱🇻"
    } else if (button.textContent === "Monaco") {
      button.textContent += " 🇲🇨"
    } else if (button.textContent === "Moldova") {
      button.textContent += " 🇲🇩"
    } else if (button.textContent === "Montenegro") {
      button.textContent += " 🇲🇪"
    } else if (button.textContent === "North Macedonia") {
      button.textContent += " 🇲🇰"
    } else if (button.textContent === "Malta") {
      button.textContent += " 🇲🇹"
    } else if (button.textContent === "Netherlands") {
      button.textContent += " 🇳🇱"
    } else if (button.textContent === "Norway") {
      button.textContent += " 🇳🇴"
    } else if (button.textContent === "Poland") {
      button.textContent += " 🇵🇱"
    } else if (button.textContent === "Portugal") {
      button.textContent += " 🇵🇹"
    } else if (button.textContent === "Romania") {
      button.textContent += " 🇷🇴"
    } else if (button.textContent === "Serbia") {
      button.textContent += " 🇷🇸"
    } else if (button.textContent === "Slovenia") {
      button.textContent += " 🇸🇮"
    } else if (button.textContent === "Slovakia") {
      button.textContent += " 🇸🇰"
    } else if (button.textContent === "San Marino") {
      button.textContent += " 🇸🇲"
    } else if (button.textContent === "Ukraine") {
      button.textContent += " 🇺🇦"
    } else if (button.textContent === "England") {
      button.textContent += " 🏴󠁧󠁢󠁥󠁮󠁧󠁿"
    } else if (button.textContent === "Scotland") {
      button.textContent += " 🏴󠁧󠁢󠁳󠁣󠁴󠁿"
    } else if (button.textContent === "Wales") {
      button.textContent += " 🏴󠁧󠁢󠁷󠁬󠁳󠁿"
    } else if (button.textContent === "Australia") {
      button.textContent += " 🇦🇺"
    } else if (button.textContent === "New Zealand") {
      button.textContent += " 🇳🇿"
    } else if (button.textContent === "Tongo") {
      button.textContent += " 🇹🇴"
    } else if (button.textContent === "Kiribati") {
      button.textContent += " 🇰🇮"
  } else if (button.textContent === "Sao Tome and Principe") {
    button.textContent += "🇸🇹"
  }
})

  document.querySelector(".next-btn").style.display = "block";
}


document.querySelector(".next-btn").onclick = function() {
  nextQuestion();
};
