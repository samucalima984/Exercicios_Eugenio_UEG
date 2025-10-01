const resultado = document.getElementById("idOnResultado");

function calcularSeno() {

    let saida = "";
    let a = 0;
    
    do {
        let seno = a - (Math.pow(a, 3) / 6) + (Math.pow(a, 5) / 120) - (Math.pow(a, 7) / 5040);
      saida += a + " = " + seno + "\n";
        a += 0.5;
    } while (a <= 3.0);

    return saida;
}

function acaoBotaoExecutar() {

    const saida = calcularSeno();
    resultado.innerText = saida;
}