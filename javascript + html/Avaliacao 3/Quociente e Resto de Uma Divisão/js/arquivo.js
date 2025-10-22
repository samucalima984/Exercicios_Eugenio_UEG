const primeiroNumero = document.getElementById("idInN1");
const segundoNumero = document.getElementById("idInN2");
const resultado = document.getElementById("idOnResultado");

function calcularQuociente(numero1, numero2) {
    
    let quociente = 0;

    while (numero1 >= numero2) {
        numero1 = numero1 - numero2;
        quociente = quociente + 1;
    }
    return quociente;
}

function calcularResto(numero1, numero2) {

    while (numero1 >= numero2) {
        numero1 = numero1 - numero2;
    }
    return numero1;
}

function acaoBotaoExecutar() {

    const numero1 = Number(primeiroNumero.value);
    const numero2 = Number(segundoNumero.value);
    const saida = "Quociente: " + calcularQuociente(numero1, numero2) + "\n Resto: " + calcularResto(numero1, numero2);

    resultado.innerText = saida;

}