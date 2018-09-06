var quizContainer = document.querySelector("#quiz");
var submitButton = document.querySelector("#submitButton");
var results = document.querySelector("#results");
var markUp;
var questionsArray = [];
var numCorrect = 0;
var results;

var questions = [
    {
        question: "What is my name?",
        options: {
            a: "Robert",
            b: "Trenton",
            c: "Joseph"
        },
        correct: "b"
    },
    {
        question: "How old am I?",
        options: {
            a: "17",
            b: "21",
            c: "24"
        },
        correct: "c"
    },
    {
        question: "Where do I live?",
        options: {
            a: "Tooele",
            b: "Sandy",
            c: "South Jordan"
        },
        correct: "c"
    }
];

generateQuiz(questions);

function generateQuiz(questions) {

    questions.forEach(function(value, i) {
        markUp = `
    <p>${value.question}</p>
        <input type="radio" name="question${i+1}" value ="a"><span class="answer">${value.options.a}</span>
        <input type="radio" name="question${i+1}" value ="b"><span class="answer">${value.options.b}</span>
        <input type="radio" name="question${i+1}" value ="c"><span class="answer">${value.options.c}</span>
                `;
            questionsArray.push(markUp);
    });

            quizContainer.innerHTML = questionsArray.join(' ');
 
};


function gradeQuiz() {

    questions.forEach(function(value, i) {
        var selector = document.querySelector("input[name=question" + (i+1) + "]:checked").value;
        if(selector == value.correct) {
            numCorrect++;
            var answer = document.getElementsByClassName("answer");
            answer.classList.add("green");
            
        }
    });
    displayResults();
}

function displayResults(value, i) {
    questions.forEach(function() {

    });

    quizContainer.insertAdjacentHTML("afterend", `<h1>You got ${numCorrect} out of ${questions.length} correct!</h1>`);
    var selector2 = document.querySelector("span > input[name=question" + (i + 1) + "]:checked");

};











