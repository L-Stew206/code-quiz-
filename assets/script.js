// console.log ("sup");
var quizContent = document.querySelector(".quiz-content");
var gameContent = document.querySelector(".game");
var startBtn = document.querySelector(".start-btn");
var correctAnswer;
var timer;
var time = 75;
var answer; 
var gameContent;

var questionIndex = 0;
var questionsArray = [
    {
        question: "How do you make final changes to your local git repository?",
        answers: ["git add", "git commit", "git pull", "git push"],
        correctAnswer: "d"
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Main Language", "Hyper Text Markup Language", "Hip Tools Making Language", "Hot Terminal Machine Language"],
        correctAnswer: "b",
    },
    {
        question: "How many ways are there to style a page?",
        answers: ["endless", "1", "5", "10 or more"],
        correctAnswer: "a",
    },
    {
        question: "What does DOM stand for?",
        answers: ["Demanding Obects More", "Document Object Model", "Document Orgin Master", "Docment Oringal Main"],
        correctAnswer: "b",
    },
];
       
        
      
       


function startGame() {
    startTimer()
  
    quizContent.classList.add("hidden");
    gameContent.classList.remove("hidden");
    displayQuestions ();
}
function displayQuestion() {
    gameContent.textContent =
}

function startTimer() {
    timer = setInterval(function () {
        time--;
        var timeEl = document.querySelector(".timer");
        timeEl.textContent = "Time: " + time;
        if (time <= 0) {
            gameOver()
        }
    }, 1000);




}
function gameOver() {
    clearInterval(timer)
}
startBtn.addEventListener("click", startGame);