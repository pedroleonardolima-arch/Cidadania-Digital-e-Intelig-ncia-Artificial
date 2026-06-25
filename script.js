// ==========================================
// SELEÇÃO DE ELEMENTOS DO DOM (HTML)
// ==========================================
const btnAcessibilidade = document.getElementById('btn-acessibilidade');
const quizForm = document.getElementById('quiz-form');
const resultadoQuiz = document.getElementById('resultado-quiz');

// ==========================================
// 1. ACESSIBILIDADE: BOTÃO MODO ESCURO
// ==========================================
btnAcessibilidade.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no corpo do site
    document.body.classList.toggle('dark-mode');
    
    // Atualiza o texto do botão de forma dinâmica para guiar o usuário
    if (document.body.classList.contains('dark-mode')) {
        btnAcessibilidade.textContent = 'Alternar Modo Claro';
    } else {
        btnAcessibilidade.textContent = 'Alternar Modo Escuro';
    }
});

// ==========================================
// 2. INTERATIVIDADE: VALIDADOR DO QUIZ
// ==========================================
quizForm.addEventListener('submit', (event) => {
    // Evita o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    
    // Captura a opção que o usuário selecionou
    const dadosFormulario = new FormData(quizForm);
    const respostaUsuario = dadosFormulario.get('pergunta1');
    
    // Validação caso o usuário clique em enviar sem selecionar nada
    if (!respostaUsuario) {
        resultadoQuiz.textContent = "⚠️ Por favor, selecione uma alternativa antes de verificar!";
        resultadoQuiz.className = "erro";
        return;
    }
    
    // VARIÁVEIS DE PROCESSAMENTO (Exigência do Nível 4)
    let mensagemFeedback = "";
    let classeEstilo = "";
    
    // Lógica para verificar se
