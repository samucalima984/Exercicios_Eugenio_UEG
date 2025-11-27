class Matriz {
  constructor(qtdLinhas, qtdColunas) {
    this.qtdLinhas = qtdLinhas;
    this.qtdColunas = qtdColunas;

    // matriz bidimensional inicializada com zeros
    this.valores = [];
    for (let indiceLinha = 0; indiceLinha < qtdLinhas; indiceLinha++) {
      this.valores[indiceLinha] = [];
      for (let indiceColuna = 0; indiceColuna < qtdColunas; indiceColuna++) {
        this.valores[indiceLinha][indiceColuna] = 0;
      }
    }
  }

  gerarMatriz() {
    for (let indiceLinha = 0; indiceLinha < this.qtdLinhas; indiceLinha++) {
      for (let indiceColuna = 0; indiceColuna < this.qtdColunas; indiceColuna++) {
        this.valores[indiceLinha][indiceColuna] = Math.floor(Math.random() * 80 + 10);
      }
    }
  }

  mostrarMatriz() {
    let textoMontado = "";
    for (let indiceLinha = 0; indiceLinha < this.qtdLinhas; indiceLinha++) {
      for (let indiceColuna = 0; indiceColuna < this.qtdColunas; indiceColuna++) {
        textoMontado += this.valores[indiceLinha][indiceColuna] + "\t";
      }
      textoMontado += "\n";
    }
    return textoMontado;
  }

  somarCom(matrizRecebida) {
    if (this.qtdLinhas !== matrizRecebida.qtdLinhas || this.qtdColunas !== matrizRecebida.qtdColunas) {
      return null;
    }

    let matrizResultado = new Matriz(this.qtdLinhas, this.qtdColunas);

    for (let indiceLinha = 0; indiceLinha < this.qtdLinhas; indiceLinha++) {
      for (let indiceColuna = 0; indiceColuna < this.qtdColunas; indiceColuna++) {
        matrizResultado.valores[indiceLinha][indiceColuna] =
          this.valores[indiceLinha][indiceColuna] +
          matrizRecebida.valores[indiceLinha][indiceColuna];
      }
    }

    return matrizResultado;
  }

  subtrairCom(matrizRecebida) {
    if (this.qtdLinhas !== matrizRecebida.qtdLinhas || this.qtdColunas !== matrizRecebida.qtdColunas) {
      return null;
    }

    let matrizResultado = new Matriz(this.qtdLinhas, this.qtdColunas);

    for (let indiceLinha = 0; indiceLinha < this.qtdLinhas; indiceLinha++) {
      for (let indiceColuna = 0; indiceColuna < this.qtdColunas; indiceColuna++) {
        matrizResultado.valores[indiceLinha][indiceColuna] =
          this.valores[indiceLinha][indiceColuna] -
          matrizRecebida.valores[indiceLinha][indiceColuna];
      }
    }

    return matrizResultado;
  }

  multiplicarPor(matrizRecebida) {
    if (this.qtdColunas !== matrizRecebida.qtdLinhas) {
      return null;
    }

    let matrizResultado = new Matriz(this.qtdLinhas, matrizRecebida.qtdColunas);

    for (let indiceLinha = 0; indiceLinha < this.qtdLinhas; indiceLinha++) {
      for (let indiceColuna = 0; indiceColuna < matrizRecebida.qtdColunas; indiceColuna++) {
        let somaProdutos = 0;

        for (let indiceIntermediario = 0; indiceIntermediario < this.qtdColunas; indiceIntermediario++) {
          somaProdutos +=
            this.valores[indiceLinha][indiceIntermediario] *
            matrizRecebida.valores[indiceIntermediario][indiceColuna];
        }

        matrizResultado.valores[indiceLinha][indiceColuna] = somaProdutos;
      }
    }

    return matrizResultado;
  }

  gerarTransposta() {
    let matrizTransposta = new Matriz(this.qtdColunas, this.qtdLinhas);

    for (let indiceLinha = 0; indiceLinha < this.qtdLinhas; indiceLinha++) {
      for (let indiceColuna = 0; indiceColuna < this.qtdColunas; indiceColuna++) {
        matrizTransposta.valores[indiceColuna][indiceLinha] = this.valores[indiceLinha][indiceColuna];
      }
    }

    return matrizTransposta;
  }

  ehIgualA(matrizRecebida) {
    if (this.qtdLinhas !== matrizRecebida.qtdLinhas || this.qtdColunas !== matrizRecebida.qtdColunas) {
      return false;
    }

    for (let indiceLinha = 0; indiceLinha < this.qtdLinhas; indiceLinha++) {
      for (let indiceColuna = 0; indiceColuna < this.qtdColunas; indiceColuna++) {
        if (this.valores[indiceLinha][indiceColuna] !== matrizRecebida.valores[indiceLinha][indiceColuna]) {
          return false;
        }
      }
    }

    return true;
  }

  calcularDeterminante() {
    if (this.qtdLinhas !== this.qtdColunas) {
      return null;
    }

    if (this.qtdLinhas === 1) {
      return this.valores[0][0];
    }

    if (this.qtdLinhas === 2) {
      return this.valores[0][0] * this.valores[1][1] -
             this.valores[0][1] * this.valores[1][0];
    }

    let determinanteTotal = 0;

    for (let colunaAtual = 0; colunaAtual < this.qtdColunas; colunaAtual++) {
      let sinal;

      if (colunaAtual % 2 === 0) {
        sinal = 1;
      } else {
        sinal = -1;
      }

      let subMatrizGerada = this.criarSubmatriz(0, colunaAtual);

      determinanteTotal +=
        sinal *
        this.valores[0][colunaAtual] *
        subMatrizGerada.calcularDeterminante();
    }

    return determinanteTotal;
  }

  criarSubmatriz(linhaRemover, colunaRemover) {
    let submatrizCriada = new Matriz(this.qtdLinhas - 1, this.qtdColunas - 1);

    let novaLinha = 0;

    for (let linha = 0; linha < this.qtdLinhas; linha++) {
      if (linha !== linhaRemover) {
        let novaColuna = 0;

        for (let coluna = 0; coluna < this.qtdColunas; coluna++) {
          if (coluna !== colunaRemover) {
            submatrizCriada.valores[novaLinha][novaColuna] = this.valores[linha][coluna];
            novaColuna++;
          }
        }

        novaLinha++;
      }
    }

    return submatrizCriada;
  }

  ehIdentidade() {
    if (this.qtdLinhas !== this.qtdColunas) {
      return false;
    }

    for (let linha = 0; linha < this.qtdLinhas; linha++) {
      for (let coluna = 0; coluna < this.qtdColunas; coluna++) {
        if (linha === coluna) {
          if (this.valores[linha][coluna] !== 1) {
            return false;
          }
        } else {
          if (this.valores[linha][coluna] !== 0) {
            return false;
          }
        }
      }
    }

    return true;
  }

  ehTriangularSuperior() {
    if (this.qtdLinhas !== this.qtdColunas) {
      return false;
    }

    for (let linha = 1; linha < this.qtdLinhas; linha++) {
      for (let coluna = 0; coluna < linha; coluna++) {
        if (this.valores[linha][coluna] !== 0) {
          return false;
        }
      }
    }

    return true;
  }

  ehTriangularInferior() {
    if (this.qtdLinhas !== this.qtdColunas) {
      return false;
    }

    for (let linha = 0; linha < this.qtdLinuras; linha++) {
      for (let coluna = linha + 1; coluna < this.qtdColunas; coluna++) {
        if (this.valores[linha][coluna] !== 0) {
          return false;
        }
      }
    }

    return true;
  }

  ehSimetrica() {
    if (this.qtdLinhas !== this.qtdColunas) {
      return false;
    }

    for (let linha = 0; linha < this.qtdLinhas; linha++) {
      for (let coluna = 0; coluna < this.qtdColunas; coluna++) {
        if (this.valores[linha][coluna] !== this.valores[coluna][linha]) {
          return false;
        }
      }
    }

    return true;
  }

  ehOrtogonal() {
    if (this.qtdLinhas !== this.qtdColunas) {
      return false;
    }

    let matrizTransposta = this.gerarTransposta();
    let produto = this.multiplicarPor(matrizTransposta);

    if (produto === null) {
      return false;
    }

    return produto.ehIdentidade();
  }

  permutarLinhas(linha1, linha2) {
    if (linha1 < 0 || linha2 < 0 || linha1 >= this.qtdLinhas || linha2 >= this.qtdLinhas) {
      return;
    }

    let linhaTemp = this.valores[linha1];
    this.valores[linha1] = this.valores[linha2];
    this.valores[linha2] = linhaTemp;
  }
}

let matrizA = null;
let matrizB = null;


function escreverNoCampoResultado(textoParaExibir) {
  let campoSaida = document.getElementById("resultado");
  if (campoSaida === null) {
    return;
  }

  campoSaida.innerText = textoParaExibir;
}


function criarCopiaDaMatriz(matrizOriginal) {
  let matrizCopia = new Matriz(matrizOriginal.qtdLinhas, matrizOriginal.qtdColunas);

  for (let linha = 0; linha < matrizOriginal.qtdLinhas; linha++) {
    for (let coluna = 0; coluna < matrizOriginal.qtdColunas; coluna++) {
      matrizCopia.valores[linha][coluna] = matrizOriginal.valores[linha][coluna];
    }
  }

  return matrizCopia;
}


function gerarMatrizA() {
  let campoLinhas = document.getElementById("linhasA");
  let campoColunas = document.getElementById("colunasA");

  if (campoLinhas.value === "" || campoColunas.value === "") {
    escreverNoCampoResultado("Digite valores de linhas e colunas para a Matriz A.");
    return;
  }

  let totalLinhas = parseInt(campoLinhas.value, 10);
  let totalColunas = parseInt(campoColunas.value, 10);

  if (isNaN(totalLinhas) || isNaN(totalColunas) || totalLinhas <= 0 || totalColunas <= 0) {
    escreverNoCampoResultado("Valores inválidos para a Matriz A.");
    return;
  }

  matrizA = new Matriz(totalLinhas, totalColunas);
  matrizA.gerarMatriz();

  document.getElementById("matrizA").innerText = matrizA.mostrarMatriz();

  escreverNoCampoResultado("Matriz A gerada com sucesso.");
}

function gerarMatrizB() {
  let campoLinhas = document.getElementById("linhasB");
  let campoColunas = document.getElementById("colunasB");

  if (campoLinhas.value === "" || campoColunas.value === "") {
    escreverNoCampoResultado("Digite valores de linhas e colunas para a Matriz B.");
    return;
  }

  let totalLinhas = parseInt(campoLinhas.value, 10);
  let totalColunas = parseInt(campoColunas.value, 10);

  if (isNaN(totalLinhas) || isNaN(totalColunas) || totalLinhas <= 0 || totalColunas <= 0) {
    escreverNoCampoResultado("Valores inválidos para a Matriz B.");
    return;
  }

  matrizB = new Matriz(totalLinhas, totalColunas);
  matrizB.gerarMatriz();

  document.getElementById("matrizB").innerText = matrizB.mostrarMatriz();

  escreverNoCampoResultado("Matriz B gerada com sucesso.");
}

function exibirResultadoDeMatriz(matriz, titulo) {
  if (matriz === null) {
    escreverNoCampoResultado("Operação inválida.");
    return;
  }

  let textoExibir = titulo + "\n\n" + matriz.mostrarMatriz();
  escreverNoCampoResultado(textoExibir);
}

function executarSoma() {
  if (matrizA === null || matrizB === null) {
    escreverNoCampoResultado("Gere as matrizes A e B antes de somar.");
    return;
  }

  let resultado = matrizA.somarCom(matrizB);
  exibirResultadoDeMatriz(resultado, "Resultado da Soma:");
}

function executarSubtracao() {
  if (matrizA === null || matrizB === null) {
    escreverNoCampoResultado("Gere as matrizes A e B antes de subtrair.");
    return;
  }

  let resultado = matrizA.subtrairCom(matrizB);
  exibirResultadoDeMatriz(resultado, "Resultado da Subtração:");
}

function executarMultiplicacao() {
  if (matrizA === null || matrizB === null) {
    escreverNoCampoResultado("Gere as matrizes A e B antes de multiplicar.");
    return;
  }

  let resultado = matrizA.multiplicarPor(matrizB);
  exibirResultadoDeMatriz(resultado, "Resultado da Multiplicação:");
}

function exibirTranspostaDeA() {
  if (matrizA === null) {
    escreverNoCampoResultado("Gere a Matriz A.");
    return;
  }

  let transposta = matrizA.gerarTransposta();
  exibirResultadoDeMatriz(transposta, "Transposta da Matriz A:");
}

function exibirTranspostaDeB() {
  if (matrizB === null) {
    escreverNoCampoResultado("Gere a Matriz B.");
    return;
  }

  let transposta = matrizB.gerarTransposta();
  exibirResultadoDeMatriz(transposta, "Transposta da Matriz B:");
}

function verificarIgualdadeAB() {
  if (matrizA === null || matrizB === null) {
    escreverNoCampoResultado("Gere A e B antes de verificar igualdade.");
    return;
  }

  if (matrizA.ehIgualA(matrizB) === true) {
    escreverNoCampoResultado("As matrizes A e B são IGUAIS.");
  } else {
    escreverNoCampoResultado("As matrizes A e B são DIFERENTES.");
  }
}

function verificarPropriedadesDaMatrizA() {
  if (matrizA === null) {
    escreverNoCampoResultado("Gere a Matriz A antes de verificar.");
    return;
  }

  let texto = "PROPRIEDADES DA MATRIZ A:\n";

  if (matrizA.ehIdentidade()) {
    texto += "Identidade: SIM\n";
  } else {
    texto += "Identidade: NÃO\n";
  }

  if (matrizA.ehTriangularSuperior()) {
    texto += "Triangular Superior: SIM\n";
  } else {
    texto += "Triangular Superior: NÃO\n";
  }

  if (matrizA.ehTriangularInferior()) {
    texto += "Triangular Inferior: SIM\n";
  } else {
    texto += "Triangular Inferior: NÃO\n";
  }

  if (matrizA.ehSimetrica()) {
    texto += "Simétrica: SIM\n";
  } else {
    texto += "Simétrica: NÃO\n";
  }

  if (matrizA.ehOrtogonal()) {
    texto += "Ortogonal: SIM\n";
  } else {
    texto += "Ortogonal: NÃO\n";
  }

  texto += "Determinante: " + matrizA.calcularDeterminante();

  escreverNoCampoResultado(texto);
}

function verificarPropriedadesDaMatrizB() {
  if (matrizB === null) {
    escreverNoCampoResultado("Gere a Matriz B antes de verificar.");
    return;
  }

  let texto = "PROPRIEDADES DA MATRIZ B:\n";

  if (matrizB.ehIdentidade()) {
    texto += "Identidade: SIM\n";
  } else {
    texto += "Identidade: NÃO\n";
  }

  if (matrizB.ehTriangularSuperior()) {
    texto += "Triangular Superior: SIM\n";
  } else {
    texto += "Triangular Superior: NÃO\n";
  }

  if (matrizB.ehTriangularInferior()) {
    texto += "Triangular Inferior: SIM\n";
  } else {
    texto += "Triangular Inferior: NÃO\n";
  }

  if (matrizB.ehSimetrica()) {
    texto += "Simétrica: SIM\n";
  } else {
    texto += "Simétrica: NÃO\n";
  }

  if (matrizB.ehOrtogonal()) {
    texto += "Ortogonal: SIM\n";
  } else {
    texto += "Ortogonal: NÃO\n";
  }

  texto += "Determinante: " + matrizB.calcularDeterminante();

  escreverNoCampoResultado(texto);
}

function exibirPermutacaoDaMatrizA() {
  if (matrizA === null) {
    escreverNoCampoResultado("Gere a Matriz A primeiro.");
    return;
  }

  if (matrizA.qtdLinhas < 2) {
    escreverNoCampoResultado("A Matriz A precisa ter ao menos 2 linhas.");
    return;
  }

  let copiaGerada = criarCopiaDaMatriz(matrizA);
  copiaGerada.permutarLinhas(0, 1);

  let texto = "Permutação da Matriz A:\n\n";
  texto += copiaGerada.mostrarMatriz();

  escreverNoCampoResultado(texto);
}

function exibirPermutacaoDaMatrizB() {
  if (matrizB === null) {
    escreverNoCampoResultado("Gere a Matriz B primeiro.");
    return;
  }

  if (matrizB.qtdLinhas < 2) {
    escreverNoCampoResultado("A Matriz B precisa ter ao menos 2 linhas.");
    return;
  }

  let copiaGerada = criarCopiaDaMatriz(matrizB);
  copiaGerada.permutarLinhas(0, 1);

  let texto = "Permutação da Matriz B:\n\n";
  texto += copiaGerada.mostrarMatriz();

  escreverNoCampoResultado(texto);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnGerarA").addEventListener("click", gerarMatrizA);
  document.getElementById("btnGerarB").addEventListener("click", gerarMatrizB);

  document.getElementById("btnSoma").addEventListener("click", executarSoma);
  document.getElementById("btnSubtracao").addEventListener("click", executarSubtracao);
  document.getElementById("btnMultiplicacao").addEventListener("click", executarMultiplicacao);

  document.getElementById("btnTranspA").addEventListener("click", exibirTranspostaDeA);
  document.getElementById("btnTranspB").addEventListener("click", exibirTranspostaDeB);

  document.getElementById("btnIgualdade").addEventListener("click", verificarIgualdadeAB);

  document.getElementById("btnPropriedadesA").addEventListener("click", verificarPropriedadesDaMatrizA);
  document.getElementById("btnPropriedadesB").addEventListener("click", verificarPropriedadesDaMatrizB);

  document.getElementById("btnPermutarA").addEventListener("click", exibirPermutacaoDaMatrizA);
  document.getElementById("btnPermutarB").addEventListener("click", exibirPermutacaoDaMatrizB);

  escreverNoCampoResultado("");
});