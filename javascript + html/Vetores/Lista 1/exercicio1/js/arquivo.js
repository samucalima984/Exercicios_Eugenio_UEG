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

  for (let contador = 1; contador < numeros.length; contador++) {
    if (numeros[contador] > maior) {
      maior = numeros[contador];
    }
    if (numeros[contador] < menor) {
      menor = numeros[contador];
    }
  }

  return maior - menor;
}

function calcularMedia(numeros) {
  let soma = 0;
  for (let contador = 0; contador < numeros.length; contador++) {
    soma = soma + numeros[contador];
  }
  return soma / numeros.length;
}

function inverterConjunto(numeros) {
  let conjuntoInvertido = [];
  for (let contador = numeros.length - 1; contador >= 0; contador--) {
    conjuntoInvertido[conjuntoInvertido.length] = numeros[contador];
  }
  return conjuntoInvertido;
}

function acaoExecutar() {
  if (arrayNumeros.length === 0) {
    saidaC.innerText = "Nenhum número foi inserido!";
    return;
  }

  let maior = arrayNumeros[0];
  let menor = arrayNumeros[0];

  for (let contador = 1; contador < arrayNumeros.length; contador++) {
    if (arrayNumeros[contador] > maior) {
      maior = arrayNumeros[contador];
    }
    if (arrayNumeros[contador] < menor) {
      menor = arrayNumeros[contador];
    }
  }

  const amplitude = calcularAmplitude(arrayNumeros);
  const media = calcularMedia(arrayNumeros);
  const conjuntoInvertido = inverterConjunto(arrayNumeros);

  let saida = " ";
  saida += "Maior Número: " + maior + "\n";
  saida += "Menor Número: " + menor + "\n";
  saida += "Amplitude: " + amplitude + "\n";
  saida += "Média Aritmética: " + media.toFixed(2) + "\n";
  saida += "Conjunto Invertido: " + conjuntoInvertido.join(" | ");

  saidaC.innerText = saida;
}