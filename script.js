// Seleção de elementos do DOM
const btnAcessibilidade = document.getElementById('btn-acessibilidade');
const quizForm = document.getElementById('quiz-form');
const resultadoQuiz = document.getElementById('resultado-quiz');

// 1. Funcionalidade de Acessibilidade (Modo Escuro)
btnAcessibilidade.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Altera o texto do botão de acordo com o modo atual
    if (document.body.classList.contains('dark-mode')) {
        btnAcessibilidade.textContent = 'Alternar Modo Claro';
    } else {
        btnAcessibilidade.textContent = 'Alternar Modo Escuro';
    }
});

// 2. Validador do Quiz Anti-Desinformação
quizForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar
    
    // Captura a opção selecionada usando FormData
    const dados = new FormData(quizForm);
    const respostaUsuario = dados.get('pergunta1');
    
    // Validação
    if (!respostaUsuario) {
        resultadoQuiz.textContent = "Por favor, selecione uma alternativa antes de enviar.";
        resultadoQuiz.className = "erro";
        return;
    }
    
    // Processamento de informações em variáveis antes de exibir na tela (Critério Nível 4)
    let mensagemFeedback = "";
    let classeFeedback = "";
    
    if (respostaUsuario === 'correto') {
        mensagemFeedback = "Parabéns! Você acertou. Falhas de sincronia labial e artefatos nas bordas do rosto são os principais indícios de mídias geradas por IA.";
        classeFeedback = "sucesso";
    } else {
        mensagemFeedback = "Resposta incorreta. Dica: observe atentamente os movimentos do rosto e inconsistências de áudio/vídeo.";
        classeFeedback = "erro";
    }
    
    // Exibição dinâmica na tela
    resultadoQuiz.textContent = mensagemFeedback;
    resultadoQuiz.className = classeFeedback; // Remove o 'hidden' e adiciona a classe de estilo
});
