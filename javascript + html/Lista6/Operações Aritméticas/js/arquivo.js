const opcao = document.getElementById("idInOpcao");
const numero1 = document.getElementById("idInN1");
const numero2 = document.getElementById("idInN2");
const calculoOperacoes = document.getElementById("btnOperacoes");
const resultado = document.getElementById("idOnResultado");

function calcularOperacoes(opcao, n1, n2) {
    
    switch (opcao) {
    case "+":
    calculo = n1 + n2;    
        break;

    case "-":
    calculo = n1 - n2;    
        break;

    case "*":
    calculo = n1 * n2;    
        break;

    case "/":
    calculo = n1 / n2;    
        break;            

    default:
        return "Tipo de Operação Inválida";
}
return `Resultado: ${calculo}`;
}

function eventoBtnCalcularOperacoesAritmeticas() {
    
    const escolha = opcao.value;
    const nX = Number(numero1.value);
    const nY = Number(numero2.value);
    const calculo = calcularOperacoes(escolha, nX, nY);
    const saida = calculo;

    resultado.innerText = saida;
}