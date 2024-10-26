function inverterPalavra(palavra) {
    return palavra.split('').reverse().join('');
}

function inverterInputPalavra() {
    const palavra = document.getElementById("inputPalavra").value;

    if (!palavra) {
        document.getElementById("resultado").innerText = "Por favor, insira uma palavra.";
        return;
    }
    const palavraInvertida = inverterPalavra(palavra);

    document.getElementById("resultado").innerText = 
        `A palavra invertida é: ${palavraInvertida}`;
}