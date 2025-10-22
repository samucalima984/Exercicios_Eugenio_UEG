const precoProduto = 100;
classificacao ="";

if(precoProduto <= 50){
    tipo = 1;
}
if(precoProduto > 50 && precoProduto<= 100){
 tipo = 2;
}
if(precoProduto > 100){
    tipo = 3;
}

switch (tipo) {
    case 1:
    novoPreco = precoProduto + (precoProduto * 0.06);
    if(novoPreco <= 90){
        classificacao = "Barato";
    }
        break;
    case 2:
     novoPreco = precoProduto + (precoProduto * 0.15);
     if(novoPreco <= 90){
        classificacao = "Barato"}
     if(novoPreco > 90 && novoPreco <= 220){
     classificacao = "Normal";}
     case 3:
     novoPreco = precoProduto + (precoProduto * 0.20);
     if(novoPreco > 220 && novoPreco <= 300){
        classificacao = "Caro";}
     if(novoPreco > 300){
     classificacao = "Muito Caro";}
       break;

    default:
        classificacao = "Classificação Inválida";
        novoPreco = 0;
        break;
}
const saida1 = "Novo Preço: R$" + novoPreco.toFixed(2);
const saida2 = "Classificação: " + classificacao;
console.log(saida1 + "\n" + saida2);

