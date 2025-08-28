const precoInicial = 20000;
const arCondicionado = 1750;
const pinturaMetalica = 800;
const vidroElétrico = 1200;
const direcaoHidraulica = 2000;

let arCond = "s";
let pintura = "n";
let vidro = "s";
let direcao = "n";
let precoFinal = precoInicial;

if (arCond === "s") {
  precoFinal = precoFinal + arCondicionado;
} else {
  precoFinal = precoFinal + 0;
}
if (pintura === "s") {
  precoFinal = precoFinal + pinturaMetalica;
} else {
  precoFinal = precoFinal + 0;
}
if (vidro === "s") {
  precoFinal = precoFinal + vidroElétrico;
} else {
  precoFinal = precoFinal + 0;
}
if (direcao === "s") {
  precoFinal = precoFinal + direcaoHidraulica;
} else {
  precoFinal = precoFinal + 0;
}
console.log("Preço final = R$ " + precoFinal.toFixed(2));
