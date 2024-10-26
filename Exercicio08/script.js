function ehPalindromo(palavra) {
    // Remove espaços e converte para minúsculas
    const palavraNormalizada = palavra.replace(/\s+/g, '').toLowerCase();
    
    // Verifica se a palavra é igual a invertida
    const palavraInvertida = palavraNormalizada.split('').reverse().join('');
    return palavraNormalizada === palavraInvertida;
}

function verificarPalindromo() {
    const palavra = document.getElementById("inputPalavra").value;
    const resultado = ehPalindromo(palavra);

    document.getElementById("resultado").innerText = 
        resultado ? `"${palavra}" é um palíndromo.` : `"${palavra}" não é um palíndromo.`;
}