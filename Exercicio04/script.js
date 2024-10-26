function converterParaCaixaAlta(texto) {
    return texto.toUpperCase();
}

function mostrarTextoConvertido() {
    const texto = document.getElementById("Texto").value;
    const textoConvertido = converterParaCaixaAlta(texto);

    document.getElementById("resultado").innerText = textoConvertido;
}