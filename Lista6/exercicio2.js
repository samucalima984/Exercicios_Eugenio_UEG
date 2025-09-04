const precoProduto = 250;
let formaPagamento = 1;
strFormaPagamento = "";


switch (formaPagamento) {
    case 1:
      strFormaPagamento = "1";
      resposta = "R$";
      valorTotal = precoProduto - (precoProduto * 0.1);  
        break;
    case 2:
    strFormaPagamento = "2";
    resposta = "R$";
    valorTotal = precoProduto - (precoProduto * 0.05);
        break;
    case 3:
    strFormaPagamento = "3";
    resposta = "Duas parcelas de R$";
    valorTotal = precoProduto/2;
        break;
    case 4:
    strFormaPagamento = "4";
    resposta = "Três parcelas de R$";
    valorTotal = (precoProduto + (precoProduto * 0.1))/3;
        break;    
        default:
        strFormaPagamento = "Forma de pagemento inválido";
        valorTotal = 0;   
}
const saida1 = "Forma de pagamento: " + strFormaPagamento;
const saida2 = "Valor a ser pago: " + resposta + valorTotal.toFixed(2);
console.log(saida1 + "\n" + saida2);