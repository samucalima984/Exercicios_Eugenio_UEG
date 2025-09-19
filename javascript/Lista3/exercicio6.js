const n = 123;
let unidade = n % 10;
let dezena = Math.floor((n % 100)/10);
let centena = Math.floor((n % 1000)/100);
let resultado = unidade * 100 + dezena * 10 + centena;
console.log("Resultado = " + resultado);