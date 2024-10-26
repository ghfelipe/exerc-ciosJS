function calculaMedia(array) {
    if (array.length === 0) return 0;

    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    return soma / array.length;
}

function interagirComUsuario() {
    const numeros = prompt("Digite uma lista de números separados por vírgula:");
    const arrayDeNumeros = numeros.split(',').map(Number);
    const media = calculaMedia(arrayDeNumeros);

    alert(`A média dos números é: ${media}`);
}

window.onload = interagirComUsuario;