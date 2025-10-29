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

function inserirOrdenado(vetor, numero) {
    
  let posicao = 0;

  while (posicao < vetor.length && numero > vetor[posicao]) {
    posicao++;
  }

  for (let deslocamento = vetor.length; deslocamento > posicao; deslocamento--) {
    vetor[deslocamento] = vetor[deslocamento - 1];
  }

  vetor[posicao] = numero;
}

function gerarConjuntoIntercalado() {

  if (conjuntoA.length === 0 || conjuntoB.length === 0) {
    resultadoC.innerText = "Gere os conjuntos A e B antes de intercalar.";
    return;
  }

  conjuntoC = [];

  for (let vetor = 0; vetor < 10; vetor++) {
    inserirOrdenado(conjuntoC, conjuntoA[vetor]);
    inserirOrdenado(conjuntoC, conjuntoB[vetor]);
  }

  resultadoC.innerText = "Conjunto Intercalado (Ordenado): " + conjuntoC.join(" | ");
}