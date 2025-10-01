const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function gerarDivisores(numero){

    const n = parseInt(numero)
     if (n <= 0 || !Number.isInteger(n)) {
    return "Digite um número inteiro positivo!";
  }
    let saida = "";
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            saida += numero + " / " + i + " = " + i * numero + "\n";
        }
    }
    return saida;
}

function acaoBotaoExecutar(){
    const n = numero.value;
    let saida = "Divisores de " + n + ":" + "\n";
    saida += gerarDivisores(n);
    resultado.innerText = saida;
}