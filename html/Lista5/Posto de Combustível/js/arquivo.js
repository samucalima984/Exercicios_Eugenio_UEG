const opcao = document.getElementById("idInOpcao");
const litros = document.getElementById("idInLitros");
const converterCombustivel = document.getElementById("btnConverterCombustivel");
const resultado = document.getElementById("idOnResultado");

function converterValorCombustivel(opcao, litros) {
    
const alcool = 4.805;
const diesel = 5.953;
const gasolina = 6.565;

if (opcao == 1) {
    let conversao = litros * alcool;
    return "Valor total: R$" + conversao.toFixed(2);
} else if (opcao == 2) {
    let conversao = litros * diesel;
    return "Valor total: R$" + conversao.toFixed(2);
} else if (opcao == 3) {
    let conversao = litros * gasolina;
    return "Valor total: R$" + conversao.toFixed(2);
}
}

function eventoBtnConverterValorCombustivel() {

    const escolha = Number(opcao.value);
    const valorX = Number(litros.value);
    const valorConvertido = converterValorCombustivel(escolha, valorX);
    const saida = valorConvertido;

    resultado.innerText = saida;

}