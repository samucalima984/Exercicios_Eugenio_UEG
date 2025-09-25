const numero = document.getElementById("idInNumero");
const verificarNumero = document.getElementById("btnVerificarNumero");
const resultado = document.getElementById("idOnResultado");

function verificacao(n) {
    
let raiz = Math.trunc(Math.sqrt(n));

  if (Math.pow(raiz,2) == n) return "É QUADRADO PERFEITO";
  if (Math.pow(raiz,2) != n) return "NÃO É QUADRADO PERFEITO";

}

function eventoBtnVerificarQuadradoPerfeito() {

    const nX = Number(numero.value);
    const verificarNumero = verificacao(nX);
    const saida = "O número " + numero.value + " " + verificarNumero;

    resultado.innerText = saida;

}