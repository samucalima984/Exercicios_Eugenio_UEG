const valorPrestacao = 500;
const taxaJuros = 50;
const tempoAtraso = 30;
let valorAtualizadoPretacao = valorPrestacao + (valorPrestacao * (taxaJuros/100) * tempoAtraso);
console.log("Valor da prestação atrasada = R$" + valorAtualizadoPretacao);