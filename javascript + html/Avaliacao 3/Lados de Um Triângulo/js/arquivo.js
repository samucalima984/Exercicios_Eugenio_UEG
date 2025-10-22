const ladoA = document.getElementById("idInLadoA");
const ladoB = document.getElementById("idInLadoB");
const ladoC = document.getElementById("idInLadoC");
const resultado = document.getElementById("idOnResultado");

function verificarTriangulo(a, b, c) {

    const a2 = Math.pow(a, 2);
    const b2 = Math.pow(b, 2);
    const c2 = Math.pow(c, 2);

    let tipoTriangulo = " ";

    if (a2 == b2 + c2) {
        tipoTriangulo = "Triângulo Retângulo";
    
    } else if (a2 > b2 + c2) {
        tipoTriangulo = "Triângulo Obtusângulo";

    } else if (a2 < b2 + c2) {
        tipoTriangulo = "Triângulo Acutângulo";
    }

    return tipoTriangulo;
}

function acaoBotaoExecutar() {

    const ladoAx = Number(ladoA.value);
    const ladoBy = Number(ladoB.value);
    const ladoCz = Number(ladoC.value);
    const verificarNumero = verificarTriangulo(ladoAx, ladoBy, ladoCz);
    const saida = verificarNumero;

    resultado.innerText = saida;

}