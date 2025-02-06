let listadeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Femela', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do numero secreto');
    exibirTextoNaTela ('p', 'Escolha um numero de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentaviva = tentativas > 1 ? 'tentativas' : tentativas;
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentaviva}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O numero secreto é menor');
            } else {
                exibirTextoNaTela('p', 'O numero é maior');
            }
            tentativas++;
            limparCampo()
        }
    
}

function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadedeElementonaLista = listadeNumerosSorteados.length;

    if (quantidadedeElementonaLista == numeroLimite) {
        listadeNumerosSorteados = []
    }

    if (listadeNumerosSorteados.includes(numeroEscolido)){
        return gerarNumeroAleatorio();
    } else {
        listadeNumerosSorteados.push(numeroEscolido);
        return numeroEscolido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
     chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disable', true);
}