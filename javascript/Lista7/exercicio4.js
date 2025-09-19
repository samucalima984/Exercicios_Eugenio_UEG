function valorAtualizado(v1, v2, v3) {
    return v1 + (v1 * (v2/100) * v3);
    
}
const valorPretacao = 2000;
const taxaJuros = 5;
const tempoAtraso = 3;
console.log("Resultado: " + valorAtualizado(valorPretacao, taxaJuros, tempoAtraso));