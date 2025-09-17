function nPalindromo(n) {
    if (n < 10000 || n > 99999) {
        return false;
    }

    const d1 = Math.floor(n / 10000) % 10;      
    const d2 = Math.floor(n / 1000) % 10;       
    const d4 = Math.floor(n/ 10) % 10;         
    const d5 = n % 10;                          
    return d1 == d5 && d2 == d4;
}
const numero = 12321;
if (nPalindromo(numero)) {
    console.log("É um número palíndromo");
} else {
    console.log("Não é um número palíndromo");
}