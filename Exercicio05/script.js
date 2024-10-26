// Função para verificar se um número é primo
function primo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true; // 2 é o único número primo par
    if (numero % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Função para capturar o número inserido pelo usuário e exibir o resultado
function verificarNumeroPrimo() {
    const numero = parseInt(document.getElementById("inputNumero").value);
    const resultado = primo(numero);

    document.getElementById("resultado").innerText = 
        resultado ? `${numero} é um número primo.` : `${numero} não é um número primo.`;
}