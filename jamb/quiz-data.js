// Sample quiz data for all subjects
const quizData = {
    chemistry: [
        {
            question: "What is the atomic number of Carbon?",
            options: [
                { text: "6" },
                { text: "12" },
                { text: "14" },
                { text: "8" }
            ],
            correctAnswer: 0,
            explanation: "The atomic number represents the number of protons in an atom's nucleus. Carbon has 6 protons, so its atomic number is 6."
        },
        {
            question: "Which of these is a noble gas?",
            options: [
                { text: "Oxygen" },
                { text: "Nitrogen" },
                { text: "Helium" },
                { text: "Chlorine" }
            ],
            correctAnswer: 2,
            explanation: "Helium is a noble gas located in Group 18 of the periodic table. Noble gases are inert and have full valence electron shells."
        },
        {
            question: "What is the chemical formula for water?",
            options: [
                { text: "CO2" },
                { text: "H2O" },
                { text: "NaCl" },
                { text: "O2" }
            ],
            correctAnswer: 1,
            explanation: "Water is composed of two hydrogen atoms and one oxygen atom, giving it the chemical formula H₂O."
        }
    ],
    physics: [
        {
            question: "What is the SI unit of force?",
            options: [
                { text: "Joule" },
                { text: "Watt" },
                { text: "Newton" },
                { text: "Pascal" }
            ],
            correctAnswer: 2,
            explanation: "The newton (N) is the SI derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics."
        },
        {
            question: "Which law states that 'for every action, there is an equal and opposite reaction'?",
            options: [
                { text: "Newton's First Law" },
                { text: "Newton's Second Law" },
                { text: "Newton's Third Law" },
                { text: "Law of Gravitation" }
            ],
            correctAnswer: 2,
            explanation: "Newton's Third Law of Motion states that when one body exerts a force on a second body, the second body simultaneously exerts a force equal in magnitude and opposite in direction on the first body."
        }
    ],
    mathematics: [
        {
            question: "What is the value of π (pi) to two decimal places?",
            options: [
                { text: "3.14" },
                { text: "3.16" },
                { text: "3.12" },
                { text: "3.18" }
            ],
            correctAnswer: 0,
            explanation: "π (pi) is a mathematical constant representing the ratio of a circle's circumference to its diameter. Its approximate value is 3.14159, so 3.14 when rounded to two decimal places."
        },
        {
            question: "What is the solution to the equation 2x + 5 = 15?",
            options: [
                { text: "5" },
                { text: "10" },
                { text: "7.5" },
                { text: "2.5" }
            ],
            correctAnswer: 0,
            explanation: "To solve the equation 2x + 5 = 15: Subtract 5 from both sides (2x = 10), then divide both sides by 2 (x = 5)."
        }
    ],
    english: [
        {
            question: "Which of these is a preposition?",
            options: [
                { text: "Run" },
                { text: "Beautiful" },
                { text: "Under" },
                { text: "Quickly" }
            ],
            correctAnswer: 2,
            explanation: "A preposition is a word that shows the relationship between a noun or pronoun and other words in a sentence. 'Under' is a preposition indicating position."
        },
        {
            question: "What is the plural form of 'child'?",
            options: [
                { text: "Childs" },
                { text: "Children" },
                { text: "Childes" },
                { text: "Child's" }
            ],
            correctAnswer: 1,
            explanation: "The plural of 'child' is 'children', which is an irregular plural form in English."
        }
    ],
    biology: [
        {
            question: "What is the powerhouse of the cell?",
            options: [
                { text: "Nucleus" },
                { text: "Mitochondria" },
                { text: "Ribosome" },
                { text: "Golgi Apparatus" }
            ],
            correctAnswer: 1,
            explanation: "Mitochondria are often called the powerhouse of the cell because they generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
        },
        {
            question: "Which process do plants use to convert sunlight into energy?",
            options: [
                { text: "Respiration" },
                { text: "Photosynthesis" },
                { text: "Transpiration" },
                { text: "Fermentation" }
            ],
            correctAnswer: 1,
            explanation: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll, converting light energy into chemical energy."
        }
    ]
};

// Add more questions to each subject as needed...