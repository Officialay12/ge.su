document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeSwitch = document.getElementById('theme-switch');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const subjectCards = document.querySelectorAll('.subject-card');
    const subjectSelection = document.querySelector('.subject-selection');
    const questionContainer = document.querySelector('.question-container');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const currentSubject = document.getElementById('current-subject');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const backBtn = document.querySelector('.back-btn');
    const explanationModal = document.querySelector('.explanation-modal');
    const explanationText = document.getElementById('explanation-text');
    const closeExplanation = document.querySelector('.close-explanation');
    const calculatorContainer = document.querySelector('.calculator-container');
    const toggleCalc = document.getElementById('toggleCalc');
    const calcInput = document.getElementById('calc-input');
    const calcBtns = document.querySelectorAll('.calc-btn');
    const particlesContainer = document.getElementById('particles');

    // Quiz State
    let currentQuiz = [];
    let currentQuestionIndex = 0;
    let selectedSubject = '';
    let userAnswers = [];
    let score = 0;

    // Initialize particles
    createParticles();

    // Theme Toggle
    themeSwitch.addEventListener('change', function() {
        document.documentElement.setAttribute('data-theme', this.checked ? 'dark' : 'light');
    });

    // Music Control
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.classList.add('music-playing');
        } else {
            bgMusic.pause();
            musicToggle.classList.remove('music-playing');
        }
    });

    // Subject Selection
    subjectCards.forEach(card => {
        card.addEventListener('click', function() {
            selectedSubject = this.getAttribute('data-subject');
            currentSubject.textContent = selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1);
            loadQuiz(selectedSubject);
            
            // Show calculator for math/science subjects
            if (['mathematics', 'physics', 'chemistry'].includes(selectedSubject)) {
                calculatorContainer.classList.add('active');
            } else {
                calculatorContainer.classList.remove('active');
            }
        });
    });

    // Load Quiz Questions
    function loadQuiz(subject) {
        currentQuiz = quizData[subject];
        currentQuestionIndex = 0;
        userAnswers = [];
        score = 0;
        
        // Hide subject selection and show question container
        subjectSelection.classList.add('active');
        questionContainer.classList.remove('active');
        
        // Load first question
        loadQuestion();
    }

    // Load Current Question
    function loadQuestion() {
        const question = currentQuiz[currentQuestionIndex];
        questionText.textContent = question.question;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Create option buttons
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option.text;
            optionBtn.dataset.index = index;
            
            // Check if this option was previously selected
            const userAnswer = userAnswers[currentQuestionIndex];
            if (userAnswer !== undefined && userAnswer.selected === index) {
                optionBtn.classList.add('selected');
                
                // Mark correct/incorrect if answer was checked
                if (userAnswer.checked) {
                    if (index === question.correctAnswer) {
                        optionBtn.classList.add('correct');
                    } else {
                        optionBtn.classList.add('incorrect');
                    }
                }
            }
            
            optionBtn.addEventListener('click', () => selectOption(optionBtn, index));
            optionsContainer.appendChild(optionBtn);
        });
        
        // Update progress
        progressFill.style.width = `${(currentQuestionIndex / currentQuiz.length) * 100}%`;
        progressText.textContent = `Question ${currentQuestionIndex + 1}/${currentQuiz.length}`;
        
        // Update navigation buttons
        prevBtn.classList.toggle('disabled', currentQuestionIndex === 0);
        nextBtn.textContent = currentQuestionIndex === currentQuiz.length - 1 ? 'Finish' : 'Next <i class="fas fa-chevron-right"></i>';
    }

    // Select Option
    function selectOption(optionBtn, optionIndex) {
        // Only allow selection if not already checked
        const question = currentQuiz[currentQuestionIndex];
        const userAnswer = userAnswers[currentQuestionIndex];
        
        if (userAnswer && userAnswer.checked) return;
        
        // Remove selected class from all options
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        optionBtn.classList.add('selected');
        
        // Store user answer
        userAnswers[currentQuestionIndex] = {
            selected: optionIndex,
            checked: false
        };
    }

    // Check Answer
    function checkAnswer() {
        const question = currentQuiz[currentQuestionIndex];
        const userAnswer = userAnswers[currentQuestionIndex];
        
        if (userAnswer === undefined) {
            alert('Please select an answer before checking!');
            return false;
        }
        
        // Mark answer as checked
        userAnswers[currentQuestionIndex].checked = true;
        
        // Get all option buttons
        const optionBtns = document.querySelectorAll('.option-btn');
        
        // Mark correct and incorrect answers
        optionBtns.forEach((btn, index) => {
            if (index === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (index === userAnswer.selected) {
                btn.classList.add('incorrect');
            }
        });
        
        // Update score if correct
        if (userAnswer.selected === question.correctAnswer) {
            score++;
        }
        
        // Show explanation if wrong answer
        if (userAnswer.selected !== question.correctAnswer && question.explanation) {
            explanationText.innerHTML = `<p><strong>Correct Answer:</strong> ${question.options[question.correctAnswer].text}</p>
                                        <p><strong>Explanation:</strong> ${question.explanation}</p>`;
            explanationModal.classList.add('active');
        }
        
        return true;
    }

    // Navigation
    nextBtn.addEventListener('click', function() {
        // If not last question, check answer and go to next
        if (currentQuestionIndex < currentQuiz.length - 1) {
            const answerChecked = userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].checked;
            
            if (!answerChecked) {
                if (!checkAnswer()) return;
            }
            
            currentQuestionIndex++;
            loadQuestion();
        } else {
            // If last question, finish quiz
            finishQuiz();
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    });

    // Back to Subjects
    backBtn.addEventListener('click', function() {
        questionContainer.classList.add('active');
        subjectSelection.classList.remove('active');
        calculatorContainer.classList.remove('active');
    });

    // Close Explanation Modal
    closeExplanation.addEventListener('click', function() {
        explanationModal.classList.remove('active');
    });

    // Finish Quiz
    function finishQuiz() {
        // Check answer if not already checked
        const answerChecked = userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].checked;
        if (!answerChecked) {
            if (!checkAnswer()) return;
        }
        
        // Calculate score percentage
        const percentage = Math.round((score / currentQuiz.length) * 100);
        
        // Show results
        questionText.innerHTML = `
            <div class="quiz-result">
                <h2>Quiz Completed!</h2>
                <div class="score-circle" style="--percentage: ${percentage};">
                    <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" class="score-track"></circle>
                        <circle cx="50" cy="50" r="45" class="score-fill"></circle>
                    </svg>
                    <div class="score-text">${percentage}%</div>
                </div>
                <p>You scored ${score} out of ${currentQuiz.length}</p>
                <button class="nav-btn restart-btn">
                    <i class="fas fa-redo"></i> Restart Quiz
                </button>
            </div>
        `;
        
        // Disable navigation buttons
        nextBtn.classList.add('disabled');
        prevBtn.classList.add('disabled');
        
        // Add event listener for restart button
        document.querySelector('.restart-btn')?.addEventListener('click', function() {
            loadQuiz(selectedSubject);
        });
    }

    // Calculator
    toggleCalc.addEventListener('click', function() {
        calculatorContainer.classList.toggle('active');
    });

    calcBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const value = this.getAttribute('value');
            
            if (value === 'clear') {
                calcInput.value = '';
            } else if (value === '=') {
                try {
                    calcInput.value = eval(calcInput.value);
                } catch {
                    calcInput.value = 'Error';
                }
            } else {
                if (calcInput.value === 'Error') {
                    calcInput.value = value;
                } else {
                    calcInput.value += value;
                }
            }
        });
    });

    // Create Particles
    function createParticles() {
        const particleCount = window.innerWidth < 768 ? 20 : 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size between 5 and 15px
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            
            // Random animation duration
            const duration = Math.random() * 10 + 10;
            particle.style.animationDuration = `${duration}s`;
            
            // Random delay
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            // Random opacity
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            particlesContainer.appendChild(particle);
        }
    }

    // Initialize music with muted state (will be unmuted on user interaction)
    bgMusic.volume = 0.3;
    bgMusic.muted = true;
    
    // Enable music after first user interaction
    document.body.addEventListener('click', function initMusic() {
        bgMusic.muted = false;
        document.body.removeEventListener('click', initMusic);
    }, { once: true });
});