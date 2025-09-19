const custoAluminio = 155
const raio = 0.3;
const altura = 0.5;
let areaBase = Math.PI * Math.pow(raio, 2) * 2;
let areaLado = 2 * Math.PI * raio * altura;
let areaLata = areaBase + areaLado;
let custoLata = custoAluminio * areaLata;
console.log("Custo da lata = R$" + custoLata.toFixed(2)); 