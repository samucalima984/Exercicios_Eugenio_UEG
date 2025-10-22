const numero1 = document.getElementById("idInNumero1");
const numero2 = document.getElementById("idInNumero2");
const numero3 = document.getElementById("idInNumero3");
const numero4 = document.getElementById("idInNumero4");
const resultado = document.getElementById("idOnResultado");

function calcularSoma(n1, n2, n3, n4) {
    
    let maior;

    if (n1 >= n2 && n1 >= n3 && n1 >= n4) {
        maior = n1;
    } else if (n2 >= n1 && n2 >= n3 && n2 >= n4) {
        maior = n2;
    } else if (n3 >= n1 && n3 >= n2 && n3 >= n4) {
        maior = n3;
    } else {
        maior = n4;
    }
    const somaTotal = n1 + n2 + n3 + n4;
    return somaTotal - maior;
}

function eventoBtnCalcularMenorNumero(){
    const valor1 = Number(numero1.value);
    const valor2 = Number(numero2.value);
    const valor3 = Number(numero3.value);
    const valor4 = Number(numero4.value);
    const saida = "Soma dos Três Menores Dígitos = " + calcularSoma(valor1, valor2, valor3, valor4);

    resultado.innerText = saida;
}