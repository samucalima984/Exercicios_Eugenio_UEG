function pesoIdeal(altura, sexo) {
    
    if(sexo = 1){
        peso = 72.7 * altura - 58;
    }
    if(sexo = 2) {
        peso = 62.1 * altura - 44.7;
    }
    return peso;
}
console.log("Seu peso ideal é: " + pesoIdeal(1.74, 2).toFixed(2));