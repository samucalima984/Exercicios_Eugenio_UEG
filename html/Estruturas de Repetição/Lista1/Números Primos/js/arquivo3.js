const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function ehPrimo(n) {
    if (n <= 1) return false;

    let i = 2;
    do {
        if (n % i === 0) {
            return false;
        }
        i++;
    } while (i <= Math.sqrt(n)); 

    return true;
}

function verificarNumeroPrimo(n) {
    if (!Number.isInteger(n) || n <= 0) {
        return "Digite um número inteiro positivo!";
    }

    if (ehPrimo(n)) {
        return n + " é um número Primo";
    } else {
        return n + " não é um número Primo";
    }
}

function acaoBotaoExecutar() {
    const n = parseInt(numero.value);
    const saida = verificarNumeroPrimo(n);
    resultado.innerText = saida;
}