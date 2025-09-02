const a = 1;
const b =2;
const c = 3;
let calculo = Math.pow(b,2) - 4 * a * c;

if(calculo < 0){console.log("A raiz é IMAGINÁRIA")}
if(calculo == 0){console.log("A raiz é ÚNICA")}
if(calculo > 0){console.log("A raiz é DISTINTA")}
