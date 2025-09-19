function quadradoPerfeito(valor) {

let raiz = Math.trunc(Math.sqrt(valor));
  if (Math.pow(raiz,2) == valor) {
    console.log("É QUADRADO PERFEITO");
  } else {
    console.log("NÃO É QUADRADO PERFEITO");
  }
}
quadradoPerfeito(25);