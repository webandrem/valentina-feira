// Quiz Data - Matemática em Realidade Virtual
const quizQuestions = [
    {
        id: 1,
        category: 'matematica',
        categoryName: 'Matemática (Geometria Espacial)',
        icon: '📐',
        question: 'Com os óculos de Realidade Virtual, é possível explorar formas geométricas em 3D. Quantas faces, vértices e arestas possui um cubo, respectivamente?',
        options: [
            'A) 6 faces, 8 vértices e 12 arestas',
            'B) 6 faces, 12 vértices e 8 arestas',
            'C) 8 faces, 6 vértices e 12 arestas',
            'D) 4 faces, 4 vértices e 6 arestas'
        ],
        answer: 0,
        explanation: 'O cubo possui 6 faces quadradas, 8 vértices e 12 arestas.'
    },
    {
        id: 2,
        category: 'matematica',
        categoryName: 'Matemática (Estatística & Porcentagem)',
        icon: '📊',
        question: 'Um grupo de estudantes fez uma pesquisa e descobriu que 70% dos 30 alunos de uma turma preferem aulas com Realidade Virtual. Quantos alunos representam essa porcentagem?',
        options: [
            'A) 15 alunos',
            'B) 18 alunos',
            'C) 21 alunos',
            'D) 24 alunos'
        ],
        answer: 2,
        explanation: '70% de 30 = (70 × 30) / 100 = 21 alunos.'
    },
    {
        id: 3,
        category: 'matematica',
        categoryName: 'Matemática (Geometria Plana & Ângulos)',
        icon: '📏',
        question: 'Em um ambiente virtual de Geometria Plana, o professor desenhou um triângulo cujos ângulos internos medem 50° e 60°. Qual deve ser a medida do terceiro ângulo interno?',
        options: [
            'A) 50°',
            'B) 60°',
            'C) 70°',
            'D) 90°'
        ],
        answer: 2,
        explanation: 'A soma dos ângulos internos de qualquer triângulo é sempre 180°. 180° - 50° - 60° = 70°.'
    },
    {
        id: 4,
        category: 'matematica',
        categoryName: 'Matemática (Cálculo Digital & Memória)',
        icon: '💾',
        question: 'Um arquivo com uma experiência imersiva de matemática ocupa 2,5 Gigabytes (GB) de memória. Se a escola baixar 4 arquivos com esse mesmo tamanho, qual será o total de memória utilizado?',
        options: [
            'A) 8 GB',
            'B) 9 GB',
            'C) 10 GB',
            'D) 12 GB'
        ],
        answer: 2,
        explanation: '2,5 GB × 4 = 10 GB.'
    }
];

// State
let userAnswers = {};

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initQuiz();
});

// Navigation Handling
function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link, .hero-actions a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        if (menuToggle) menuToggle.classList.remove('open');
                    }
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Active state highlighting on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                    if (navLink.getAttribute('href') === `#${sectionId}`) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    });
}

// Quiz Initialization
function initQuiz() {
    const resetBtn = document.getElementById('resetQuizBtn');

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            userAnswers = {};
            renderQuestions();
            updateScore();
            const completedCard = document.getElementById('quizCompletedCard');
            if (completedCard) completedCard.style.display = 'none';
        });
    }

    renderQuestions();
    updateScore();
}

// Render Questions
function renderQuestions() {
    const container = document.getElementById('questionsList');
    if (!container) return;

    document.getElementById('totalVisibleQuestions').textContent = quizQuestions.length;
    document.getElementById('totalCount').textContent = quizQuestions.length;

    container.innerHTML = quizQuestions.map((q) => {
        const answered = userAnswers[q.id] !== undefined;
        const selectedOption = userAnswers[q.id];
        const isCorrect = answered && selectedOption === q.answer;

        return `
            <div class="question-card ${answered ? (isCorrect ? 'is-correct' : 'is-wrong') : ''}" id="q-card-${q.id}">
                <div class="q-header">
                    <span class="q-category-tag ${q.category}">
                        ${q.icon} ${q.categoryName}
                    </span>
                    <span class="q-number">Questão ${q.id} de 4</span>
                </div>
                <h4 class="q-title">${q.question}</h4>
                <div class="options-grid">
                    ${q.options.map((opt, optIdx) => {
                        let btnClass = 'option-btn';
                        if (answered) {
                            if (optIdx === q.answer) {
                                btnClass += ' correct';
                            } else if (optIdx === selectedOption) {
                                btnClass += ' wrong';
                            } else {
                                btnClass += ' disabled';
                            }
                        }
                        return `
                            <button 
                                class="${btnClass}" 
                                onclick="selectAnswer(${q.id}, ${optIdx})" 
                                ${answered ? 'disabled' : ''}
                            >
                                <span class="opt-label">${opt}</span>
                                ${answered && optIdx === q.answer ? '<span class="opt-badge">✓ Correta</span>' : ''}
                                ${answered && optIdx === selectedOption && !isCorrect ? '<span class="opt-badge">✕ Sua escolha</span>' : ''}
                            </button>
                        `;
                    }).join('')}
                </div>
                ${answered ? `
                    <div class="explanation-box ${isCorrect ? 'success' : 'alert'}">
                        <strong>${isCorrect ? '🎉 Resposta Correta!' : '💡 Explicação:'}</strong>
                        <p>${q.explanation}</p>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

// Handle answer selection
window.selectAnswer = function(questionId, selectedIdx) {
    if (userAnswers[questionId] !== undefined) return;

    userAnswers[questionId] = selectedIdx;
    renderQuestions();
    updateScore();

    // Check completion
    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount === quizQuestions.length) {
        const score = Object.entries(userAnswers).filter(([id, idx]) => {
            const question = quizQuestions.find(q => q.id === parseInt(id));
            return question && question.answer === idx;
        }).length;

        const completedCard = document.getElementById('quizCompletedCard');
        const messageEl = document.getElementById('completionMessage');
        if (completedCard && messageEl) {
            messageEl.innerHTML = `Você acertou <strong>${score} de 4 questões</strong> de Matemática! Excelente desempenho na Feira de Ciências.`;
            completedCard.style.display = 'block';
            completedCard.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// Update Score Header
function updateScore() {
    const answeredIds = Object.keys(userAnswers);
    const score = answeredIds.filter(id => {
        const question = quizQuestions.find(q => q.id === parseInt(id));
        return question && question.answer === userAnswers[id];
    }).length;

    const visibleAnswered = answeredIds.length;

    document.getElementById('quizScore').textContent = score;
    document.getElementById('totalVisibleQuestions').textContent = quizQuestions.length;
    document.getElementById('answeredCount').textContent = visibleAnswered;
    document.getElementById('totalCount').textContent = quizQuestions.length;
}
