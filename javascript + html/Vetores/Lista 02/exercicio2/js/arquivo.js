    const resultadoA = document.getElementById("idConjuntoA");
    const resultadoB = document.getElementById("idConjuntoB");
    const resultadoC = document.getElementById("idConjuntoC");

    function gerarConjunto() {

      let conjunto = [];
      for (let vetor = 0; vetor < 10; vetor++) {
        let numero = Math.floor(Math.random() * 20) + 1;
        conjunto[vetor] = numero;
      }
      return conjunto;
    }

    function ordenarConjunto(vetor) {
      for (let posicaoAtual = 1; posicaoAtual < vetor.length; posicaoAtual++) {
        let valorAtual = vetor[posicaoAtual];
        let posicaoAnterior = posicaoAtual - 1;

        while (posicaoAnterior >= 0 && vetor[posicaoAnterior] > valorAtual) {
          vetor[posicaoAnterior + 1] = vetor[posicaoAnterior];
          posicaoAnterior--;
        }
        vetor[posicaoAnterior + 1] = valorAtual;
      }
    }

    function intercalarConjuntos(conjuntoA, conjuntoB) {

      let conjuntoIntercalado = [];
      let posicaoA = 0
      let posicaoB = 0
      let intercalado = 0;

      while (posicaoA < conjuntoA.length && posicaoB < conjuntoB.length) {
        if (conjuntoA[posicaoA] < conjuntoB[posicaoB]) {
          conjuntoIntercalado[intercalado++] = conjuntoA[posicaoA++];
        } else {
          conjuntoIntercalado[intercalado++] = conjuntoB[posicaoB++];
        }
      }

      while (posicaoA < conjuntoA.length) {
        conjuntoIntercalado[intercalado++] = conjuntoA[posicaoA++];
      }

      while (posicaoB < conjuntoB.length) {
        conjuntoIntercalado[intercalado++] = conjuntoB[posicaoB++];
      }

      return conjuntoIntercalado;
    }

    function acaoBotaoExecutar() {
      let conjuntoA = gerarConjunto();
      let conjuntoB = gerarConjunto();

      ordenarConjunto(conjuntoA);
      ordenarConjunto(conjuntoB);

      let conjuntoIntercalado = intercalarConjuntos(conjuntoA, conjuntoB);

      resultadoA.innerText = "Conjunto A ordenado: " + conjuntoA.join(" | ");
      resultadoB.innerText = "Conjunto B ordenado: " + conjuntoB.join(" | ");
      resultadoC.innerText = "Conjunto Intercalado: " + conjuntoIntercalado.join(" | ");
    }