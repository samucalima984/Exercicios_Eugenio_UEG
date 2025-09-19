const precoProduto = 100;
const quantProduto = 15;
let corEtiqueta = "Amarelo";

switch (corEtiqueta) {
    case "Verde":
    if(quantProduto <= 10){
        novoPreco = precoProduto - (precoProduto * 0.05);
    }
    if(quantProduto > 10){
        novoPreco = precoProduto - (precoProduto * 0.10);
    }    
        break;

    case "Amarelo":
    if(quantProduto <= 5){
        novoPreco = precoProduto - (precoProduto * 0.15);
    }
    if(quantProduto > 10){
        novoPreco = precoProduto - (precoProduto * 0.20);
    }    
        break;    

    default:
    corEtiqueta = "Cor de etiqueta inválido";
    novoPreco = 0;
}
saida1 = "Cor da Eiqueta: " + corEtiqueta;
saida2 = "Quantidade de Produtos: " + quantProduto;
saida3 = "Preço com Desconto: " + novoPreco.toFixed(2);
console.log(saida1 + "\n" + saida2 + "\n" + saida3);