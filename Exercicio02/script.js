function verificaPar(num) {
    var num = prompt("digite um Número:");

    if (num % 2 === 0) {
        alert(true);
    } else {
        alert(false);
    }
}

window.onload = verificaPar;