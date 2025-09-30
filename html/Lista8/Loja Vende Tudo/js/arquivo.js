const corEtiqueta = document.getElementById("idInCorEtiqueta");
const quantidadeProduto = document.getElementById("idInQuantidadeProduto");
const valorUnitario = document.getElementById("idInValorUnitario");
const resultado = document.getElementById("idOnResultado");

function calcularPrecoFinal(corEtiqueta, quantProduto, precoProduto) {

    switch (corEtiqueta) {
    case "verde":
    if(quantProduto <= 10){
        novoPreco = precoProduto - (precoProduto * 0.05);
    }
    if(quantProduto > 10){
        novoPreco = precoProduto - (precoProduto * 0.10);
    }    
        break;

    case "amarelo":
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
precoFinal = quantProduto * novoPreco;
saida1 = "Cor da Etiqueta: " + corEtiqueta;
saida2 = "Quantidade de Produtos: " + quantProduto;
saida3 = "Preço Unitário com Desconto: R$" + novoPreco.toFixed(2);
saida4 = "Preço Final: R$"  + precoFinal.toFixed(2);
return (saida1 + "\n" + saida2 + "\n" + saida3 + "\n" + saida4);
}

function eventoBtnCalcularPrecoFinal() {
    const valorCorEtiqueta = corEtiqueta.value;
    const valorQuantidadeProduto = Number(quantidadeProduto.value);
    const valorValorUnitario = Number(valorUnitario.value);
    const saida = calcularPrecoFinal(valorCorEtiqueta, valorQuantidadeProduto, valorValorUnitario);
    resultado.innerText = saida;
}