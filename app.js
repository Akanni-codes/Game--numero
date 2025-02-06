let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela ('h1', 'Jogo do numero secreto');
exibirTextoNaTela ('p', 'Escolha um numero de 1 a 10');


function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentaviva = tentativas > 1 ? 'tentativas' : tentativas;
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentaviva}!`;
        exibirTextoNaTela('p', mensagemTentativas)
     } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O numero secreto é menor');
            } else {
                exibirTextoNaTela('p', 'O numero é maior');
            }
            tentativas++;
        }
    
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
};