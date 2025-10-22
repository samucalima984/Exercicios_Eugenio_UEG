const numeroIdentificacao = document.getElementById("idInIdentificacao");
const frequencia = document.getElementById("idInFrequencia");
const primeiraNota = document.getElementById("idInNota1");
const segundaNota = document.getElementById("idInNota2");
const terceiraNota = document.getElementById("idInNota3");
const mediaExercicios = document.getElementById("idInExercicios");
const resultado = document.getElementById("idOnResultado");

function verificarConceito(n1, n2, n3, e) {
const mediaFinal = (n1 + n2 * 2 + n3 * 3 + e)/7;

if(mediaFinal < 0) return "Digite Notas Válidas!";
if(mediaFinal < 4.0 && frequencia < 75) return "E";
if(mediaFinal >= 4.1 && mediaFinal <= 6.0 && frequencia < 75) return "D";
if(mediaFinal >= 6.1 && mediaFinal <= 7.5 && frequencia >= 75) return "C";
if(mediaFinal >= 7.6 && mediaFinal <= 9.0 && frequencia >= 75) return "B";
if(mediaFinal >= 9.1 && mediaFinal <= 10 && frequencia >= 75) return "A";
if(mediaFinal > 10) return "Digite Notas Válidas!";

}



function eventoBtnExecutar() {
  
    const n1 = Number(primeiraNota.value);
    const n2 = Number(segundaNota.value);
    const n3 = Number(terceiraNota.value);
    const nE = Number(mediaExercicios.value);
    const media = (n1 + n2 * 2 + n3 * 3 + nE)/7;
    const verificarC = verificarConceito(n1, n2, n3, nE);
    const saida = "Número de Identificação: " + numeroIdentificacao.value + "\n" + "Frequência: " + frequencia.value + "\n" + "N1: " + primeiraNota.value + "\n"  + "N2: " + segundaNota.value + "\n" + "N3: " + terceiraNota.value + "\n" + "Média dos Exercícios: " + mediaExercicios.value + "\n" + "Média Final: " + media.toFixed(2) + "\n" + "Conceito: " + verificarC;
    
    resultado.innerText = saida;
}