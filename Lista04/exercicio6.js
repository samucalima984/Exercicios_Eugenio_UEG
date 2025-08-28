const  nome = "Irineu";
const saldoBancario  = 2000;

if(saldoBancario < 1000){
    tarifaBasica = 25;
    console.log("O saldo mensal de " + nome + " atende a condição de CONTA BÁSICA, a tarifa é de R$" + tarifaBasica);}
if(saldoBancario > 1000 &&  saldoBancario <= 2000){
    tarifaPrata = 20;
    console.log("O saldo mensal de " + nome + " atende a condição de CONTA PRATA, a tarifa é de R$" + tarifaPrata);}
    if(saldoBancario > 2000 &&  saldoBancario <= 3500){
    tarifaOuro = 13;
    console.log("O saldo mensal de " + nome + " atende a condição de CONTA OURO, a tarifa é de R$" + tarifaOuro);}
    if(saldoBancario > 3500){
    console.log("O saldo mensal de " + nome + " atende a condição de CONTA PRÊMIO, portanto é ISENTO de tarifa");}
