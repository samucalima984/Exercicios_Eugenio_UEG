const taxa = 0.5;
const aplicMensal = 0.01;
const nMeses = 12;
let valorAcumulado = ((Math.pow(1 + taxa, nMeses)-1)/taxa)*aplicMensal;
console.log("Valor acumulado é = " + valorAcumulado.toFixed(2));