const ladoA = document.getElementById("idInLadoA");
const ladoB = document.getElementById("idInLadoB");
const ladoC = document.getElementById("idInLadoC");
const verificarTriangulo = document.getElementById("btnVerificarTriangulo");
const resultado = document.getElementById("idOnResultado");

function verificacao(a, b, c) {
    
if (a < b + c && b < a + c && c < a + c) {
  
  if (a == b && b == c) {
    return "Triângulo Equilátero";
  } else if (a == b || a == c || b == c) {
    return "Triângulo Isósceles";
  } else {
    return "Triângulo Escaleno";
  }
} else {
   return "Não é um triângulo";
}

}

function eventoBtnVerificarTriangulo() {

    const lA = Number(ladoA.value);
    const lB = Number(ladoB.value);
    const lC = Number(ladoC.value);
    const verificarNumero = verificacao(lA, lB, lC);
    const saida = verificarNumero;

    resultado.innerText = saida;

}