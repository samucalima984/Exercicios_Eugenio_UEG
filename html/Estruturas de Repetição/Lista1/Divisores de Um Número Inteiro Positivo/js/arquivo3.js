const numero = document.getElementById("idInNumero");
const resultado = document.getElementById("idOnResultado");

function gerarDivisores(numero){

    const n = parseInt(numero)
     if (n <= 0 || !Number.isInteger(n)) {
    return "Digite um número inteiro positivo!";
  }
    let saida = "";
    let valor = 1;

    do{
        if (n % valor == 0) {
            saida += numero + " / " + valor + " = " + valor * numero + "\n";
            
        } valor++;
    }
    while(valor <= n)
    return saida;
}

function acaoBotaoExecutar(){
    const n = numero.value;
    let saida = "Divisores de " + n + ":" + "\n";
    saida += gerarDivisores(n);
    resultado.innerText = saida;
}