const nome = document.getElementById("idInNome");
const conta = document.getElementById("idInConta");
const saldo = document.getElementById("idInSaldo");
const btnCalcularTarifa = document.getElementById("btnCalcularTarifa");
const resultado = document.getElementById("idOnResultado");

function calculo(saldoBancario) {
    
    if(saldoBancario < 1000){
    tarifaBasica = 25;
    return tarifaBasica;
}
    if(saldoBancario > 1000 &&  saldoBancario <= 2000){
    tarifaPrata = 20;
    return tarifaPrata;
}
    if(saldoBancario > 2000 &&  saldoBancario <= 3500){
    tarifaOuro = 13;
    return tarifaOuro;
}
    if(saldoBancario > 3500){
    return "Atende a condição de CONTA PRÊMIO, portanto é ISENTO de tarifa";
}
}

function eventoBtnCalcularTarifa() {
    
    const saldoU = Number(saldo.value);
    const tarifa = calculo(saldoU);
    const saida = "A tarifa do usuário " + nome.value + " de número " + conta.value + " é de: R$" + tarifa;

    resultado.innerText =saida;

}