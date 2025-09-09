function valorAcumulado(i, n ,p) {
    return ((Math.pow(1 + i, n) -1 ) /i ) * p;
}
const taxa = 0.5;
const aplicMensal = 0.01;
const nMeses = 12;
console.log("Resultado: " + valorAcumulado(taxa, nMeses, aplicMensal).toFixed(2));