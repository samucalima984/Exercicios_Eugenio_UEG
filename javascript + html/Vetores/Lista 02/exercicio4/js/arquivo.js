const resultadoA = document.getElementById("idConjuntoA");
const resultadoB = document.getElementById("idConjuntoB");
const resultadoC = document.getElementById("idConjuntoC");

let conjuntoA = [];
let conjuntoB = [];

function gerarConjunto() {
  let conjunto = [];
  for (let vetor = 0; vetor < 5; vetor++) {
    conjunto.push(Math.floor(Math.random() * 20) + 1);
  }
  return conjunto;
}

function verificarConjuntosIdenticos(conjuntoA, conjuntoB) {

conjuntoA.sort();
conjuntoB.sort();

  for (let vetor = 0; vetor < conjuntoA.length; vetor++) {
    if (conjuntoA[vetor] !== conjuntoB[vetor]) {
      return false;
    }
  }
  return true;
}

function acaoBotaoExecutar() {
  conjuntoA = gerarConjunto();
  conjuntoB = gerarConjunto();

  resultadoA.innerText = "Conjunto A: " + conjuntoA.join(" | ");
  resultadoB.innerText = "Conjunto B: " + conjuntoB.join(" | ");

  let identicos = verificarConjuntosIdenticos(conjuntoA, conjuntoB);

  if (identicos) {
    resultadoC.innerText = "Os conjuntos A e B SÃO idênticos";
  } else {
    resultadoC.innerText = "Os conjuntos A e B NÃO SÃO idênticos";
  }
}
