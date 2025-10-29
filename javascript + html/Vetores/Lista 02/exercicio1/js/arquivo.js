const resultadoA = document.getElementById("idConjuntoA");
const resultadoB = document.getElementById("idConjuntoB");
const resultadoC = document.getElementById("idConjuntoC");

let conjuntoA = [];
let conjuntoB = [];
let conjuntoC = [];

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function gerarConjuntoA() {

  conjuntoA = [];

  for (let vetor = 0; vetor < 10; vetor++) {
    conjuntoA[vetor] = gerarNumeroAleatorio();
  }
  resultadoA.innerText = "Conjunto A: " + conjuntoA.join(" | ");
  resultadoC.innerText = "";
}

function gerarConjuntoB() {

  conjuntoB = [];

  for (let vetor = 0; vetor < 10; vetor++) {
    conjuntoB[vetor] = gerarNumeroAleatorio();
  }
  resultadoB.innerText = "Conjunto B: " + conjuntoB.join(" | ");
  resultadoC.innerText = "";
}

function gerarConjuntoIntercalado() {

  if (conjuntoA.length === 0 || conjuntoB.length === 0) {
    resultadoC.innerText = "Gere os conjuntos A e B antes de intercalar.";
    return;
  }
    
  conjuntoC = [];
  let posicao = 0;

  for (let vetor = 0; vetor < 10; vetor++) {
    conjuntoC[posicao] = conjuntoA[vetor];
    posicao++;
    conjuntoC[posicao] = conjuntoB[vetor];
    posicao++;
  }

  resultadoC.innerText = "Conjunto Intercalado: " + conjuntoC.join(" | ");
}