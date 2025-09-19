const numero = document.getElementById("idInNumero");
const btnVerificarNumero = document.getElementById("btnVerificarNumero");
const resultado = document.getElementById("idOnResultado");

function verificarCondicao(n) {
    
const n1 = Math.trunc(n / 100);
const n2 = Math.trunc(n % 100);
let resultado = Math.pow(n1 + n2, 2);
if(resultado == n) return "atende a condição!";
if(resultado != n) return "não atende a condição!";
}

function eventoBtnVerificarNumero() {

    const numeroX = Number(numero.value);
    const verificarNumero = verificarCondicao(numeroX);
    const saida = "O número " + numero.value + " " + verificarNumero;

    resultado.innerText = saida;
    
}