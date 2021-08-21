let timer = 60;
let score = 0;
let currentQuestion = 0;
let answerChosen = 0;
let questionEl = document.getElementById("question");
let answersEl = document.getElementById("answerContainer");
let answer1El = document.getElementById("answer1");
let answer2El = document.getElementById("answer2");
let answer3El = document.getElementById("answer3");
let answer4El = document.getElementById("answer4");

document.getElementById("question").style.display = "none"
document.getElementById("answer1").style.display = "none"
document.getElementById("answer2").style.display = "none"
document.getElementById("answer3").style.display = "none"
document.getElementById("answer4").style.display = "none"

let questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      correctAnswer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      correctAnswer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      correctAnswer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      correctAnswer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      correctAnswer: "console.log"
    },
    {
        title: "",
        choices: "",
    }
  ];

function startGame(){
    document.getElementById("timer").innerHTML = "Timer: " + timer;
    timer -= 1;
    let hiddenTimer = setInterval(function(){
        document.getElementById("timer").innerHTML = "Timer: " + timer; 
        timer -= 1; 
        if (timer < -1){
            clearInterval(hiddenTimer);
            gameOver();
        }
    }, 1000)
    document.getElementById("startBtn").style.display = "none";
    showQuestion(currentQuestion);
}

function showQuestion(q){

    document.getElementById("question").style.display = "flex"
    document.getElementById("answer1").style.display = "inline-block"
    document.getElementById("answer2").style.display = "inline-block"
    document.getElementById("answer3").style.display = "inline-block"
    document.getElementById("answer4").style.display = "inline-block"

    document.getElementById("answer1").style.padding = "5px";
    document.getElementById("answer2").style.padding = "5px";
    document.getElementById("answer3").style.padding = "5px";
    document.getElementById("answer4").style.padding = "5px";

    questionEl.innerText = questions[q].title;
    answer1El.innerText = questions[q].choices[0];
    answer2El.innerText = questions[q].choices[1];
    answer3El.innerText = questions[q].choices[2];
    answer4El.innerText = questions[q].choices[3];
}

answer1El.addEventListener("click", function(event){
    event.stopPropagation;
    answerChosen = 1;
    checkAnswer();
})
answer2El.addEventListener("click", function(event){
    event.stopPropagation;
    answerChosen = 2;
    checkAnswer();
})
answer3El.addEventListener("click", function(event){
    event.stopPropagation;
    answerChosen = 3;
    checkAnswer();
})
answer4El.addEventListener("click", function(event){
    event.stopPropagation;
    answerChosen = 4;
    checkAnswer();
})

function checkAnswer(){
    if ((currentQuestion === 0 && answerChosen !== 3)||
        (currentQuestion === 1 && answerChosen !== 3)||
        (currentQuestion === 2 && answerChosen !== 4)||
        (currentQuestion === 3 && answerChosen !== 3)||
        (currentQuestion === 4 && answerChosen !== 4)) {
        timer -= 5;
        currentQuestion += 1;
        showQuestion(currentQuestion);
        checkEndGame();
    } else {
        score += 1;
        localStorage.setItem("score", score)
        currentQuestion += 1;
        showQuestion(currentQuestion);
        checkEndGame();
    }
}

function checkEndGame(){
    if (currentQuestion >= 5){
        window.location.href = "https://griveroll86.github.io/quiz/highscores.html";
    } 
}

function gameOver() {
    alert("You ran out of time.")
    window.location.href = "https://griveroll86.github.io/quiz/highscores.html";
}

document.getElementById("startBtn").addEventListener("click", startGame);