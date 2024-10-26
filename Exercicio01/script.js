// Função de boas-vindas
function BoasVindas() {
    const name = prompt("Qual o seu nome?");

    if (name) {
        alert(`Bem Vindo(a), ${name} ao nosso site`);
    } else {
        alert("Bem Vindo(a), ao nosso site");
    }
}

// Chama a função BoasVindas quando a página é carregada
window.onload = BoasVindas;