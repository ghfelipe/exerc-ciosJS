function calcularFatorial(numero) {
    if (numero < 0) return "Fatorial não definido para números negativos.";
    if (numero === 0 || numero === 1) return 1;

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

function calcularInputFatorial() {
    const numero = parseInt(document.getElementById("inputNumero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").innerText = "Por favor, insira um número válido.";
        return;
    }
    const fatorial = calcularFatorial(numero);

    document.getElementById("resultado").innerText = 
        `O fatorial de ${numero} é: ${fatorial}`;
}