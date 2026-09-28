// Quiz Data extracted from official project document
const quizQuestions = [
    // Língua Portuguesa
    {
        id: 1,
        category: 'portugues',
        categoryName: 'Língua Portuguesa',
        icon: '📖',
        question: 'No estudo da Língua Portuguesa, o uso de recursos visuais imersivos e interativos pode ajudar na interpretação de textos e na identificação de recursos expressivos. Qual figura de linguagem consiste no uso de uma palavra com sentido figurado a partir de uma comparação implícita (sem o termo "como")?',
        options: [
            'A) Metáfora',
            'B) Comparação',
            'C) Personificação',
            'D) Hipérbole'
        ],
        answer: 0,
        explanation: 'Metáfora: Comparação implícita sem o termo "como".'
    },
    {
        id: 2,
        category: 'portugues',
        categoryName: 'Língua Portuguesa',
        icon: '📖',
        question: 'Em uma frase, a concordância verbal deve harmonizar o verbo com o seu sujeito. Assinale a alternativa que apresenta a concordância verbal correta:',
        options: [
            'A) Fazem dois anos que usamos realidade virtual na escola.',
            'B) Houveram muitos alunos interessados no projeto.',
            'C) A maioria dos alunos aprovou a nova metodologia.',
            'D) Sobrou muitos óculos no laboratório.'
        ],
        answer: 2,
        explanation: 'A maioria dos alunos aprovou a nova metodologia. O verbo concorda corretamente com o núcleo "maioria".'
    },
    {
        id: 3,
        category: 'portugues',
        categoryName: 'Língua Portuguesa',
        icon: '📖',
        question: 'As classes gramaticais ajudam a organizar a estrutura das frases. Qual das palavras destacadas abaixo é um substantivo abstrato?',
        options: [
            'A) O óculos de RV é moderno.',
            'B) A curiosidade melhora o aprendizado.',
            'C) A escola comprou novos equipamentos.',
            'D) O estudante leu o resumo.'
        ],
        answer: 1,
        explanation: 'A palavra "curiosidade" é um substantivo abstrato.'
    },
    {
        id: 4,
        category: 'portugues',
        categoryName: 'Língua Portuguesa',
        icon: '📖',
        question: 'A pontuação é essencial para a clareza do texto. Em qual das opções a vírgula foi utilizada corretamente para separar um vocativo (chamamento)?',
        options: [
            'A) Valentina, venha ver este projeto de realidade virtual.',
            'B) Valentina venha, ver este projeto de realidade virtual.',
            'C) Valentina venha ver este, projeto de realidade virtual.',
            'D) Valentina venha ver este projeto, de realidade virtual.'
        ],
        answer: 0,
        explanation: 'A vírgula separa corretamente o vocativo ("Valentina") no início da frase.'
    },

    // Matemática
    {
        id: 5,
        category: 'matematica',
        categoryName: 'Matemática',
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
        id: 6,
        category: 'matematica',
        categoryName: 'Matemática',
        icon: '📐',
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
        id: 7,
        category: 'matematica',
        categoryName: 'Matemática',
        icon: '📐',
        question: 'Em um ambiente virtual de Geometria Plana, o professor desenhou um triângulo cujos ângulos internos medem 50° e 60°. Qual deve ser a medida do terceiro ângulo interno?',
        options: [
            'A) 50°',
            'B) 60°',
            'C) 70°',
            'D) 90°'
        ],
        answer: 2,
        explanation: 'A soma dos ângulos internos de um triângulo é 180°. 180° - 50° - 60° = 70°.'
    },
    {
        id: 8,
        category: 'matematica',
        categoryName: 'Matemática',
        icon: '📐',
        question: 'Um arquivo com uma experiência imersiva de matemática ocupa 2,5 Gigabytes (GB) de memória. Se a escola baixar 4 arquivos com esse mesmo tamanho, qual será o total de memória utilizado?',
        options: [
            'A) 8 GB',
            'B) 9 GB',
            'C) 10 GB',
            'D) 12 GB'
        ],
        answer: 2,
        explanation: '2,5 GB × 4 = 10 GB.'
    },

    // História
    {
        id: 9,
        category: 'historia',
        categoryName: 'História',
        icon: '🏛️',
        question: 'O Renascimento Cultural e Científico na Europa (séculos XIV-XVI) valorizou a observação, a razão e novos conhecimentos técnicos, como a cartografia e a astronomia. Essas inovações foram essenciais para qual grande evento histórico que conectou a Europa à América?',
        options: [
            'A) As Cruzadas Medievais.',
            'B) A Queda do Império Romano.',
            'C) As Grandes Navegações (como a de Pedro Álvares Cabral).',
            'D) A Revolução Industrial Inglesa.'
        ],
        answer: 2,
        explanation: 'As Grandes Navegações foram impulsionadas pelos conhecimentos técnicos e científicos desenvolvidos no Renascimento.'
    },
    {
        id: 10,
        category: 'historia',
        categoryName: 'História',
        icon: '🏛️',
        question: 'Nossa escola em Laguna fica ao lado do Museu que homenageia Anita Garibaldi. Ela foi uma figura fundamental em conflitos no Brasil e na Itália. Devido à sua luta por liberdade em dois continentes diferentes, ela recebeu o título de:',
        options: [
            'A) Imperatriz das Américas.',
            'B) Heroína dos Dois Mundos.',
            'C) Rainha do Renascimento.',
            'D) Mãe da República Paulista.'
        ],
        answer: 1,
        explanation: 'Anita Garibaldi é reconhecida historicamente com o título de Heroína dos Dois Mundos.'
    },
    {
        id: 11,
        category: 'historia',
        categoryName: 'História',
        icon: '🏛️',
        question: 'Durante o período colonial brasileiro, a economia foi impulsionada por grandes ciclos de exploração de riquezas naturais e agrícolas. Qual foi a primeira riqueza explorada pelos portugueses na costa brasileira logo após a chegada em 1500?',
        options: [
            'A) Cana-de-açúcar',
            'B) Ouro',
            'C) Pau-brasil',
            'D) Café'
        ],
        answer: 2,
        explanation: 'O Pau-brasil foi o primeiro recurso natural explorado comercialmente pelos portugueses em 1500.'
    },
    {
        id: 12,
        category: 'historia',
        categoryName: 'História',
        icon: '🏛️',
        question: 'Durante a Idade Média, no século XIV, a Europa enfrentou uma das maiores epidemias da história, conhecida como Peste Negra. Qual agente/vetor foi o principal responsável pela rápida disseminação dessa doença entre a população urbana?',
        options: [
            'A) Água contaminada por produtos químicos',
            'B) Pulgas presentes em ratos que circulavam pelas cidades e navios',
            'C) Ingestão de alimentos estragados',
            'D) Contágio por meio de aves migratórias'
        ],
        answer: 1,
        explanation: 'As pulgas presentes em ratos que circulavam pelas cidades e embarcações foram o vetor de transmissão da bactéria da Peste Negra.'
    },

    // Geografia
    {
        id: 13,
        category: 'geografia',
        categoryName: 'Geografia',
        icon: '🌍',
        question: 'A tecnologia imersiva facilita a observação de paisagens do planeta. Qual é o nome do bioma exclusivamente brasileiro, típico do clima semiárido, com vegetação adaptada à seca como os cactos?',
        options: [
            'A) Caatinga',
            'B) Cerrado',
            'C) Pantanal',
            'D) Mata Atlântica'
        ],
        answer: 0,
        explanation: 'A Caatinga é um bioma exclusivamente brasileiro, com rica biodiversidade adaptada ao clima semiárido.'
    },
    {
        id: 14,
        category: 'geografia',
        categoryName: 'Geografia',
        icon: '🌍',
        question: 'As camadas da Terra podem ser visualizadas em modelos 3D com óculos de RV. Qual é a camada mais interna e quente do nosso planeta?',
        options: [
            'A) Crosta terrestre',
            'B) Manto superior',
            'C) Manto inferior',
            'D) Núcleo'
        ],
        answer: 3,
        explanation: 'O Núcleo é a camada mais profunda e de maior temperatura da Terra.'
    },
    {
        id: 15,
        category: 'geografia',
        categoryName: 'Geografia',
        icon: '🌍',
        question: 'O movimento da Terra em torno do seu próprio eixo leva cerca de 24 horas para se completar. Como é chamado esse movimento responsável pela alternância entre os dias e as noites?',
        options: [
            'A) Translação',
            'B) Rotação',
            'C) Nutação',
            'D) Precessão'
        ],
        answer: 1,
        explanation: 'Rotação é o movimento que a Terra realiza em torno do seu próprio eixo em aproximadamente 24 horas.'
    },
    {
        id: 16,
        category: 'geografia',
        categoryName: 'Geografia',
        icon: '🌍',
        question: 'A Rosa dos Ventos é um elemento fundamental dos mapas para orientação espacial. Quais são os quatro pontos cardeais principais?',
        options: [
            'A) Norte, Sul, Leste e Oeste',
            'B) Nordeste, Sudeste, Noroeste e Sudoeste',
            'C) Cênite, Nadi, Equador e Trópico',
            'D) Latitude, Longitude, Altitude e Escala'
        ],
        answer: 0,
        explanation: 'Norte, Sul, Leste e Oeste são os pontos cardeais básicos da Rosa dos Ventos.'
    }
];

// State
let userAnswers = {};
let currentFilter = 'all';

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
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resetBtn = document.getElementById('resetQuizBtn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.getAttribute('data-filter');
            renderQuestions();
        });
    });

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

    const filtered = quizQuestions.filter(q => {
        if (currentFilter === 'all') return true;
        return q.category === currentFilter;
    });

    document.getElementById('totalVisibleQuestions').textContent = filtered.length;

    container.innerHTML = filtered.map((q, index) => {
        const answered = userAnswers[q.id] !== undefined;
        const selectedOption = userAnswers[q.id];
        const isCorrect = answered && selectedOption === q.answer;

        return `
            <div class="question-card ${answered ? (isCorrect ? 'is-correct' : 'is-wrong') : ''}" id="q-card-${q.id}">
                <div class="q-header">
                    <span class="q-category-tag ${q.category}">
                        ${q.icon} ${q.categoryName}
                    </span>
                    <span class="q-number">Questão ${q.id} de 16</span>
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
            messageEl.innerHTML = `Você acertou <strong>${score} de 16 questões</strong>! Excelente viagem virtual do conhecimento.`;
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

    const visibleQuestions = quizQuestions.filter(q => {
        if (currentFilter === 'all') return true;
        return q.category === currentFilter;
    });

    const visibleAnswered = visibleQuestions.filter(q => userAnswers[q.id] !== undefined).length;
    const visibleScore = visibleQuestions.filter(q => userAnswers[q.id] === q.answer).length;

    document.getElementById('quizScore').textContent = visibleScore;
    document.getElementById('totalVisibleQuestions').textContent = visibleQuestions.length;
    document.getElementById('answeredCount').textContent = visibleAnswered;
    document.getElementById('totalCount').textContent = visibleQuestions.length;
}
