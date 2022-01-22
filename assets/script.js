// varibles
var quizContent = document.querySelector(".quiz-content");
var gameContent = document.querySelector(".game");
var buttonEl = document.querySelector(".start-btn");
var answerContent = document.querySelector(".answers");
var timeEl = document.querySelector(".timer");
var finalScoreEl = document.querySelector("#usersScore");
var finalUserScoreEl = document.querySelector("#finalScore");
var scoreEl = document.querySelector ("#scores");
var submitScore = document.querySelector("#submit");
var correctAnswer;
var time = 75;
var answer;
var finalScore = 0;
var currentScore =0;
var scoreContent = document.querySelector(".high-scores");
var solved = document.querySelector (".solved");
var gameOverContent = document.querySelector("#usersScore");
var initialsInput = document.querySelector("#initialsInput");
var viewHighscores = document.querySelector("#viewHighScores");

var questionIndex = 0;
var questionsArray = [
    {
        question: "How do you make final changes to your local git repository?",
        answers: ["git add", "git commit", "git pull", "git push"],
        correctAnswer: "git push"
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Main Language", "Hyper Text Markup Language", "Hip Tools Making Language", "Hot Terminal Machine Language"],
        correctAnswer: "Hyper Text Markup Language",
    },
    {
        question: "How many ways are there to style a page?",
        answers: ["endless", "1", "5", "10 or more"],
        correctAnswer: "endless",
    },
    {
        question: "What does DOM stand for?",
        answers: ["Demanding Obects More", "Document Object Model", "Document Orgin Master", "Docment Oringal Main"],
        correctAnswer: "Document Object Model",
    },
];

function startGame() {
    startTimer()

    quizContent.classList.add("hidden");
    gameContent.classList.remove("hidden");
    displayQuestions();
}

// questions are prompted with answer box options 

function displayQuestions() {
    answerContent.classList.remove("hidden");
    gameContent.textContent = questionsArray[questionIndex].question;
    answerContent.innerHTML = '';
    questionsArray[questionIndex].answers.forEach(function (answers) {
        var answersBtns = document.createElement('button');
        answersBtns.setAttribute('class', 'answerBtn');
        answersBtns.setAttribute('value', answers);
        answersBtns.textContent = answers;
        answersBtns.onclick = userClick;
        answerContent.append(answersBtns);
    })
}
// gives points to score if questioned answered correctly, takes seconds away from timer if incorrect

function userClick() {
    console.log(this.value)
    if (this.value === questionsArray[questionIndex].correctAnswer) {
        currentScore =currentScore + 2;
      
    }
    else {
        time -= 5;
        timeEl.textContent = time + "s remaining";
    }
    questionIndex++;
    if (questionIndex === questionsArray.length) {
        gameOver();
    }
    else {
        displayQuestions()
    }
}
// this is the timer counting down

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
// game is over, clears page

function gameOver() {
    clearInterval(timer)
    finalScore = time
    answerContent.classList.add("hidden")
    gameContent.classList.add("hidden")
    gameOverContent.classList.remove("hidden")


    // finalScore = currentScore + timeLeft;
    finalUserScoreEl.innerHTML = finalScore;
 }
//    score is stored with inititials 

function scoreRecord () {
    var initialsEl = document.querySelector("#initials").value;
    var highScores = JSON.parse(localStorage.getItem('localScores')) || [];
    var newScore = {
        initials: initialsEl,
        score: finalScore
    }
    highScores.push(newScore);
    localStorage.setItem('localScores', JSON.stringify(highScores))
    topScores()
}
var olEl = document.querySelector("#score-list")
var scoreListEl = document.querySelector("#scores")

// stores scores in local storage 

function topScores() {
    //console.log ("topscores");
    finalScoreEl.classList.add("hidden")
    scoreListEl.classList.remove("hidden")
    quizContent.classList.add("hidden")
    var highScores = JSON.parse(localStorage.getItem('localScores')) || [];
    console.log(highScores)
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    olEl.innerHTML=""
    highScores.forEach(function (score) {
console.log(score.initials)
        //create our element
        var liEl = document.createElement('li');
        //add the text content to the element
        liEl.setAttribute('value',score);
        liEl.textContent = score.initials + ' - ' + score.score;
        //append the element to the ol
         olEl.append(liEl);
    })
}

function recordHighScores( event ) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value 
    console.log( initials )
}

buttonEl.addEventListener("click", startGame);
submitScore.addEventListener("click", scoreRecord);
clearHighScores.addEventListener("click", function (){
    localStorage.removeItem("localScores")
    olEl.innerHTML=""
} )
viewHighscores.addEventListener("click", topScores);
document.querySelector('#restart').addEventListener('click', function(){
    window.location.reload()
})




    