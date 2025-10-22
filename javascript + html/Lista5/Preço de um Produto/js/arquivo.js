const opcao = document.getElementById("idInOpcao");
const valor = document.getElementById("idInValor");
const calcularValorProduto = document.getElementById("btnCalculoProduto");
const resultado = document.getElementById("idOnResultado");

function calcularValorFinal(opcao, precoProduto) {
    
const formaPagamento1 = precoProduto - (precoProduto * 0.1);
const formaPagamento2 = precoProduto - (precoProduto * 0.05);
const formaPagamento3 = precoProduto/2;
const formaPagamento4 = (precoProduto + (precoProduto * 0.1))/3;

if (opcao == 1) {
  let valorTotal = formaPagamento1;
  return "Total a pagar: R$" + valorTotal.toFixed(2);
} else if (opcao == 2) {
  let valorTotal = formaPagamento2;
  return "Total a pagar: R$" + valorTotal.toFixed(2);
} else if (opcao == 3) {
  let valorTotal = formaPagamento3;
  return "Total a pagar: Duas parcelas de R$" + valorTotal.toFixed(2);
} else if (opcao == 4) {
  let valorTotal = formaPagamento4;
  return "Total a pagar: Três parcelas de R$" + valorTotal.toFixed(2);
}
}

function eventoBtnCalcularPrecoProduto() {

    const escolha = Number(opcao.value);
    const valorX = Number(valor.value);
    const valorFinal = calcularValorFinal(escolha, valorX);
    const saida = valorFinal;

    resultado.innerText = saida;

}