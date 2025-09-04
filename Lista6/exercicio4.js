const quantidadeCombustível = 250;
const tipoCombustível = 3;
let strCombustivel = "";

switch (tipoCombustível) {
    case 1:
      strCombustivel = "Álcool";
      valorPago = quantidadeCombustível * 4.805;  
        break;
    case 2:
    strCombustivel = "Diesel";
    valorPago = quantidadeCombustível * 5.953;
        break;
    case 3:
    strCombustivel = "Gasolina";
    valorPago = quantidadeCombustível * 6.565;
        break;
        default:
        strCombustivel = "Tipo de combustível inválido";
        valorPago = 0;   
}
const saida1 = "Tipo de combustível: " + strCombustivel;
const saida2 = "Valor a ser pago: R$" + valorPago;
console.log(saida1 + "\n" + saida2);

