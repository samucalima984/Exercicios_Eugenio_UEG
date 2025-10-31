    const resultadoA = document.getElementById("idConjuntoA");
    const resultadoB = document.getElementById("idConjuntoB");
    const resultadoC = document.getElementById("idConjuntoC");

    let conjuntoA = [];
    let conjuntoB = [];
    let conjuntoC = [];

    function gerarConjunto() {

      let conjunto = [];
      for (let vetor = 0; vetor < 10; vetor++) {
        conjunto.push(Math.floor(Math.random() * 20) + 1);
      }
      return conjunto;
    }

    function gerarConjuntoIntercalado(array1, array2) {

      let conjuntoIntercalado = [];
      for (let vetor = 0; vetor < 10; vetor++) {
        conjuntoIntercalado.push(array1[vetor]);
        conjuntoIntercalado.push(array2[vetor]);
      }
      return conjuntoIntercalado;
    }

    function acaoBotaoExecutar() {

      conjuntoA = gerarConjunto();
      conjuntoB = gerarConjunto();

      conjuntoC = gerarConjuntoIntercalado(conjuntoA, conjuntoB);

      resultadoA.innerText = "Conjunto A: " + conjuntoA.join(" | ");
      resultadoB.innerText = "Conjunto B: " + conjuntoB.join(" | ");
      resultadoC.innerText = "Conjunto Intercalado: " + conjuntoC.join(" | ");
    }