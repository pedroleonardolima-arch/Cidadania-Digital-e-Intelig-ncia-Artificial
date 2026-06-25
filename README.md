
# Portal de Consciência Digital: IA e Desinformação 🌐🔒

#cidadaniadigital2026

Portal web interativo de alto desempenho focado na conscientização comunitária sobre os impactos das mídias manipuladas por Inteligência Artificial (Deepfakes) e no combate à desinformação automatizada. Projeto prático desenvolvido para a disciplina de Educação Digital e IA do Ensino Médio.

---

## 🛠️ Recursos de Engenharia e Performance (Nível 4)

- **Arquitetura Dinâmica de Dados (JS):** O quiz não é estático no HTML. Ele utiliza uma estrutura de objetos (`Data Object`) em JavaScript que renderiza as perguntas e alternativas de forma 100% dinâmica no DOM, permitindo escalabilidade futura do portal.
- **Persistência de Estado (Acessibilidade):** O alternador de Modo Escuro e Modo Claro utiliza `localStorage` do navegador. Isso significa que o site memoriza a preferência visual do usuário mesmo se a página for fechada ou atualizada.
- **UI Moderno com Microinterações:** Sistema de design baseado em variáveis CSS estruturadas (`:root`), efeitos de transição cúbica (`cubic-bezier`) para animações mais suaves, efeito de foco avançado nos inputs de rádio (`:has(input:checked)`) e deslocamento visual (`transform: translateX`) nas opções.
- **Responsividade Fluida:** Layout adaptável via Media Queries que reorganiza o tamanho dos componentes e a orientação dos botões para visualização perfeita em smartphones e tablets.

---

## 📁 Organização Estruturada do Repositório

O projeto segue as diretrizes rígidas de organização e separação de conceitos do mercado de desenvolvimento:

```text
├── index.html          # Estrutura semântica e acessível (tags ARIA)
├── css/
│   └── style.css       # Sistema de design, temas visuais e responsividade
└── js/
    └── script.js       # Motor dinâmico do quiz e persistência de dados
