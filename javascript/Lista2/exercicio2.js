const comissaoTvLCD = 50;
const comissaoTvLED = 60;
const comissaoTvPlasma = 55;
const salarioFixo = 2.000;
let salarioComissao = (10*comissaoTvLCD)+(7*comissaoTvLED)+(15*comissaoTvPlasma);
let salarioTotal = salarioFixo + salarioComissao;
console.log("Salário Total =" + salarioTotal);
