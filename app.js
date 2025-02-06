let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
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
    return parseInt(Math.random() * 10 + 1);
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