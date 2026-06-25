
// Data Object - Permite escalar o site para múltiplas perguntas facilmente
const bancoQuestoes = {
    titulo: "Qual das seguintes alternativas indica um sinal comum de um vídeo manipulado por Deepfake?",
    alternativas: [
        { id: "a1", texto: "Piscar de olhos perfeitamente natural e iluminação sem falhas dinâmicas.", correta: false },
        { id: "a2", texto: "Movimentos labiais levemente desalinhados com o áudio e borrões nas bordas do rosto.", correta: true },
        { id: "a3", texto: "Resolução de vídeo extremamente alta e uniforme em todas as partes do cenário.", correta: false }
    ],
    feedbackSucesso: "🎉 Excelente! Você demonstrou uma ótima percepção digital. Inconsistências de iluminação na íris, falta de sincronia labial e artefatos em torno do rosto ou cabelos são rastros comuns gerados por Inteligência Artificial.",
    feedbackErro: "❌ Atenção redobrada! As IAs generativas ainda enfrentam dificuldades com renderização biométrica precisa. Desalinhamentos de áudio e sombras artificiais ao redor do nariz e boca são sinais claros de manipulação."
};

// Seleção de Elementos de Interface
const btnAcessibilidade = document.getElementById('btn-acessibilidade');
const quizContainer = document.getElementById('quiz-container');
const quizForm = document.getElementById('quiz-form');
const resultadoQuiz = document.getElementById('resultado-quiz');

// Inicializador da Renderização Dinâmica do DOM
function inicializarQuiz() {
    let htmlGerado = `<p class="questao-titulo"><strong>Questão:</strong> ${bancoQuestoes.titulo}</p>`;
    htmlGerado += `<div class="quiz-options-group">`;
    
    bancoQuestoes.alternativas.forEach(alt => {
        htmlGerado += `
            <label for="${alt.id}">
                <input type="radio" id="${alt.id}" name="quiz-input" value="${alt.correta}">
                ${alt.texto}
            </label>
        `;
    });
    
    htmlGerado += `</div>`;
    quizContainer.innerHTML = htmlGerado;
}

// 1. Gerenciador de Acessibilidade (Dark/Light Mode)
btnAcessibilidade.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const estaNoDarkMode = document.body.classList.contains('dark-mode');
    
    // Altera o texto e o ícone de forma limpa
    btnAcessibilidade.querySelector('.text').textContent = estaNoDarkMode ? 'Modo Claro' : 'Modo Escuro';
    
    // Salva a preferência do usuário no navegador (Recurso 100x melhor)
    localStorage.setItem('tema', estaNoDarkMode ? 'dark' : 'light');
});

// Recupera a escolha de tema salva na última visita do usuário
if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark-mode');
    btnAcessibilidade.querySelector('.text').textContent = 'Modo Claro';
}

// 2. Lógica de Validação e Processamento de Dados
quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Captura o input selecionado de forma robusta
    const opcaoSelecionada = document.querySelector('input[name="quiz-input"]:checked');
    
    // Validação de segurança para impedir o envio nulo
    if (!opcaoSelecionada) {
        resultadoQuiz.textContent = "⚠️ Por favor, escolha uma das alternativas antes de submeter!";
        resultadoQuiz.className = "erro";
        return;
    }
    
    // Processamento lógico antes da exibição física na tela
    const ehCorreta = opcaoSelecionada.value === "true";
    const mensagemFinal = ehCorreta ? bancoQuestoes.feedbackSucesso : bancoQuestoes.feedbackErro;
    const classeEstilo = ehCorreta ? "sucesso" : "erro";
    
    // Output Dinâmico no Front-End
    resultadoQuiz.textContent = mensagemFinal;
    resultadoQuiz.className = classeEstilo;
});

// Executa a montagem do site assim que o script carrega
inicializarQuiz();
