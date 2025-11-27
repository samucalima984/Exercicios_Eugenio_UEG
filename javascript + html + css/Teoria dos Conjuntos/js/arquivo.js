class ConjuntoNumerico {
  constructor() {
    this.array = [];
  }

  incluir(valor) {
    let existe = false;
    for (let vetor = 0; vetor < this.array.length; vetor++) {
      if (this.array[vetor] === valor) {
        existe = true;
      }
    }
    if (!existe) {
      this.array[this.array.length] = valor;
      return true;
    }
    return false;
  }

  verificarVazio() {
    return this.array.length === 0;
  }

  obterConjunto() {
    let copia = [];
    for (let vetor = 0; vetor < this.array.length; vetor++) {
      copia[copia.length] = this.array[vetor];
    }
    return copia;
  }

   gerarUniao(conjunto) {
    let resultado = new ConjuntoNumerico();
    let outro = conjunto.obterConjunto();

    for (let vetor = 0; vetor < this.array.length; vetor++) {
      resultado.incluir(this.array[vetor]);
    }
    for (let vetorC = 0; vetorC < outro.length; vetorC++) {
      resultado.incluir(outro[vetorC]);
    }
    return resultado;
  }

  gerarIntersecao(conjunto) {
    let resultado = new ConjuntoNumerico();
    let outro = conjunto.obterConjunto();

    for (let vetor = 0; vetor < this.array.length; vetor++) {
      for (let vetorC = 0; vetorC < outro.length; vetorC++) {
        if (this.array[vetor] === outro[vetorC]) {
          resultado.incluir(this.array[vetor]);
        }
      }
    }
    return resultado;
  }

  gerarDiferenca(conjunto) {
    let resultado = new ConjuntoNumerico();
    let outro = conjunto.obterConjunto();

    for (let vetor = 0; vetor < this.array.length; vetor++) {
      let encontrado = false;
      for (let vetorC = 0; vetorC < outro.length; vetorC++) {
        if (this.array[vetor] === outro[vetorC]) {
          encontrado = true;
        }
      }
      if (!encontrado) {
        resultado.incluir(this.array[vetor]);
      }
    }
    return resultado;
  }

  verificarSubconjunto(conjunto) {
    let outro = conjunto.obterConjunto();

    for (let vetor = 0; vetor < this.array.length; vetor++) {
      let encontrado = false;
      for (let vetorC = 0; vetorC < outro.length; vetorC++) {
        if (this.array[vetor] === outro[vetorC]) {
          encontrado = true;
        }
      }
      if (!encontrado) {
        return false;
      }
    }
    return true;
  }

  verificarIdentico(conjunto) {
    let outro = conjunto.obterConjunto();

    if (this.array.length !== outro.length) {
      return false;
    }

    for (let vetor = 0; vetor < this.array.length; vetor++) {
      let encontrado = false;
      for (let vetorC = 0; vetorC < outro.length; vetorC++) {
        if (this.array[vetor] === outro[vetorC]) {
          encontrado = true;
        }
      }
      if (!encontrado) {
        return false;
      }
    }

    return true;
  }

  verificarDisjunto(conjunto) {
    let outro = conjunto.obterConjunto();

    for (let vetor = 0; vetor < this.array.length; vetor++) {
      for (let vetorC = 0; vetorC < outro.length; vetorC++) {
        if (this.array[vetor] === outro[vetorC]) {
          return false;
        }
      }
    }
    return true;
  }

  calcularAmplitude() {
    if (this.array.length === 0) return null;

    let menor = this.array[0];
    let maior = this.array[0];

    for (let vetor = 1; vetor < this.array.length; vetor++) {
      if (this.array[vetor] < menor) menor = this.array[vetor];
      if (this.array[vetor] > maior) maior = this.array[vetor];
    }

    return maior - menor;
  }

  calcularMedia() {
    if (this.array.length === 0) return null;

    let soma = 0;
    for (let vetor = 0; vetor < this.array.length; vetor++) {
      soma += this.array[vetor];
    }

    return (soma / this.array.length);
  }

  calcularProdutoEscalar(conjunto) {
    let outro = conjunto.obterConjunto();

    if (this.array.length !== outro.length) {
      return null;
    }

    let soma = 0;

    for (let vetor = 0; vetor < this.array.length; vetor++) {
      soma += this.array[vetor] * outro[vetor];
    }

    return soma;
  }

  gerarConjuntoOrdenado(conjunto) {
    let unido = this.gerarUniao(conjunto);
    let valores = unido.obterConjunto();

    for (let vetor = 0; vetor < valores.length - 1; vetor++) {
      for (let vetorC = 0; vetorC < valores.length - vetor - 1; vetorC++) {
        if (valores[vetorC] > valores[vetorC + 1]) {
          let textoSaida = valores[vetorC];
          valores[vetorC] = valores[vetorC + 1];
          valores[vetorC + 1] = textoSaida;
        }
      }
    }

    let resultado = new ConjuntoNumerico();
    for (let vetor = 0; vetor < valores.length; vetor++) {
      resultado.incluir(valores[vetor]);
    }
    return resultado;
  }
}

let A = new ConjuntoNumerico();
let B = new ConjuntoNumerico();

function mostrarConjunto(outroConjunto) {
  let conjunto;
  if (outroConjunto === "A") {
    conjunto = A.obterConjunto();
  } else {
    conjunto = B.obterConjunto();
  }

  let elemento = document.getElementById("idConjunto" + outroConjunto);
  if (conjunto.length === 0) {
    elemento.innerText = outroConjunto + " = ∅";
  } else {
    let texto = outroConjunto + " = {";
    for (let vetor = 0; vetor < conjunto.length; vetor++) {
      texto += conjunto[vetor];
      if (vetor < conjunto.length - 1) {
        texto += " | ";
      }
    }
    texto += "}";
    elemento.innerText = texto;
  }
}

function incluir(outroConjunto) {
  let campo = document.getElementById("valor" + outroConjunto);
  let valor = parseInt(campo.value);

  if (isNaN(valor)) {
    document.getElementById("idConjunto" + outroConjunto).innerText = outroConjunto + " = ∅";
  } else {
    if (outroConjunto === "A") {
      A.incluir(valor);
    } else {
      B.incluir(valor);
    }
    mostrarConjunto(outroConjunto);
  }

  campo.value = "";
}

function setResultado(saida) {
  document.getElementById("idResultado").innerHTML = saida;
}

function acaoBotaoExecutar() {
  if (A.verificarVazio() === true && B.verificarVazio() === true) {
    setResultado("A = ∅" + "<br>" + "B = ∅" + "<br><br>" + "Ambos os conjuntos estao vazios");
    return;
  }

  let gerarUniao = A.gerarUniao(B);
  let gerarIntersecao = A.gerarIntersecao(B);
  let diferencaAB = A.gerarDiferenca(B);
  let diferencaBA = B.gerarDiferenca(A);
  let ordenado = A.gerarConjuntoOrdenado(B);

  let subconjuntoAB = A.verificarSubconjunto(B);
  let subconjuntoBA = B.verificarSubconjunto(A);
  let verificarIdentico = A.verificarIdentico(B);
  let verificarDisjunto = A.verificarDisjunto(B);

  let amplitudeA = A.calcularAmplitude();
  let amplitudeB = B.calcularAmplitude();
  let mediaA = A.calcularMedia();
  let mediaB = B.calcularMedia();
  let escalar = A.calcularProdutoEscalar(B);

  function formatarSaida(conjuntoVariado) {
    if (conjuntoVariado.verificarVazio() === true) return "∅";
    let valores = conjuntoVariado.obterConjunto();
    let textoSaida = "{";
    for (let vetor = 0; vetor < valores.length; vetor++) {
      textoSaida += valores[vetor];
      if (vetor < valores.length - 1) textoSaida += " | ";
    }
    return textoSaida + "}";
  }

  let saida = "";

  saida += "<b>A ∪ B</b>: " + formatarSaida(gerarUniao) + "<br>";
  saida += "<b>A ∩ B</b>: " + formatarSaida(gerarIntersecao) + "<br>";
  saida += "<b>A − B</b>: " + formatarSaida(diferencaAB) + "<br>";
  saida += "<b>B − A</b>: " + formatarSaida(diferencaBA) + "<br>";
  saida += "<b>Conjunto Ordenado</b>: " + formatarSaida(ordenado) + "<br><br>";

  let saidaSubconjuntoAB = "Não";
  if (subconjuntoAB === true) saidaSubconjuntoAB = "Sim";
  let saidaSubconjuntoBA = "Não";
  if (subconjuntoBA === true) saidaSubconjuntoBA = "Sim";
  let saidaIdentico = "Não";
  if (verificarIdentico === true) saidaIdentico = "Sim";
  let saidaDisjunto = "Não";
  if (verificarDisjunto === true) saidaDisjunto = "Sim";

  saida += "<b>A subconjunto de B</b>: " + saidaSubconjuntoAB + "<br>";
  saida += "<b>B subconjunto de A</b>: " + saidaSubconjuntoBA + "<br>";
  saida += "<b>A e B sao idênticos</b>: " + saidaIdentico + "<br>";
  saida += "<b>A e B sao disjuntos</b>: " + saidaDisjunto + "<br><br>";

  let saidaAmplitudeA = "∅";
  if (amplitudeA !== null) saidaAmplitudeA = amplitudeA;
  let saidaAmplitudeB = "∅";
  if (amplitudeB !== null) saidaAmplitudeB = amplitudeB;
  let saidaMediaA = "∅";
  if (mediaA !== null) saidaMediaA = mediaA;
  let saidaMediaB = "∅";
  if (mediaB !== null) saidaMediaB = mediaB;
  let saidaProdutoEscalar = "Os conjuntos devem ter tamanhos iguais";
  if (escalar !== null) saidaProdutoEscalar = escalar;

  saida += "<b>Amplitude A</b>: " + saidaAmplitudeA + "<br>";
  saida += "<b>Amplitude B</b>: " + saidaAmplitudeB + "<br>";
  saida += "<b>Media A</b>: " + saidaMediaA + "<br>";
  saida += "<b>Media B</b>: " + saidaMediaB + "<br>";
  saida += "<b>Produto escalar</b>: " + saidaProdutoEscalar + "<br>";

  setResultado(saida);
}