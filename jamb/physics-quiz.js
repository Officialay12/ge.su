// Physics questions with 3D simulation parameters
const questions = [
    {
        question: "What is the acceleration due to gravity on Earth's surface?",
        options: ["9.8 m/s²", "6.7 m/s²", "12.5 m/s²", "5.3 m/s²"],
        correctAnswer: 0,
        explanation: "The standard acceleration due to gravity on Earth's surface is approximately 9.8 m/s². This value varies slightly depending on altitude and latitude.",
        simulation: {
            type: "freeFall",
            mass: 1,
            height: 10
        }
    },
    {
        question: "Which law states that 'for every action, there is an equal and opposite reaction'?",
        options: [
            "Newton's First Law",
            "Newton's Second Law",
            "Newton's Third Law",
            "Law of Universal Gravitation"
        ],
        correctAnswer: 2,
        explanation: "Newton's Third Law of Motion states that when two bodies interact, they apply forces to one another that are equal in magnitude and opposite in direction.",
        simulation: {
            type: "newtonThirdLaw",
            massA: 1,
            massB: 1,
            force: 5
        }
    },
    {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        correctAnswer: 2,
        explanation: "The ampere (A) is the SI base unit of electric current. It is defined by taking the fixed numerical value of the elementary charge e to be 1.602176634×10⁻¹⁹ when expressed in the unit C (coulomb).",
        simulation: {
            type: "electricCircuit",
            voltage: 12,
            resistance: 4
        }
    },
    {
        question: "Which of these electromagnetic waves has the longest wavelength?",
        options: ["Gamma rays", "X-rays", "Radio waves", "Ultraviolet"],
        correctAnswer: 2,
        explanation: "Radio waves have the longest wavelengths in the electromagnetic spectrum, ranging from about 1 millimeter to 100 kilometers or more.",
        simulation: {
            type: "emSpectrum",
            wavelength: 1000
        }
    },
    {
        question: "What is the energy of a photon with frequency f?",
        options: ["E = h/f", "E = hf", "E = f/h", "E = h + f"],
        correctAnswer: 1,
        explanation: "The energy of a photon is given by Planck's equation E = hf, where h is Planck's constant (6.626×10⁻³⁴ J·s) and f is the frequency of the photon.",
        simulation: {
            type: "photonEnergy",
            frequency: 5e14
        }
    },
    {
        question: "In a parallel circuit, what happens to the total resistance as more resistors are added?",
        options: [
            "Increases",
            "Decreases",
            "Remains the same",
            "Depends on the voltage"
        ],
        correctAnswer: 1,
        explanation: "In a parallel circuit, adding more resistors provides additional paths for current to flow, which decreases the total resistance of the circuit.",
        simulation: {
            type: "parallelCircuit",
            resistors: [4, 6]
        }
    },
    {
        question: "What principle explains why airplanes can fly?",
        options: [
            "Pascal's Principle",
            "Bernoulli's Principle",
            "Archimedes' Principle",
            "Heisenberg's Principle"
        ],
        correctAnswer: 1,
        explanation: "Bernoulli's Principle states that an increase in the speed of a fluid occurs simultaneously with a decrease in pressure. This creates lift on airplane wings.",
        simulation: {
            type: "airfoil",
            speed: 200,
            angle: 5
        }
    },
    {
        question: "What is the work done when a force of 10 N moves an object 5 m?",
        options: ["2 J", "5 J", "10 J", "50 J"],
        correctAnswer: 3,
        explanation: "Work is calculated as force multiplied by displacement in the direction of the force (W = F × d). So 10 N × 5 m = 50 J.",
        simulation: {
            type: "workDone",
            force: 10,
            distance: 5
        }
    },
    {
        question: "Which color of visible light has the highest frequency?",
        options: ["Red", "Green", "Blue", "Yellow"],
        correctAnswer: 2,
        explanation: "Blue light has the highest frequency (and shortest wavelength) among the visible light spectrum, ranging from about 606-668 THz.",
        simulation: {
            type: "visibleSpectrum",
            color: "blue"
        }
    },
    {
        question: "What happens to the pressure of a gas if its volume decreases at constant temperature?",
        options: [
            "Pressure decreases",
            "Pressure increases",
            "Pressure remains the same",
            "It depends on the gas"
        ],
        correctAnswer: 1,
        explanation: "According to Boyle's Law (P₁V₁ = P₂V₂), at constant temperature, the pressure of a gas is inversely proportional to its volume.",
        simulation: {
            type: "gasPressure",
            initialVolume: 10,
            finalVolume: 5
        }
    },
    {
        question: "What is the unit of measurement for electric potential difference?",
        options: ["Ohm", "Ampere", "Watt", "Volt"],
        correctAnswer: 3,
        explanation: "The volt (V) is the derived unit for electric potential difference or electromotive force. One volt is defined as the difference in electric potential between two points that will impart one joule of energy per coulomb of charge.",
        simulation: {
            type: "potentialDifference",
            charge: 2,
            energy: 10
        }
    },
    {
        question: "Which type of mirror always produces a virtual image?",
        options: [
            "Plane mirror",
            "Concave mirror",
            "Convex mirror",
            "Both A and C"
        ],
        correctAnswer: 3,
        explanation: "Both plane mirrors and convex mirrors always produce virtual images. Concave mirrors can produce real or virtual images depending on the object's position.",
        simulation: {
            type: "mirrors",
            mirrorType: "convex",
            objectDistance: 10
        }
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: [
            "300,000 km/s",
            "150,000 km/s",
            "450,000 km/s",
            "It depends on the frequency"
        ],
        correctAnswer: 0,
        explanation: "The speed of light in a vacuum is exactly 299,792,458 meters per second (approximately 300,000 km/s). This is a fundamental constant of nature.",
        simulation: {
            type: "lightSpeed",
            medium: "vacuum"
        }
    },
    {
        question: "Which law states that the entropy of an isolated system never decreases?",
        options: [
            "Zeroth Law of Thermodynamics",
            "First Law of Thermodynamics",
            "Second Law of Thermodynamics",
            "Third Law of Thermodynamics"
        ],
        correctAnswer: 2,
        explanation: "The Second Law of Thermodynamics states that in any cyclic process, the entropy of an isolated system will either increase or remain the same.",
        simulation: {
            type: "entropy",
            initialState: "ordered",
            finalState: "disordered"
        }
    },
    {
        question: "What is the phenomenon where light changes direction when passing through different media?",
        options: [
            "Diffraction",
            "Reflection",
            "Refraction",
            "Dispersion"
        ],
        correctAnswer: 2,
        explanation: "Refraction is the bending of light as it passes from one transparent medium to another with different optical densities, due to a change in its speed.",
        simulation: {
            type: "refraction",
            angle: 30,
            n1: 1,
            n2: 1.5
        }
    },
    {
        question: "Which particle is responsible for carrying the electromagnetic force?",
        options: [
            "Gluon",
            "Photon",
            "W and Z bosons",
            "Higgs boson"
        ],
        correctAnswer: 1,
        explanation: "The photon is the gauge boson for electromagnetism and is responsible for mediating the electromagnetic force between charged particles.",
        simulation: {
            type: "particleInteraction",
            particles: ["electron", "positron"],
            force: "electromagnetic"
        }
    },
    {
        question: "What happens to the period of a pendulum if its length is quadrupled?",
        options: [
            "Doubles",
            "Halves",
            "Quadruples",
            "Remains the same"
        ],
        correctAnswer: 0,
        explanation: "The period T of a simple pendulum is proportional to the square root of its length (T ∝ √L). If length becomes 4L, period becomes 2T.",
        simulation: {
            type: "pendulum",
            length: 1,
            gravity: 9.8
        }
    },
    {
        question: "Which principle explains why ships float?",
        options: [
            "Bernoulli's Principle",
            "Pascal's Principle",
            "Archimedes' Principle",
            "Hooke's Law"
        ],
        correctAnswer: 2,
        explanation: "Archimedes' Principle states that the buoyant force on a submerged object is equal to the weight of the fluid it displaces.",
        simulation: {
            type: "buoyancy",
            objectDensity: 500,
            fluidDensity: 1000
        }
    },
    {
        question: "What is the relationship between voltage (V), current (I), and resistance (R)?",
        options: [
            "V = I/R",
            "V = IR",
            "V = I + R",
            "V = I²R"
        ],
        correctAnswer: 1,
        explanation: "Ohm's Law states that the voltage across a conductor is directly proportional to the current through it (V = IR).",
        simulation: {
            type: "ohmsLaw",
            current: 2,
            resistance: 3
        }
    },
    {
        question: "Which type of nuclear reaction powers the Sun?",
        options: [
            "Nuclear fission",
            "Nuclear fusion",
            "Radioactive decay",
            "Pair production"
        ],
        correctAnswer: 1,
        explanation: "The Sun's energy comes from nuclear fusion, where hydrogen nuclei combine to form helium under extreme temperature and pressure, releasing enormous amounts of energy.",
        simulation: {
            type: "nuclearFusion",
            particles: ["proton", "proton"],
            temperature: 1e7
        }
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
const explanationDiagram = document.getElementById('explanation-diagram');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const quizEl = document.getElementById('quiz');
const resultsEl = document.getElementById('results');
const simulationContainer = document.getElementById('physics-simulation');

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = Array(questions.length).fill(null);
let scene, camera, renderer, simulationObjects = [];

// Initialize Three.js scene
function initScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, simulationContainer.offsetWidth / simulationContainer.offsetHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(simulationContainer.offsetWidth, simulationContainer.offsetHeight);
    simulationContainer.appendChild(renderer.domElement);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Set camera position
    camera.position.z = 5;
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = simulationContainer.offsetWidth / simulationContainer.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(simulationContainer.offsetWidth, simulationContainer.offsetHeight);
    });
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate all simulation objects
    simulationObjects.forEach(obj => {
        if (obj.rotation) {
            obj.rotation.x += 0.005;
            obj.rotation.y += 0.01;
        }
    });
    
    renderer.render(scene, camera);
}

// Create simulation based on question type
function createSimulation(question) {
    // Clear previous simulation
    while (simulationContainer.firstChild) {
        simulationContainer.removeChild(simulationContainer.firstChild);
    }
    scene = new THREE.Scene();
    simulationObjects = [];
    
    // Reinitialize renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(simulationContainer.offsetWidth, simulationContainer.offsetHeight);
    simulationContainer.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Create simulation based on type
    const simType = question.simulation.type;
    const params = question.simulation;
    
    switch (simType) {
        case 'freeFall':
            // Create ground plane
            const groundGeometry = new THREE.PlaneGeometry(10, 10);
            const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x2e8b57, side: THREE.DoubleSide });
            const ground = new THREE.Mesh(groundGeometry, groundMaterial);
            ground.rotation.x = -Math.PI / 2;
            scene.add(ground);
            
            // Create falling object
            const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
            const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347 });
            const ball = new THREE.Mesh(ballGeometry, ballMaterial);
            ball.position.y = params.height;
            scene.add(ball);
            simulationObjects.push(ball);
            
            // Animation for free fall
            let startTime = Date.now();
            const animateFall = () => {
                const elapsed = (Date.now() - startTime) / 1000;
                const g = 9.8;
                const newY = Math.max(0, params.height - 0.5 * g * elapsed * elapsed);
                ball.position.y = newY;
                
                if (newY > 0) {
                    requestAnimationFrame(animateFall);
                }
            };
            animateFall();
            break;
            
        case 'newtonThirdLaw':
            // Create two boxes
            const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
            const box1Material = new THREE.MeshStandardMaterial({ color: 0x4682b4 });
            const box2Material = new THREE.MeshStandardMaterial({ color: 0xffa500 });
            
            const box1 = new THREE.Mesh(boxGeometry, box1Material);
            box1.position.x = -2;
            scene.add(box1);
            
            const box2 = new THREE.Mesh(boxGeometry, box2Material);
            box2.position.x = 2;
            scene.add(box2);
            
            simulationObjects.push(box1, box2);
            
            // Animation for collision
            let collisionTime = Date.now();
            const animateCollision = () => {
                const elapsed = (Date.now() - collisionTime) / 1000;
                
                if (elapsed < 1) {
                    box1.position.x = -2 + elapsed * 2;
                    box2.position.x = 2 - elapsed * 2;
                    requestAnimationFrame(animateCollision);
                } else if (elapsed < 2) {
                    box1.position.x = 0 - (elapsed - 1) * 2;
                    box2.position.x = 0 + (elapsed - 1) * 2;
                    requestAnimationFrame(animateCollision);
                }
            };
            animateCollision();
            break;
            
        case 'electricCircuit':
            // Create circuit visualization
            const batteryGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 32);
            const batteryMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
            const battery = new THREE.Mesh(batteryGeometry, batteryMaterial);
            battery.rotation.x = Math.PI / 2;
            battery.position.x = -2;
            scene.add(battery);
            
            const resistorGeometry = new THREE.BoxGeometry(0.2, 0.5, 0.5);
            const resistorMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
            const resistor = new THREE.Mesh(resistorGeometry, resistorMaterial);
            resistor.position.x = 2;
            scene.add(resistor);
            
            // Create wires
            const wireMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
            
            const points1 = [];
            points1.push(new THREE.Vector3(-1.5, 0, 0));
            points1.push(new THREE.Vector3(-0.5, 0.5, 0));
            points1.push(new THREE.Vector3(0.5, -0.5, 0));
            points1.push(new THREE.Vector3(1.5, 0, 0));
            
            const wireGeometry1 = new THREE.BufferGeometry().setFromPoints(points1);
            const wire1 = new THREE.Line(wireGeometry1, wireMaterial);
            scene.add(wire1);
            
            const points2 = [];
            points2.push(new THREE.Vector3(1.5, 0, 0));
            points2.push(new THREE.Vector3(2, 0, 0));
            points2.push(new THREE.Vector3(2.5, 0, 0));
            points2.push(new THREE.Vector3(3, 0.5, 0));
            points2.push(new THREE.Vector3(3.5, -0.5, 0));
            points2.push(new THREE.Vector3(4, 0, 0));
            points2.push(new THREE.Vector3(4.5, 0, 0));
            points2.push(new THREE.Vector3(-4.5, 0, 0));
            points2.push(new THREE.Vector3(-4, 0, 0));
            points2.push(new THREE.Vector3(-3.5, -0.5, 0));
            points2.push(new THREE.Vector3(-3, 0.5, 0));
            points2.push(new THREE.Vector3(-2.5, 0, 0));
            points2.push(new THREE.Vector3(-2, 0, 0));
            points2.push(new THREE.Vector3(-1.5, 0, 0));
            
            const wireGeometry2 = new THREE.BufferGeometry().setFromPoints(points2);
            const wire2 = new THREE.Line(wireGeometry2, wireMaterial);
            scene.add(wire2);
            
            // Add current animation
            const currentGeometry = new THREE.SphereGeometry(0.1, 16, 16);
            const currentMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
            const current = new THREE.Mesh(currentGeometry, currentMaterial);
            scene.add(current);
            simulationObjects.push(current);
            
            let currentTime = Date.now();
            const animateCurrent = () => {
                const elapsed = (Date.now() - currentTime) / 1000;
                const progress = (elapsed % 5) / 5; // Loop every 5 seconds
                
                const pathIndex = Math.floor(progress * points2.length);
                if (pathIndex < points2.length - 1) {
                    const segmentProgress = (progress * points2.length) % 1;
                    current.position.lerpVectors(
                        points2[pathIndex],
                        points2[pathIndex + 1],
                        segmentProgress
                    );
                }
                
                requestAnimationFrame(animateCurrent);
            };
            animateCurrent();
            break;
            
        default:
            // Default simulation - rotating cube
            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshStandardMaterial({ 
                color: 0x4169e1,
                metalness: 0.7,
                roughness: 0.2
            });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            simulationObjects.push(cube);
    }
    
    // Position camera based on scene
    camera.position.z = 10;
    camera.lookAt(0, 0, 0);
}

// Initialize the quiz
function initQuiz() {
    initScene();
    animate();
    showQuestion();
    updateButtons();
}

// Display the current question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    
    // Create simulation
    createSimulation(question);
    
    // Clear previous options
    answerOptions.innerHTML = '';
    
      // Create new options
      question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('option');
        optionEl.textContent = option;
        optionEl.addEventListener('click', () => selectAnswer(index));
        
        // Highlight if this was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            optionEl.classList.add('selected');
            selectedAnswer = index;
        }
        
        answerOptions.appendChild(optionEl);
    });
    
    // Show explanation if available
    if (userAnswers[currentQuestionIndex] !== null) {
        showExplanation();
    } else {
        explanationEl.style.display = 'none';
    }
}

// Handle answer selection
function selectAnswer(index) {
    // Remove previous selection
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Set new selection
    options[index].classList.add('selected');
    selectedAnswer = index;
    userAnswers[currentQuestionIndex] = index;
    
    // Enable submit button if not already enabled
    if (submitBtn.disabled) {
        submitBtn.disabled = false;
    }
}

// Show explanation for current question
function showExplanation() {
    const question = questions[currentQuestionIndex];
    explanationText.textContent = question.explanation;
    
    // Highlight correct answer
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === question.correctAnswer) {
            option.classList.add('correct');
        } else if (index === userAnswers[currentQuestionIndex] && index !== question.correctAnswer) {
            option.classList.add('incorrect');
        }
    });
    
    explanationEl.style.display = 'block';
}

// Submit answer and update score
function submitAnswer() {
    const question = questions[currentQuestionIndex];
    
    // Check if answer is correct
    if (selectedAnswer === question.correctAnswer) {
        score++;
        scoreEl.textContent = score;
    }
    
    // Show explanation
    showExplanation();
    
    // Disable submit button
    submitBtn.disabled = true;
    
    // Enable next button if not on last question
    if (currentQuestionIndex < questions.length - 1) {
        nextBtn.disabled = false;
    } else {
        // If last question, show results
        showResults();
    }
}

// Show quiz results
function showResults() {
    quizEl.style.display = 'none';
    resultsEl.style.display = 'block';
    finalScoreEl.textContent = `${score} / ${questions.length}`;
    
    // Create result details
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';
    
    questions.forEach((question, index) => {
        const resultItem = document.createElement('li');
        resultItem.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <p>Your answer: ${question.options[userAnswers[index]] || 'Not answered'}</p>
            <p>Correct answer: ${question.options[question.correctAnswer]}</p>
            <p class="explanation">Explanation: ${question.explanation}</p>
        `;
        
        if (userAnswers[index] === question.correctAnswer) {
            resultItem.classList.add('correct');
        } else {
            resultItem.classList.add('incorrect');
        }
        
        resultsList.appendChild(resultItem);
    });
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        updateButtons();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        updateButtons();
    }
}

// Update button states
function updateButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questions.length - 1;
    submitBtn.disabled = userAnswers[currentQuestionIndex] === null;
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = Array(questions.length).fill(null);
    
    scoreEl.textContent = score;
    quizEl.style.display = 'block';
    resultsEl.style.display = 'none';
    
    showQuestion();
    updateButtons();
}

// Event listeners
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitAnswer);
restartBtn.addEventListener('click', restartQuiz);

// Initialize the quiz
initQuiz();