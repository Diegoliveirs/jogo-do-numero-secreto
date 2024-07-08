# Jogo do Número Secreto

Este é um projeto de um jogo interativo onde o jogador deve adivinhar um número secreto escolhido aleatoriamente pelo sistema. O jogo fornece dicas para ajudar o jogador a adivinhar o número correto, informando se o número secreto é maior ou menor que o chute atual.

## Funcionalidades

- **Geração de Números Aleatórios:** O sistema gera um número aleatório entre 1 e 10, que o jogador deve adivinhar.
- **Feedback Interativo:** O jogador recebe feedbacks sobre seu chute, indicando se o número secreto é maior ou menor.
- **Contador de Tentativas:** O jogo conta o número de tentativas até o jogador acertar o número secreto.
- **Mensagens de Voz:** Utiliza a biblioteca `responsiveVoice` para fornecer feedbacks em áudio em Português Brasileiro.
- **Reiniciar Jogo:** O jogador pode reiniciar o jogo após acertar o número secreto.

## Tecnologias Utilizadas

- **HTML:** Para a estrutura do jogo.
- **CSS:** Para a estilização da interface do usuário.
- **JavaScript:** Para a lógica do jogo e interação com o usuário.
- **responsiveVoice:** Para a leitura de textos em voz alta.

## Como Jogar

1. O jogo começa com uma mensagem na tela: "Escolha um número entre 1 e 10."
2. O jogador deve inserir um número no campo de input e clicar no botão de palpite.
3. O jogo dará feedback se o número secreto é maior ou menor que o chute.
4. O jogador continua a adivinhar até encontrar o número correto.
5. Após acertar, o jogo mostra o número de tentativas e oferece a opção de reiniciar.

## Estrutura do Código

- **`gerarUmNumeroAleatorio()`:** Função para gerar um número aleatório entre 1 e 10, garantindo que não haja repetições.
- **`exibirTextoNaTela(tag, texto)`:** Função para exibir textos na tela e fazer a leitura em voz alta.
- **`verificarChute()`:** Função para verificar se o chute do jogador está correto e fornecer feedback.
- **`limparCampo()`:** Função para limpar o campo de input após cada tentativa.
- **`reiniciarJogo()`:** Função para reiniciar o jogo, gerando um novo número aleatório e resetando as tentativas.

## Como Executar

1. Clone o repositório.
   ```sh
   git clone https://github.com/Diegoliveirs/jogo-do-numero-secreto.git
2. Abra o arquivo `index.html` no seu navegador.
