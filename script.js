const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextBtn');

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
        answer: "Carbon Dioxide"
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option');
        optionButton.addEventListener('click', checkAnswer);
        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        event.target.style.backgroundColor = 'green';
    } else {
        event.target.style.backgroundColor = 'red';
    }

    nextButton.disabled = false;
    optionsElement.removeEventListener('click', checkAnswer);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.disabled = true;
    } else {
        questionElement.textContent = "Quiz completed!";
        optionsElement.innerHTML = '';
        nextButton.style.display = 'none';
    }
}

nextButton.addEventListener('click', nextQuestion);

showQuestion();
