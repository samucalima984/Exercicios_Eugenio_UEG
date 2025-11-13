class Matriz {
  #qLinhas;
  #qColunas;
  #matriz;

  constructor(qLinhas, qColunas) {
    this.#qLinhas = qLinhas;
    this.#qColunas = qColunas;
    this.#matriz = new Array(this.#qLinhas);

    for (let linha = 0; linha < this.#qLinhas; linha++) {
      this.#matriz[linha] = new Array(this.#qColunas);
    }
  }

  get linhas() {
    return this.#qLinhas;
  }

  get colunas() {
    return this.#qColunas;
  }

  gerarMatriz() {
    for (let linha = 0; linha < this.#qLinhas; linha++) {
      for (let coluna = 0; coluna < this.#qColunas; coluna++) {
        this.#matriz[linha][coluna] = Math.floor(Math.random() * 90 + 10);
      }
    }
  }

  mostrarMatriz() {
    let str = "Matriz " + this.#qLinhas + "x" + this.#qColunas + "\n";
    for (let linha = 0; linha < this.#qLinhas; linha++) {
      let saida = "";
      for (let coluna = 0; coluna < this.#qColunas; coluna++) {
        saida += this.#matriz[linha][coluna] + "\t";
      }
      str += saida + "\n";
    }
    return str;
  }

  adicionar(matrizSecundaria) {
    if (this.#qLinhas !== matrizSecundaria.linhas || this.#qColunas !== matrizSecundaria.colunas) {
      console.log("As matrizes devem ter o mesmo tamanho para adicionar!");
      return null;
    }

    let resultado = new Matriz(this.#qLinhas, this.#qColunas);

    for (let linha = 0; linha < this.#qLinhas; linha++) {
      for (let coluna = 0; coluna < this.#qColunas; coluna++) {
        resultado.#matriz[linha][coluna] =this.#matriz[linha][coluna] + matrizSecundaria.#matriz[linha][coluna];
      }
    }

    return resultado;
  }

  subtrair(matrizSecundaria) {
    if (this.#qLinhas !== matrizSecundaria.linhas || this.#qColunas !== matrizSecundaria.colunas) {
      console.log("As matrizes devem ter o mesmo tamanho para subtrair!");
      return null;
    }

    let resultado = new Matriz(this.#qLinhas, this.#qColunas);

    for (let linha = 0; linha < this.#qLinhas; linha++) {
      for (let coluna = 0; coluna < this.#qColunas; coluna++) {
        resultado.#matriz[linha][coluna] = this.#matriz[linha][coluna] - matrizSecundaria.#matriz[linha][coluna];
      }
    }

    return resultado;
  }
}

let matrizA = new Matriz(4, 4);
let matrizB = new Matriz(4, 4);

matrizA.gerarMatriz();
matrizB.gerarMatriz();

console.log("MATRIZ A:");
console.log(matrizA.mostrarMatriz());

console.log("MATRIZ B:");
console.log(matrizB.mostrarMatriz());

let soma = matrizA.adicionar(matrizB);
if (soma !== null) {
console.log("MATRIZ ADIÇÃO:");
console.log(soma.mostrarMatriz());
}

let subtracao = matrizA.subtrair(matrizB);
if (subtracao !== null) {
console.log("MATRIZ SUBTRAÇÃO:");
console.log(subtracao.mostrarMatriz());
}




