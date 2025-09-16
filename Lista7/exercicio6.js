function verificacao(valor) {
    if (valor < 100 || valor > 9999) {
    console.log("Digite um número de 4 dígitos!");
    return;
}
const n1 = Math.trunc(valor / 100);
const n2 = Math.trunc(valor % 100);
const resultado = Math.pow(n1 + n2, 2);
if(resultado == valor){console.log("O número " + valor + " atende a condição");}
if(resultado != valor){console.log("O número " + valor + " não atende a condição");}
}
verificacao(3025);