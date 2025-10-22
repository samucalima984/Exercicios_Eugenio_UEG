const nome = document.getElementById("idInNome");
const peso = document.getElementById("idInPeso");
const resultado = document.getElementById("idOnResultado");

function calcularPeso(peso) {
    
    const pJupiter = (peso * 2.64)/9.87;
    return pJupiter;

}

function eventoBtnExecutar() {

    const p = Number(peso.value);
    const calculo = calcularPeso(p);
    const saida = "O Peso do Usuário " + nome.value + " em Júpiter seria: " + calculo.toFixed(2) + "kg";
    
    resultado.innerText = saida;
}