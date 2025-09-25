const valorCarro = document.getElementById("idInValorCarro");
const valorArCondicionado = document.getElementById("idInAr");
const valorPinturaMetalica = document.getElementById("idInPintura");
const valorVidroEletrico = document.getElementById("idInVidro");
const valorDirecaoHidraulica = document.getElementById("idInDirecao");
const calcularValorCarro = document.getElementById("btnValorCarro");
const resultado = document.getElementById("idOnResultado");

function calculoValorCarro(arCond, pintura, vidro, direcao, valor) {

const arCondicionado = 1750;
const pinturaMetalica = 800;
const vidroElétrico = 1200;
const direcaoHidraulica = 2000;

let precoFinal = valor;

if (arCond == "s") {
  precoFinal = precoFinal + arCondicionado;
} 
if (pintura == "s") {
  precoFinal = precoFinal + pinturaMetalica;
} 
if (vidro == "s") {
  precoFinal = precoFinal + vidroElétrico;
} 
if (direcao == "s") {
  precoFinal = precoFinal + direcaoHidraulica;
} 
return precoFinal.toFixed(2);
}

function eventoBtnCalcularValorCarro() {
  
    const vA = valorArCondicionado.value;
    const vP = valorPinturaMetalica.value;
    const vV = valorVidroEletrico.value;
    const vH = valorDirecaoHidraulica.value;
    const vCarro = Number(valorCarro.value);
    const calculoValorFinal = calculoValorCarro(vA, vP, vV, vH, vCarro);
    const saida = " Preço Final = R$ " + calculoValorFinal;

    resultado.innerText = saida;

}