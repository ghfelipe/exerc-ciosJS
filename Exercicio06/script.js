function inverterArray(array) {
    return array.reverse();
}

function inverterInputDoUsuario() {
    const inputArray = document.getElementById("inputArray").value;
    const array = inputArray.split(',');
    const arrayInvertido = inverterArray(array);

    document.getElementById("resultado").innerText = 
        `Array invertido: [${arrayInvertido.join(', ')}]`;
}