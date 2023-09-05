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
        question: "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
        answers: [
            { text: "map()", correct: true },
            { text: "join()", correct: false },
            { text: "pop()", correct: false },
            { text: "push()", correct: false },
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
        question: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
        answers: [
            { text: "split()", correct: false },
            { text: "search()", correct: false },
            { text: "sustr()", correct: true },
            { text: "slice()", correct: false },
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
        question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        answers: [
            { text: "getIndex()", correct: false },
            { text: "indexOf()", correct: true },
            { text: "location()", correct: false },
            { text: "None of the above", correct: false },
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
        question: "Which of the following code creates an object?",
        answers: [
            { text: "var book = Object()", correct: false },
            { text: "var book = new Book()", correct: false },
            { text: "var book = new OBJECT()", correct: false },
            { text: "var book = new Object()", correct: true },
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
    },

    {
        question: "How can you get the type of arguments passed to a function?",
        answers: [
            { text: "Using typeof operator", correct: true },
            { text: "using getType function", correct: false },
            { text: "None of the above", correct: false },
            { text: "Both of the above", correct: false },
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
        if (button.dataset.correct === "true") {
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
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();