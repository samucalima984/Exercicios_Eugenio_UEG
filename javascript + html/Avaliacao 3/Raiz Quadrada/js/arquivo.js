const numeroC = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function calcularRaizQuadrada(numero) {
    
    let resultado = 0;
    let numeroImpar = 1;

    while (numero >= numeroImpar) {

        numero -= numeroImpar;
        numeroImpar += 2;
        resultado++;
    }

    if (numero == 0) {
        return "A raiz quadrada de " + numeroC.value + " é " + resultado + " exato";
    } else {
        return "A raiz quadrada de " + numeroC.value + " é " + resultado + " aproximadamente";}
}

function acaoBotaoExecutar(){

    const numero = numeroC.value;
    const saida = calcularRaizQuadrada(numero)

    resultado.innerText = saida;
}