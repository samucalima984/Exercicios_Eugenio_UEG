const resultadoA = document.getElementById("idConjuntoA");
const resultadoB = document.getElementById("idConjuntoB");
const resultadoC = document.getElementById("idConjuntoC");

let conjuntoA = [];
let conjuntoB = [];

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 20) + 1;
}

function gerarConjuntoA() {
  conjuntoA = [];
  for (let i = 0; i < 5; i++) {
    conjuntoA[i] = gerarNumeroAleatorio();
  }
  resultadoA.innerText = "Conjunto A: " + conjuntoA.join(" | ");
  resultadoC.innerText = "";
}

function gerarConjuntoB() {
  conjuntoB = [];
  for (let i = 0; i < 5; i++) {
    conjuntoB[i] = gerarNumeroAleatorio();
  }
  resultadoB.innerText = "Conjunto B: " + conjuntoB.join(" | ");
  resultadoC.innerText = "";
}


