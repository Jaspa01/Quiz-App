//QUESTIONS AND ANSWERS
const questions = [

    {
        question: "Which of the following had no written language?",
        answers: [
            { text: "Aztec", correct: false },
            { text: "Incan", correct: true },
            { text: "Egyptian", correct: false },
            { text: "Roman", correct: false },
        ]
    },

    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false },
            { text: "Bhutan", correct: false },
        ]
    },

    {
        question: "Until 1923, what was the Turkish city of Istanbul called?",
        answers: [
            { text: "Sun City", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Constantinople", correct: true },
        ]
    },

    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Ottawa", correct: true },
            { text: "Denver", correct: false },
            { text: "Ibiza", correct: false },
            { text: "Berlin", correct: false },
        ]
    },

    {
        question: "Name the longest river in the world",
        answers: [
            { text: "Niger", correct: false },
            { text: "Nile", correct: true },
            { text: "Mississipi", correct: false },
            { text: "Congo", correct: false },
        ]
    },

    {
        question: "Which artist painted the ceiling of the Sistine Chapel in Rome",
        answers: [
            { text: "Michelangelo", correct: true },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Giotto", correct: false },
            { text: "Donatello", correct: false },
        ]
    },

    {
        question: "Name the best selling book of the 21st century?",
        answers: [
            { text: "Gone Girl, Gillian Flynn", correct: false },
            { text: "Wolf Hall, Hilary Mantel", correct: false },
            { text: "Harry Potter, J. K. Rowling", correct: true },
            { text: "House of Dragon, George, R. R. Martin", correct: false },
        ]
    }
];

const questionEl = document.querySelector("#question");
const header = document.querySelector(".header");
const answerButton = document.querySelector("#answer-btns");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    header.innerHTML = "Simple Test";
    showQuestion();
}

function showQuestion() {
    reset();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}

function reset() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore() {
    reset();
    questionEl.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    header.innerHTML = "Your Score";
    
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();