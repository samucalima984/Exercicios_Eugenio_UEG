const quantidadeReais = 500;
const tipoMoeda = 4;
let strMoeda = "";

switch (tipoMoeda) {
    case 1:
    strMoeda = "Euro";
    simbolo = "€";
    valorConvertido = quantidadeReais / 6.617;
        break;
    case 2:
    strMoeda = "Libra Esterlina";
    simbolo = "£";
    valorConvertido = quantidadeReais / 6.816;
        break;
    case 3:
    strMoeda = "Dólar";
    simbolo = "$$";
    valorConvertido = quantidadeReais / 5.071;
        break;
    case 4:
    strMoeda = "Iene";
    simbolo = "¥";
    valorConvertido = quantidadeReais / 3.018;
        break;    
        default:
        strMoeda = "Tipo de moeda inválido";
        valorConvertido = 0;   
}
const saida1 = "Tipo de moeda: " + strMoeda;
const saida2 = "Valor a ser pago: " + simbolo + valorConvertido.toFixed(2);             
console.log(saida1 + "\n" + saida2);