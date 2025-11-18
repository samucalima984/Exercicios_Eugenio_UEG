class ConjuntoNumerico {
  constructor() {
    this.array = [];
  }

  incluir(valor) {
    let existe = false;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === valor) {
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
    for (let i = 0; i < this.array.length; i++) {
      copia[copia.length] = this.array[i];
    }
    return copia;
  }

   gerarUniao(conjunto) {
    let resultado = new ConjuntoNumerico();
    let outro = conjunto.obterConjunto();

    for (let i = 0; i < this.array.length; i++) {
      resultado.incluir(this.array[i]);
    }
    for (let j = 0; j < outro.length; j++) {
      resultado.incluir(outro[j]);
    }
    return resultado;
  }

  gerarIntersecao(conjunto) {
    let resultado = new ConjuntoNumerico();
    let outro = conjunto.obterConjunto();

    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < outro.length; j++) {
        if (this.array[i] === outro[j]) {
          resultado.incluir(this.array[i]);
        }
      }
    }
    return resultado;
  }

  gerarDiferenca(conjunto) {
    let resultado = new ConjuntoNumerico();
    let outro = conjunto.obterConjunto();

    for (let i = 0; i < this.array.length; i++) {
      let encontrado = false;
      for (let j = 0; j < outro.length; j++) {
        if (this.array[i] === outro[j]) {
          encontrado = true;
        }
      }
      if (!encontrado) {
        resultado.incluir(this.array[i]);
      }
    }
    return resultado;
  }

  verificarSubconjunto(conjunto) {
    let outro = conjunto.obterConjunto();

    for (let i = 0; i < this.array.length; i++) {
      let encontrado = false;
      for (let j = 0; j < outro.length; j++) {
        if (this.array[i] === outro[j]) {
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

    for (let i = 0; i < this.array.length; i++) {
      let encontrado = false;
      for (let j = 0; j < outro.length; j++) {
        if (this.array[i] === outro[j]) {
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

    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < outro.length; j++) {
        if (this.array[i] === outro[j]) {
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

    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] < menor) menor = this.array[i];
      if (this.array[i] > maior) maior = this.array[i];
    }

    return maior - menor;
  }

  calcularMedia() {
    if (this.array.length === 0) return null;

    let soma = 0;
    for (let i = 0; i < this.array.length; i++) {
      soma += this.array[i];
    }

    return (soma / this.array.length);
  }

  calcularProdutoEscalar(conjunto) {
    let outro = conjunto.obterConjunto();

    if (this.array.length !== outro.length) {
      return null;
    }

    let soma = 0;

    for (let i = 0; i < this.array.length; i++) {
      soma += this.array[i] * outro[i];
    }

    return soma;
  }

  gerarConjuntoOrdenado(conjunto) {
    let unido = this.gerarUniao(conjunto);
    let valores = unido.obterConjunto();

    for (let i = 0; i < valores.length - 1; i++) {
      for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[j] > valores[j + 1]) {
          let textoSaida = valores[j];
          valores[j] = valores[j + 1];
          valores[j + 1] = textoSaida;
        }
      }
    }

    let resultado = new ConjuntoNumerico();
    for (let i = 0; i < valores.length; i++) {
      resultado.incluir(valores[i]);
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
    for (let i = 0; i < conjunto.length; i++) {
      texto += conjunto[i];
      if (i < conjunto.length - 1) {
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
    for (let i = 0; i < valores.length; i++) {
      textoSaida += valores[i];
      if (i < valores.length - 1) textoSaida += " | ";
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

  saida += "<b>A esta contido em B</b>: " + saidaSubconjuntoAB + "<br>";
  saida += "<b>B esta contido em A</b>: " + saidaSubconjuntoBA + "<br>";
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