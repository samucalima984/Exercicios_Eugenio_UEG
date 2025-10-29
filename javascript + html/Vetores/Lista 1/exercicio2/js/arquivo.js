const numeroC = document.getElementById("idInNumero");
const resultadoC = document.getElementById("idOnResultado");
const saidaC = document.getElementById("idOnSaida");

let arrayNumeros = [];

function gerarConjunto() {

  arrayNumeros = [];

  for (let contador = 0; contador < 15; contador++) {
    const conjuntoAleatorio = Math.floor(Math.random() * 100) + 1;
    arrayNumeros.push(conjuntoAleatorio);
  }

  resultadoC.innerText = "Conjunto Aleatório: " + arrayNumeros.join(" | ");
  saidaC.innerText = " ";
}

function verificarNumero() {
  
  const valor = Number(numeroC.value);
  let existeNoConjunto = false; 

  for (let elemento of arrayNumeros) {
    if (elemento == valor) {
      existeNoConjunto = true;
    }
  }

  if (existeNoConjunto) {
    saidaC.innerText = "O número " + valor + " EXISTE no conjunto.";
  } else {
    saidaC.innerText = "O número " + valor + " NÃO EXISTE no conjunto.";
  }
}