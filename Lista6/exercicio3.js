const n1 = 5;
const n2 = 10;
let operacaoAritmetica = "+";
strOperacao = "";

switch (operacaoAritmetica) {
    case "+":
    strOperacao = "Adição";
    calculo = n1 + n2;    
        break;
    case "-":
    strOperacao = "Subtração";
    calculo = n1 - n2;    
        break;
    case "*":
    strOperacao = "Multiplicação";
    calculo = n1 * n2;    
        break;
    case "/":
    strOperacao = "Divisão";
    calculo = n1 / n2;    
        break;            

    default:
        strOperacao = "Tipo de operação inválido";
        calculo = 0; 
}
const saida1 = "Tipo de operação: " + strOperacao;
const saida2 = "Resultado: " + calculo;
console.log(saida1 + "\n" + saida2);