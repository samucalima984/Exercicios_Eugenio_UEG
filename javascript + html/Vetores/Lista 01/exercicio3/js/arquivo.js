const resultadoC = document.getElementById("idOnResultado");
const saidaC = document.getElementById("idOnSaida");

let arrayNumeros = [];

function gerarConjunto() {
  
    arrayNumeros = [];

  for (let contador = 0; contador < 10; contador++) {
    const numero = Math.floor(Math.random() * 100) + 1;
    arrayNumeros.push(numero);
  }

  resultadoC.innerText = "Conjunto Aleatório: " + arrayNumeros.join(" | ");
  saidaC.innerText = " ";
}

function verificarNumeroPrimo(n) {

  if (n < 2) return false;

  for (let contador = 2; contador <= Math.sqrt(n); contador++) {
    if (n % contador == 0) return false;
  }
  return true;
}

function acaoBotaoImprimirNumerosPrimos() {
  
  const numerosPrimos = [];

  for (let valor of arrayNumeros) {
    if (verificarNumeroPrimo(valor)) {
      numerosPrimos.push(valor);
    }
  }

  if (numerosPrimos.length == 0) {
    saidaC.innerText = "Não há números primos no conjunto.";
  } else {
    saidaC.innerText = "Números primos no conjunto: " + numerosPrimos.join(" | ");
  }
}