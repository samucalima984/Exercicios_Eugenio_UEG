const resultado = document.getElementById("idOnResultado");

function calcularSeno() {

    let saida = "";
    
    for (let a = 0.0; a <= 3.0; a += 0.5) {
        let seno = a - (Math.pow(a, 3) / 6) + (Math.pow(a, 5) / 120) - (Math.pow(a, 7) / 5040);
        saida += a + " = " + seno.toFixed(3) + "\n";
    }
    return saida;
}

function acaoBotaoExecutar() {

    const saida = calcularSeno();
    resultado.innerText = saida;
}