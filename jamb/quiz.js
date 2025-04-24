// Quiz questions data
const questions = [
    {
        question: "What is the value of 5 + 7 × 3?",
        options: ["26", "36", "22", "21"],
        correctAnswer: 0,
        explanation: "According to the order of operations (PEMDAS/BODMAS), multiplication comes before addition. So first calculate 7 × 3 = 21, then add 5 to get 26."
    },
    {
        question: "If x² = 16, what are the possible values of x?",
        options: ["4", "-4", "8", "Both 4 and -4"],
        correctAnswer: 3,
        explanation: "Both 4 × 4 = 16 and (-4) × (-4) = 16. So the equation x² = 16 has two solutions: x = 4 and x = -4."
    },
    {
        question: "What is the area of a circle with radius 5 units? (Use π = 3.14)",
        options: ["31.4", "78.5", "15.7", "62.8"],
        correctAnswer: 1,
        explanation: "The area of a circle is calculated using the formula A = πr². So A = 3.14 × 5 × 5 = 78.5 square units."
    },
    {
        question: "Simplify: 3(x + 4) - 2(x - 1)",
        options: ["x + 14", "5x + 10", "x + 10", "5x + 14"],
        correctAnswer: 0,
        explanation: "First distribute: 3x + 12 - 2x + 2. Then combine like terms: (3x - 2x) + (12 + 2) = x + 14."
    },
    {
        question: "What is the slope of the line y = -2x + 5?",
        options: ["-2", "2", "5", "-5"],
        correctAnswer: 0,
        explanation: "In the slope-intercept form y = mx + b, m represents the slope. So in y = -2x + 5, the slope is -2."
    },
    {
        question: "Solve for x: 2x - 5 = 15",
        options: ["5", "10", "7.5", "20"],
        correctAnswer: 1,
        explanation: "Add 5 to both sides: 2x = 20. Then divide both sides by 2: x = 10."
    },
    {
        question: "What is 25% of 80?",
        options: ["20", "25", "40", "60"],
        correctAnswer: 0,
        explanation: "25% means 25/100 or 0.25. Multiply 0.25 × 80 = 20."
    },
    {
        question: "Factor completely: x² - 9",
        options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "Cannot be factored"],
        correctAnswer: 2,
        explanation: "This is a difference of squares, which factors as (x - a)(x + a) where a² = 9. So x² - 9 = (x - 3)(x + 3)."
    },
    {
        question: "What is the value of 3! (3 factorial)?",
        options: ["3", "6", "9", "27"],
        correctAnswer: 1,
        explanation: "Factorial means multiplying all positive integers from 1 to that number. So 3! = 3 × 2 × 1 = 6."
    },
    {
        question: "If a triangle has angles measuring 45° and 45°, what is the measure of the third angle?",
        options: ["45°", "60°", "90°", "180°"],
        correctAnswer: 2,
        explanation: "The sum of angles in a triangle is always 180°. So 180° - 45° - 45° = 90°."
    },
    {
        question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        options: ["20", "24", "32", "64"],
        correctAnswer: 2,
        explanation: "This is a geometric sequence where each term is multiplied by 2. 16 × 2 = 32."
    },
    {
        question: "Convert 0.75 to a fraction in simplest form.",
        options: ["3/4", "75/100", "1/4", "7/5"],
        correctAnswer: 0,
        explanation: "0.75 = 75/100 which simplifies to 3/4 by dividing numerator and denominator by 25."
    },
    {
        question: "What is the square root of 144?",
        options: ["11", "12", "13", "14"],
        correctAnswer: 1,
        explanation: "12 × 12 = 144, so √144 = 12."
    },
    {
        question: "Solve for y: 3y + 7 = 2y - 5",
        options: ["-12", "12", "2", "-2"],
        correctAnswer: 0,
        explanation: "Subtract 2y from both sides: y + 7 = -5. Then subtract 7: y = -12."
    },
    {
        question: "What is the perimeter of a square with side length 5 cm?",
        options: ["10 cm", "15 cm", "20 cm", "25 cm"],
        correctAnswer: 2,
        explanation: "Perimeter of a square is 4 × side length. So 4 × 5 cm = 20 cm."
    },
    {
        question: "Evaluate: 2³ + 3²",
        options: ["13", "17", "25", "35"],
        correctAnswer: 1,
        explanation: "2³ = 8 and 3² = 9. So 8 + 9 = 17."
    },
    {
        question: "What is the mean of these numbers: 5, 7, 9, 11?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
        explanation: "Mean = (5 + 7 + 9 + 11) ÷ 4 = 32 ÷ 4 = 8."
    },
    {
        question: "If 5 apples cost $2.50, how much would 8 apples cost?",
        options: ["$3.50", "$4.00", "$4.50", "$5.00"],
        correctAnswer: 1,
        explanation: "First find unit price: $2.50 ÷ 5 = $0.50 per apple. Then 8 × $0.50 = $4.00."
    },
    {
        question: "What is the value of π (pi) rounded to two decimal places?",
        options: ["3.14", "3.16", "3.41", "3.00"],
        correctAnswer: 0,
        explanation: "The value of π is approximately 3.14159..., which rounds to 3.14 to two decimal places."
    },
    {
        question: "What is the greatest common factor (GCF) of 12 and 18?",
        options: ["2", "3", "6", "9"],
        correctAnswer: 2,
        explanation: "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The greatest common factor is 6."
    }
];

// DOM elements
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const currentQuestionEl = document.getElementById('current-question');
const scoreEl = document.getElementById('score');
const finalScoreEl = document.getElementById('final-score');
const explanationEl = document.getElementById('explanation');
const explanationText = document.getElementById('explanation-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const quizEl = document.getElementById('quiz');
const resultsEl = document.getElementById('results');

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = Array(questions.length).fill(null);

// Initialize the quiz
function initQuiz() {
    showQuestion();
    updateButtons();
}

// Display the current question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    
    // Clear previous options
    answerOptions.innerHTML = '';
    
    // Create new options
    question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('answer-option');
        optionEl.textContent = option;
        
        // Highlight if this was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            optionEl.classList.add('selected');
        }
        
        // Highlight correct/incorrect if answer was submitted
        if (userAnswers[currentQuestionIndex] !== null) {
            if (index === question.correctAnswer) {
                optionEl.classList.add('correct');
            } else if (index === userAnswers[currentQuestionIndex] && index !== question.correctAnswer) {
                optionEl.classList.add('incorrect');
            }
        }
        
        optionEl.addEventListener('click', () => selectAnswer(index));
        answerOptions.appendChild(optionEl);
    });
    
    // Show explanation if answer was submitted
    if (userAnswers[currentQuestionIndex] !== null) {
        explanationText.textContent = question.explanation;
        explanationEl.classList.add('show');
    } else {
        explanationEl.classList.remove('show');
    }
    
    updateButtons();
}

// Handle answer selection
function selectAnswer(index) {
    if (userAnswers[currentQuestionIndex] !== null) return;
    
    // Remove selection from all options
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    document.querySelectorAll('.answer-option')[index].classList.add('selected');
    selectedAnswer = index;
    submitBtn.disabled = false;
}

// Submit the selected answer
function submitAnswer() {
    if (selectedAnswer === null) return;
    
    const question = questions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedAnswer;
    
    // Check if answer is correct
    if (selectedAnswer === question.correctAnswer) {
        score++;
        scoreEl.textContent = score;
    }
    
    // Show correct/incorrect feedback
    document.querySelectorAll('.answer-option').forEach((option, index) => {
        if (index === question.correctAnswer) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && index !== question.correctAnswer) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });
    
    // Show explanation
    explanationText.textContent = question.explanation;
    explanationEl.classList.add('show');
    
    // Update buttons
    submitBtn.disabled = true;
    nextBtn.disabled = false;
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        selectedAnswer = null;
        showQuestion();
    } else {
        showResults();
    }
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        selectedAnswer = null;
        showQuestion();
    }
}

// Update navigation buttons state
function updateButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = userAnswers[currentQuestionIndex] === null && currentQuestionIndex === questions.length - 1;
    
    if (currentQuestionIndex === questions.length - 1 && userAnswers[currentQuestionIndex] !== null) {
        nextBtn.textContent = 'Finish';
        nextBtn.disabled = false;
    } else {
        nextBtn.textContent = 'Next';
    }
    
    submitBtn.disabled = userAnswers[currentQuestionIndex] !== null || selectedAnswer === null;
}

// Show final results
function showResults() {
    quizEl.style.display = 'none';
    resultsEl.style.display = 'block';
    finalScoreEl.textContent = `${score}/${questions.length}`;
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = Array(questions.length).fill(null);
    
    scoreEl.textContent = '0';
    quizEl.style.display = 'block';
    resultsEl.style.display = 'none';
    
    showQuestion();
}

// Event listeners
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitAnswer);
restartBtn.addEventListener('click', restartQuiz);

// Initialize the quiz
initQuiz();