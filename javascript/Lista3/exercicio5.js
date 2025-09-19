const custoFabrica = 10000;
const distribuidor = custoFabrica * 0.12;
const impostos = custoFabrica * 0.30;
let custoConsumidor = custoFabrica + distribuidor + impostos;
console.log("Custo do carro = R$" + custoConsumidor); 