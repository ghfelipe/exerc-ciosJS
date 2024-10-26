function converterParaBinario(numero) {
    return numero.toString(2);
}

function converterInputParaBinario() {
    const numero = parseInt(document.getElementById("inputNumero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").innerText = "Por favor, insira um número válido.";
        return;
    }
    const binario = converterParaBinario(numero);

    document.getElementById("resultado").innerText = 
        `A representação binária de ${numero} é: ${binario}`;
}