const salarioMinimo = 1518;
const valorQuilowatt = salarioMinimo / 4;
let quantQuilowwat = 200 * valorQuilowatt;
let valorDescontado = quantQuilowwat - (quantQuilowwat * 0.25);

const saida1 = "Valor do quilowatt: R$" + valorQuilowatt.toFixed(2);
const saida2 = "Valor consumido pela empresa: R$" + quantQuilowwat;
const saida3 = "Valor descontado: R$" + valorDescontado.toFixed(2);
console.log(saida1 + "\n" + saida2 + "\n" + saida3);