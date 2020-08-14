//Variables
let timeLeft = 120
let score = 0;
let questions = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        choiceA: "while()",
        choiceB: "loop()",
        choiceC: "forEach()",
        correct: "choiceC"
    },
    {
        question: "Which of the following of Number object returns the number's value?",
        choiceA: "toString()",
        choiceB: "valueOf()",
        choiceC: "toLocaleString()",
        correct: "choiceB"
    },
    {
        question: "What is the answer to life, the universe and everything?",
        choiceA: "changeCase()",
        choiceB: "toLower()",
        choiceC: "42",
        correct: "choiceC"
    },
]
var scoreEl = document.getElementById('scoreEl')
var questionNum = document.getElementById('question-number')
var question = document.getElementById('question')
var choiceA = document.getElementById('A')
var choiceB = document.getElementById('B')
var choiceC = document.getElementById('C')




const startBtn = document.querySelector('#start-button');

//This function is where the timer runs

const timeLeftDisplay = document.querySelector('#time-left');

function countDown(){
    setInterval (function() {
   if(timeLeft <= 0 ) {
       clearInterval(timeLeft = 0)
   } 
   timeLeftDisplay.innerHTML = timeLeft
   timeLeft -=1
    }, 1000)

}


let lastQuestion = questions.length -1
let whatQuestion = 1;
startBtn.addEventListener('click', renderQuestion),
startBtn.addEventListener('click', countDown)
choiceA.addEventListener('click', checkAnswer)
choiceB.addEventListener('click', checkAnswer)
choiceC.addEventListener('click', checkAnswer)

function renderQuestion(){
    let q = questions[whatQuestion];

    question.innerHTML = "<h3>" + q.question + "</h3>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

function checkAnswer(answer){
    if(answer == questions[whatQuestion].correct){
        score++
    } else {
        //take 5 seconds from clock
    }
    //next question
}

//function nextQuestion(){

//}
//issues 1- connecting answers to questions.
//"   "  2- scoring
//"   "  3- looping through questions
//"   "  4- other issues you note or find.