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

  uniao(conjunto) {
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

  intersecao(conjunto) {
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

  diferenca(conjunto) {
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

  conjuntoOrdenado(conjunto) {
    let unido = this.uniao(conjunto);
    let v = unido.obterConjunto();

    for (let i = 0; i < v.length - 1; i++) {
      for (let j = 0; j < v.length - i - 1; j++) {
        if (v[j] > v[j + 1]) {
          let t = v[j];
          v[j] = v[j + 1];
          v[j + 1] = t;
        }
      }
    }

    let resultado = new ConjuntoNumerico();
    for (let i = 0; i < v.length; i++) {
      resultado.incluir(v[i]);
    }
    return resultado;
  }
}

let A = new ConjuntoNumerico();
let B = new ConjuntoNumerico();

function mostrarConjunto(conjuntoNome) {
  let conjunto;
  if (conjuntoNome === "A") {
    conjunto = A.obterConjunto();
  } else {
    conjunto = B.obterConjunto();
  }

  let elemento = document.getElementById("idConjunto" + conjuntoNome);
  if (conjunto.length === 0) {
    elemento.innerText = conjuntoNome + " = ∅";
  } else {
    let texto = conjuntoNome + " = {";
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

function incluir(conjuntoNome) {
  let campo = document.getElementById("valor" + conjuntoNome);
  let valor = parseInt(campo.value);

  if (isNaN(valor)) {
    document.getElementById("idConjunto" + conjuntoNome).innerText = conjuntoNome + " = ∅";
  } else {
    if (conjuntoNome === "A") {
      A.incluir(valor);
    } else {
      B.incluir(valor);
    }
    mostrarConjunto(conjuntoNome);
  }

  campo.value = "";
}

function setResultado(saida) {
  document.getElementById("idResultado").innerHTML = saida;
}

function acaoBotaoExecutar() {
  if (A.verificarVazio() && B.verificarVazio()) {
    setResultado("A = ∅<br>B = ∅<br><br>Ambos os conjuntos estão vazios.");
    return;
  }

  let uniao = A.uniao(B);
  let intersecao = A.intersecao(B);
  let diferencaAB = A.diferenca(B);
  let diferencaBA = B.diferenca(A);
  let ordenado = A.conjuntoOrdenado(B);

  let saida = "";

  // União
  saida += "<b>A ∪ B:</b> ";
  if (uniao.verificarVazio()) {
    saida += "∅<br>";
  } else {
    let u = uniao.obterConjunto();
    saida += "{";
    for (let i = 0; i < u.length; i++) {
      saida += u[i];
      if (i < u.length - 1) {
        saida += " | ";
      }
    }
    saida += "}<br>";
  }

  // Interseção
  saida += "<b>A ∩ B:</b> ";
  if (intersecao.verificarVazio()) {
    saida += "∅<br>";
  } else {
    let iC = intersecao.obterConjunto();
    saida += "{";
    for (let i = 0; i < iC.length; i++) {
      saida += iC[i];
      if (i < iC.length - 1) {
        saida += " | ";
      }
    }
    saida += "}<br>";
  }

  // Diferença de A - B
  saida += "<b>A − B:</b> ";
  if (diferencaAB.verificarVazio()) {
    saida += "∅<br>";
  } else {
    let dAB = diferencaAB.obterConjunto();
    saida += "{";
    for (let i = 0; i < dAB.length; i++) {
      saida += dAB[i];
      if (i < dAB.length - 1) {
        saida += " | ";
      }
    }
    saida += "}<br>";
  }

  // Diferença de B - A
  saida += "<b>B − A:</b> ";
  if (diferencaBA.verificarVazio()) {
    saida += "∅<br>";
  } else {
    let dBA = diferencaBA.obterConjunto();
    saida += "{";
    for (let i = 0; i < dBA.length; i++) {
      saida += dBA[i];
      if (i < dBA.length - 1) {
        saida += " | ";
      }
    }
    saida += "}<br>";
  }

  // Ordenado
  saida += "<b>Ordenado (A ∪ B):</b> ";
  if (ordenado.verificarVazio()) {
    saida += "∅";
  } else {
    let conjuntoOrdenado = ordenado.obterConjunto();
    saida += "{";
    for (let i = 0; i < conjuntoOrdenado.length; i++) {
      saida += conjuntoOrdenado[i];
      if (i < conjuntoOrdenado.length - 1) {
        saida += " | ";
      }
    }
    saida += "}";
  }

  setResultado(saida);
}