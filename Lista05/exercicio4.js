const valorReais = 1000;
const valorEuro = 5.418;
const valorLibra = 6.336;
const valorDolar = 5.189;

let opcao = 2; 

if (opcao == 1) {
  let convertido = valorReais / valorEuro;
  console.log("Valor em Euros: € " + convertido.toFixed(3));
} else if (opcao == 2) {
  let convertido = valorReais / valorLibra;
  console.log("Valor em Libras: £ " + convertido.toFixed(3));
} else if (opcao == 3) {
  let convertido = valorReais / valorDolar;
  console.log("Valor em Dólares: US$ " + convertido.toFixed(3));
}