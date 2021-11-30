// console.log ("sup");

var startBtn = document.querySelector(".start-btn");
var correctAnswer;
var timer;
var time = 75;


var questionsArray = [
    {
        question: "How do you make final changes to your local git repository?",
        a: "git add",
        b: "git commit",
        c: "git pull",
        d: "git push",
        correctAnswer: "d"
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Main Language",
        b: "Hyper Text Markup Language",
        c: "Hip Tools Making Language",
        d: "Hot Terminal Machine Language",
        correctAnswer: "b",
    },
    {
        question: "How many ways are there to style a page?",
        a: "endless",
        b: "1",
        c: "5",
        d: "10 or more",
        correctAnswer: "a",
    },
    {
        question: "What does DOM stand for?",
        a: "Demanding Obects More",
        b: "Document Object Model",
        c: "Document Orgin Master",
        d: "Docment Oringal Main",
        correctAnswer: "b",
    },
];


function startGame() {
    startTimer()
    var quizContent = document.querySelector(".quiz-content");
    quizContent.classList.add("hidden");
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