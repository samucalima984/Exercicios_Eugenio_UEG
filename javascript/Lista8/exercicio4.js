function soma(n1, n2, n3, n4) {
    
    let maior;

    if (n1 >= n2 && n1 >= n3 && n1 >= n4) {
        maior = n1;
    } else if (n2 >= n1 && n2 >= n3 && n2 >= n4) {
        maior = n2;
    } else if (n3 >= n1 && n3 >= n2 && n3 >= n4) {
        maior = n3;
    } else {
        maior = n4;
    }
    const somaTotal = n1 + n2 + n3 + n4;
    return somaTotal - maior;
}
console.log("Soma: " + soma(1, 2, 3, 4));