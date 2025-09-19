const nome = document.getElementById("idInNome");
const peso = document.getElementById("idInPeso");
const altura = document.getElementById("idInAltura");
const btnCalcularIMC = document.getElementById("btnCalcularIMC");
const resultado = document.getElementById("idOnResultado");

function calcularIMC(peso, altura) {

    return (peso / (altura * altura));
}

function eventoBtnCalcularIMC() {
    
    const pesoI = Number(peso.value);
    const alturaN = Number(altura.value);
    const imc = calcularIMC(pesoI, alturaN);
    const saida = "O Paciente " + nome.value + " tem IMC = " + imc.toFixed(2);

    resultado.innerText = saida;
}