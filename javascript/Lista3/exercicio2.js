const iPopular = 5;
const iGeral = 10;
const iArquibancada = 20;
const iCadeiras = 40;
const publico = 40000;
let rendaGreal = (publico * 0.10 * 5) + (publico * 0.50 * 10) + (publico * 0.30 * 20) + (publico * 0.10 * 40);
console.log("Renda total = R$" + rendaGreal.toFixed(2)); 