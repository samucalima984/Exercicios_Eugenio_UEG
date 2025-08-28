const litros = 100;
const alcool = 4.805;
const diesel = 5.953;
const gasolina = 6.565;

let opcao = 3;

if (opcao == 1) {
    let conversao = litros * alcool;
    console.log("Valor total: R$" + conversao.toFixed(3));
} else if (opcao == 2) {
    let conversao = litros * diesel;
    console.log("Valor total: R$" + conversao.toFixed(3));
} else if (opcao == 3) {
    let conversao = litros * gasolina;
    console.log("Valor total: R$" + conversao.toFixed(3));
}