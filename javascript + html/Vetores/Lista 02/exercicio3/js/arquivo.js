const resultadoA = document.getElementById("idConjuntoA");
const resultadoB = document.getElementById("idConjuntoB");
const resultadoC = document.getElementById("idConjuntoC");

let conjuntoA = [];
let conjuntoB = [];

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 21);
}

function gerarConjuntoA() {
  conjuntoA = [];
  for (let vetor = 0; vetor < 5; vetor++) {
    conjuntoA[vetor] = gerarNumeroAleatorio();
  }
  resultadoA.innerText = "Conjunto A: " + conjuntoA.join(" | ");
  resultadoC.innerText = "";
}

function gerarConjuntoB() {
  conjuntoB = [];
  for (let vetor = 0; vetor < 5; vetor++) {
    conjuntoB[vetor] = gerarNumeroAleatorio();
  }
  resultadoB.innerText = "Conjunto B: " + conjuntoB.join(" | ");
  resultadoC.innerText = "";
}

function calcularProdutoEscalar() {

  if (conjuntoA.length === 0 || conjuntoB.length === 0) {
    resultadoC.innerText = "Gere os conjuntos A e B antes de calcular o produto escalar.";
    return;
  }

  let produtoEscalar = 0;
  let detalhes = [];

  for (let vetor = 0; vetor < 5; vetor++) {
    let produto = conjuntoA[vetor] * conjuntoB[vetor];
    produtoEscalar += produto;
    detalhes.push(conjuntoA[vetor] + " * " + conjuntoB[vetor] + " = " + produto);
  }

  resultadoC.innerText = detalhes.join(" | ") + "\nProduto Escalar = " + produtoEscalar;
}