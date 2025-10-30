const resultadoC = document.getElementById("idOnResultado");
const saidaC = document.getElementById("idOnSaida");

let arrayNumeros = [];

function gerarConjunto() {
  arrayNumeros = [];

  for (let contador = 0; contador < 10; contador++) {
    const numero = Math.floor(Math.random() * 100) + 1;
    arrayNumeros.push(numero);
  }

  resultadoC.innerText = "Conjunto: " + arrayNumeros.join(" | ");
  saidaC.innerText = " ";
}

function calcularFatorial(n) {

  let resultado = 1;
  for (let contador = 1; contador <= n; contador++) {
    resultado *= contador;
  }
  return resultado;
}

function acaoBotaoImprimirFatoriais() {

  if (arrayNumeros.length == 0) {
    saidaC.innerText = "Gere o conjunto antes de calcular os fatoriais.";
    return;
  }

  let saida = "Número - Fatorial\n";

  for (let valor of arrayNumeros) {
    const fatorial = calcularFatorial(valor);
    saida += valor + " - " + fatorial + "\n";
  }

  saidaC.innerText = saida;
}