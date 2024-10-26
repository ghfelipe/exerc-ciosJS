function somaNumerosPares(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            soma += array[i];
        }
    }
    return soma;
}

function calcularSomaPares() {
    const input = document.getElementById("inputArray").value;
    const array = input.split(',').map(Number);

    if (array.some(isNaN)) {
        document.getElementById("resultado").innerText = "Por favor, insira uma lista de números válidos separados por vírgula.";
        return;
    }
    const soma = somaNumerosPares(array);

    document.getElementById("resultado").innerText = 
        `A soma dos números pares é: ${soma}`;
}