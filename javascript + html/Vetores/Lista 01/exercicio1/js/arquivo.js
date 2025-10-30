const numeroC = document.getElementById("idInNumero");
const resultadoC = document.getElementById("idOnResultado");
const saidaC = document.getElementById("idOnSaida");

const arrayNumeros = [];

function acaoIncluirNumero() {

  const valor = Number(numeroC.value);
  arrayNumeros.push(valor);
  resultadoC.innerText = "Conjunto: " + arrayNumeros.join(" | ");
  numeroC.value = " ";
}

function calcularAmplitude(numeros) {

  let maior = numeros[0];
  let menor = numeros[0];

  for (let vetor = 1; vetor < numeros.length; vetor++) {
    if (numeros[vetor] > maior) {
      maior = numeros[vetor];
    }
    if (numeros[vetor] < menor) {
      menor = numeros[vetor];
    }
  }
  return maior - menor;

}

function calcularMedia(numeros) {

  let soma = 0;
  for (let vetor = 0; vetor < numeros.length; vetor++) {
    soma = soma + numeros[vetor];
  }
  return soma / numeros.length;
}

function inverterConjunto(numeros) {

  let conjuntoInvertido = [];
  for (let vetor = numeros.length - 1; vetor >= 0; vetor--) {
    conjuntoInvertido[conjuntoInvertido.length] = numeros[vetor];
  }
  return conjuntoInvertido;
}

function acaoBotaoExecutar() {

  const amplitude = calcularAmplitude(arrayNumeros);
  const media = calcularMedia(arrayNumeros);
  const conjuntoInvertido = inverterConjunto(arrayNumeros);

  let saida = " ";
  saida += "Amplitude: " + amplitude + "\n";
  saida += "Média Aritmética: " + media.toFixed(2) + "\n";
  saida += "Conjunto Invertido: " + conjuntoInvertido.join(" | ");

  saidaC.innerText = saida;
}