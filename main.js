function validaFormulario() {
    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;

    if (campoB <= campoA) {
        // Formulário inválido
        document.getElementById("mensagem").innerHTML = "O valor do campo B deve ser maior que o valor do campo A.";
        return false;
    } else {
        // Formulário válido
        document.getElementById("mensagem").innerHTML = "Formulário enviado com sucesso!";
        return true;
    }
}
