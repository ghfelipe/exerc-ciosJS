function calcularAcrescimo(valor, porcentagem) {
    return valor + (valor * (porcentagem / 100));
}

function calcularValorComPorcentagem() {
    const valor = parseFloat(document.getElementById("inputValor").value);
    const porcentagem = parseFloat(document.getElementById("inputPorcentagem").value);

    // Verifica se os valores são válidos
    if (isNaN(valor) || isNaN(porcentagem)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }
    const valorComAcrescimo = calcularAcrescimo(valor, porcentagem);

    document.getElementById("resultado").innerText = 
        `O valor de ${valor} acrescido de ${porcentagem}% é: ${valorComAcrescimo.toFixed(2)}`;
}