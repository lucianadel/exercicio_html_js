const formulario = document.getElementById('formulario');

const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

const mensagemErro = document.getElementById('erro');
const mensagemSucesso = document.getElementById('sucesso');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA) {
        mensagemErro.textContent = '';
        mensagemSucesso.textContent = 'Formulário válido! O valor B é maior que o valor A.';
    } else {
        mensagemSucesso.textContent = '';
        mensagemErro.textContent = 'Formulário inválido! O valor B deve ser maior que o valor A.';
    }
});
