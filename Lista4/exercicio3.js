const n = 3025;
const n1 = Math.trunc(n / 100);
const n2 = Math.trunc(n % 100);
const resultado = Math.pow(n1 + n2, 2);
if(resultado == n){console.log("O número " + n + " atende a condição");}
if(resultado != n){console.log("O número " + n + " não atende a condição");}


