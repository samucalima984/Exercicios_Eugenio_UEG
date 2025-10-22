const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function gerarDivisores(numero){

    let saida = "";
    let valor = 1;

    do{
        if (numero % valor == 0) {
            divisao = numero / valor;
            saida += + valor + "\n"; 
        } valor++;
    }
    while(valor <= numero)
    return saida;
}

function acaoBotaoExecutar(){
    const n = numero.value;
    let saida = "Divisores de " + n + ":" + "\n";
    saida += gerarDivisores(n);
    resultado.innerText = saida;
}