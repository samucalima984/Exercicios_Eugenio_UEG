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

function calcularProdutoEscalar(conjuntoA, conjuntoB) {
  
  let multiplicacoes = [];
  let resultados = [];
  let produtoEscalar = 0;

  for (let vetor = 0; vetor < 5; vetor++) {
    let produto = conjuntoA[vetor] * conjuntoB[vetor];
    multiplicacoes.push(conjuntoA[vetor] + " * " + conjuntoB[vetor]);
    resultados.push(produto);
    produtoEscalar += produto;
  }

  return [multiplicacoes, resultados, produtoEscalar];
}

function acaoBotaoExecutar() {

  conjuntoA = gerarConjunto();
  conjuntoB = gerarConjunto();

  resultadoA.innerText = "Conjunto A: " + conjuntoA.join(" | ");
  resultadoB.innerText = "Conjunto B: " + conjuntoB.join(" | ");

  let resultado = calcularProdutoEscalar(conjuntoA, conjuntoB);
  let multiplicacoes = resultado[0];
  let resultados = resultado[1];
  let produtoFinal = resultado[2];

  resultadoC.innerText = "Produto Escalar = " + multiplicacoes.join(" + ") + " = " 
  + resultados.join(" + ") + " = " + produtoFinal;
}