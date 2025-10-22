const opcao = document.getElementById("idInOpcao");
const valor = document.getElementById("idInValor");
const converterMoeda = document.getElementById("btnConverterMoeda");
const resultado = document.getElementById("idOnResultado");

function conversao(opcao, valorReais) {
    
const valorEuro = 5.418;
const valorLibra = 6.336;
const valorDolar = 5.189;


if (opcao == 1) {
  let convertido = valorReais / valorEuro;
  return "Valor em Euros: € " + convertido.toFixed(3);
} else if (opcao == 2) {
  let convertido = valorReais / valorLibra;
  return "Valor em Libras: £ " + convertido.toFixed(3);
} else if (opcao == 3) {
  let convertido = valorReais / valorDolar;
   return "Valor em Dólares: US$ " + convertido.toFixed(3);
}
}

function eventoBtnConverterMoeda() {

    const escolha = Number(opcao.value);
    const valorX = Number(valor.value);
    const moedaConvertida = conversao(escolha, valorX);
    const saida = moedaConvertida;

    resultado.innerText = saida;

}