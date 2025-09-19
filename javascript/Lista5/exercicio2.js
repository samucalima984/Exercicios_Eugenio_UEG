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
} 
if (pintura === "s") {
  precoFinal = precoFinal + pinturaMetalica;
} 
if (vidro === "s") {
  precoFinal = precoFinal + vidroElétrico;
} 
if (direcao === "s") {
  precoFinal = precoFinal + direcaoHidraulica;
} 
console.log("Preço final = R$ " + precoFinal.toFixed(2));
