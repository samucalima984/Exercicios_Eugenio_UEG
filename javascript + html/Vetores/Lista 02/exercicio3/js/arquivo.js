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

function calcularProdutoEscalar(conjuntoA, conjuntoB) {

  let multiplicacoes = [];
  let resultadoMultiplicacoes = [];
  let produtoEscalar = 0;

  for (let vetor = 0; vetor < 5; vetor++) {
    let produto = conjuntoA[vetor] * conjuntoB[vetor];
    multiplicacoes.push(conjuntoA[vetor] + " * " + conjuntoB[vetor]);
    resultadoMultiplicacoes.push(produto);
    produtoEscalar += produto;
  }

  return [multiplicacoes, resultadoMultiplicacoes, produtoEscalar];
}

function acaoBotaoExibirProdutoEscalar() {
  
  if (conjuntoA.length === 0 || conjuntoB.length === 0) {
    resultadoC.innerText = "Gere os conjuntos A e B antes de calcular o produto escalar.";
    return;
  }

  const calculo = calcularProdutoEscalar(conjuntoA, conjuntoB);
  const multiplicacoes = calculo[0];
  const resultadoMultiplicacoes = calculo[1];
  const resultadoFinal = calculo[2];

  resultadoC.innerText =
    "Produto Escalar = " +
    multiplicacoes.join(" + ") +
    " = " +
    resultadoMultiplicacoes.join(" + ") +
    " = " +
    resultadoFinal;
}