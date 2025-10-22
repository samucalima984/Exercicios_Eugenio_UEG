const primeiroNumero = document.getElementById("idInNumero1");
const segundoNumero = document.getElementById("idInNumero2");
const terceiroNumero = document.getElementById("idInNumero3");
const btnVerificarRaiz = document.getElementById("btnVerificarRaiz");
const resultado = document.getElementById("idOnResultado");

function verificarRaiz(a, b, c) {
    
let calculo = Math.pow(b,2) - 4 * a * c;

if(calculo < 0) return "IMAGINÁRIA";
if(calculo == 0) return "ÚNICA";
if(calculo > 0) return "DISTINTA";
}

function eventoBtnVerificarRaiz() {

    const nA = Number(primeiroNumero.value);
    const nB = Number(segundoNumero.value);
    const nC = Number(terceiroNumero.value);
    const verificacao = verificarRaiz(nA, nB, nC);
    const saida = "A raiz é: " + verificacao;

    resultado.innerText = saida;

}