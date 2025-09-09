function delta(valorA, valorB, valorC) {
    return Math.pow(valorB, 2) - 4 * valorA * valorC;
}
const a = 3;
const b = 9;
const c = 5;
const resultado = delta(a, b, c);
console.log("Delta: " + resultado);