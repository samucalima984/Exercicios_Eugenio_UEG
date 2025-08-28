const consumoMedio = 12.5;
const precoLitro = 6.44;
const tempoDeViagem = 4;
const velocidadeMedia = 100;
let distancia = tempoDeViagem*velocidadeMedia;
let quantidadeDeLitros = distancia/consumoMedio;
let custo = quantidadeDeLitros*precoLitro;
console.log("Custo da Viagem = R$" + custo);