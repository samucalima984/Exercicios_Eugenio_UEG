    const resultadoA = document.getElementById("idConjuntoA");
    const resultadoB = document.getElementById("idConjuntoB");
    const resultadoC = document.getElementById("idConjuntoC");

    let conjuntoA = [];
    let conjuntoB = [];
    let conjuntoC = [];

    function mostrarOrdenado(vetor, numero) {
      
      let posicao = 0;

      while (posicao < vetor.length && numero > vetor[posicao]) {
        posicao++;
      }

      for (let mudarPosicao = vetor.length; mudarPosicao > posicao; mudarPosicao--) {
        vetor[mudarPosicao] = vetor[mudarPosicao - 1];
      }

      vetor[posicao] = numero;
    }

    function gerarConjunto() {
      let conjunto = [];

      for (let vetor = 0; vetor < 10; vetor++) {
        let numero = Math.floor(Math.random() * 20) + 1;
        mostrarOrdenado(conjunto, numero);
      }

      return conjunto;
    }

    function gerarConjuntoIntercalado(array1, array2) {
      let conjuntoIntercalado = [];

      for (let vetor = 0; vetor < 10; vetor++) {
        mostrarOrdenado(conjuntoIntercalado, array1[vetor]);
        mostrarOrdenado(conjuntoIntercalado, array2[vetor]);
      }

      return conjuntoIntercalado;
    }

    function acaoBotaoExecutar() {
      conjuntoA = gerarConjunto();
      conjuntoB = gerarConjunto();
      conjuntoC = gerarConjuntoIntercalado(conjuntoA, conjuntoB);

      resultadoA.innerText = "Conjunto A ordenado: " + conjuntoA.join(" | ");
      resultadoB.innerText = "Conjunto B ordenado: " + conjuntoB.join(" | ");
      resultadoC.innerText = "Conjunto Intercalado: " + conjuntoC.join(" | ");
    }