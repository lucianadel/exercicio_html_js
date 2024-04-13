
// Obtém o elemento HTML com o ID "formulario".
const formulario = document.getElementById('formulario');

// Obtém o elemento HTML com o ID "formulario".
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

// Obtém o elemento HTML com o ID "campoB".
const mensagemErro = document.getElementById('erro');
const mensagemSucesso = document.getElementById('sucesso');


// Adiciona um evento de escuta ao formulário para o evento "submit". A função anônima será executada quando o formulário for submetido.
formulario.addEventListener('submit', function (event) {

    event.preventDefault(); // Evita o envio padrão do formulário

    // Converte o valor do campo A para um número decimal.
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);


    // Se o valor B for maior que o valor A, o código dentro do bloco if será executado.
    if (valorB > valorA) {
        mensagemErro.textContent = '';
        mensagemSucesso.textContent = 'Formulário válido! O valor B é maior que o valor A.';

        // Se a condição do if for falsa, o código dentro do bloco else será executado.
    } else {
        mensagemSucesso.textContent = '';
        // Define o texto da mensagem como "Formulário inválido! O valor B deve ser maior que o valor A.".
        mensagemErro.textContent = 'Formulário inválido! O valor B deve ser maior que o valor A.';
    }
});
