let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarUmNumeroAleatorio();
console.log(`número aleatorio é ${numeroAleatorio}`);
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
    {rate:1.2}
}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');

}

exibirTextoNaTela('h1', 'Jogo do número secreto!');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('palpite').setAttribute('disabled', true);
    } else {
        if (chute > numeroAleatorio){
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
    }
    tentativas++;
    limparCampo();
}


function gerarUmNumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
        return gerarUmNumeroAleatorio(); 
    } else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarUmNumeroAleatorio();
    console.log(`número aleatorio é ${numeroAleatorio}`);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('palpite').removeAttribute('disabled');

}