const opcao = document.getElementById("idInOpcao");
const nota1 = document.getElementById("idInNota1");
const nota2 = document.getElementById("idInNota2");
const nota3 = document.getElementById("idInNota3");
const calculoMedia = document.getElementById("btnCalculoMedia");
const resultado = document.getElementById("idOnResultado");

function calcularMedias(opcao, n1, n2, n3) {

const nNotas = 3;

if (opcao == 1) {
    let calculo = (n1 + n2 + n3) / nNotas;
    return "Resultado: " + calculo.toFixed(2);
} else if (opcao == 2) {
    let calculo = ((n1 * 3) + (n2 * 3) + (n3 * 4)) / (3 + 3 + 4);
    return "Resultado: " + calculo.toFixed(2);
} else if (opcao == 3) {
    let calculo = nNotas / ((1 / n1) + (1 / n2) + (1 / n3));
    return "Resultado: " + calculo.toFixed(2);
} else if (opcao == 3) {
    let calculo = Math.pow((n1 * n2 * n3),1/3);
    return "Resultado: " + calculo.toFixed(2);
} else if (opcao == 3) {
    let calculo = Math.sqrt(((Math.pow(n1,2) + Math.pow(n2,2) + Math.pow(n3,2))) / 3);
    return "Resultado: " + calculo.toFixed(2);
} else {
    return "Esta opção de média é inválida";
}
}



function eventoBtnCalcularMedia() {

    const escolha = Number(opcao.value);
    const notaA = Number(nota1.value);
    const notaB = Number(nota2.value);
    const notaC = Number(nota3.value);
    const media = calcularMedias(escolha, notaA, notaB, notaC);
    const saida = media;

    resultado.innerText = saida;

}