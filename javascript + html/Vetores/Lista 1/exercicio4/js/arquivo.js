const resultadoC = document.getElementById("idOnResultado");
const saidaC = document.getElementById("idOnSaida");

let arrayNumeros = [];

function gerarConjunto() {
  arrayNumeros = [];

  for (let vetor = 0; vetor < 10; vetor++) {
    const numero = Math.floor(Math.random() * 100) + 1;
    arrayNumeros.push(numero);
  }

  resultadoC.innerText = "Conjunto: " + arrayNumeros.join(" | ");
  saidaC.innerText = "";
}

function inverterNumero(numero) {
  
  let numeroOriginal = numero;
  let numeroInvertido = 0;

  while (numeroOriginal > 0) {

    let digito = numeroOriginal % 10;
    numeroInvertido = numeroInvertido * 10 + digito;
    numeroOriginal = Math.floor(numeroOriginal / 10);
  }

  return numeroInvertido;
}

function acaoMostrarNumeroInvertido() {
  let saida = "Vetor - Números Invertidos\n";

  for (let vetor = 0; vetor < arrayNumeros.length; vetor++) {
    const numeroOriginal = arrayNumeros[vetor];
    const numeroInvertido = inverterNumero(numeroOriginal);
    saida += numeroOriginal + " - " + numeroInvertido + "\n";
  }

  saidaC.innerText = saida;
}