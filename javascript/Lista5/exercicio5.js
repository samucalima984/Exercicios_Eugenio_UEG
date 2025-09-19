const precoProduto = 250;
const formaPagamento1 = precoProduto - (precoProduto * 0.1);
const formaPagamento2 = precoProduto - (precoProduto * 0.05);
const formaPagamento3 = precoProduto/2;
const formaPagamento4 = (precoProduto + (precoProduto * 0.1))/3;

let opcao = 3; 

if (opcao == 1) {
  let valorTotal = formaPagamento1;
  console.log("Total a pagar: R$" + valorTotal.toFixed(2));
} else if (opcao == 2) {
  let valorTotal = formaPagamento2;
  console.log("Total a pagar: R$" + valorTotal.toFixed(2));
} else if (opcao == 3) {
  let valorTotal = formaPagamento3;
  console.log("Total a pagar: Duas parcelas de R$" + valorTotal.toFixed(2));
} else if (opcao == 4) {
  let valorTotal = formaPagamento4;
  console.log("Total a pagar: Três parcelas de R$" + valorTotal.toFixed(2));
}