function inversao(valor) {
   if (valor < 100 || valor > 999) {
    console.log("Digite um número de 3 dígitos!");
    return;
}
let unidade = valor % 10;
let dezena = Math.floor((valor % 100) /10);
let centena = Math.floor((valor % 1000) /100);
let resultado = unidade * 100 + dezena * 10 + centena;

console.log("Resultado: " + resultado);
}
inversao(321);
