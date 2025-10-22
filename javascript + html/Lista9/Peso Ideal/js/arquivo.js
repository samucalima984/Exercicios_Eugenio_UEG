const altura = document.getElementById("idInAltura");
const sexo = document.getElementById("idInSexo");
const resultado = document.getElementById("idOnResultado");

function calcularPesoIdeal(altura, sexo) {
    if (sexo === "m") {
        return (72.7 * altura) - 58;
    } else if (sexo === "f") {
        return (62.1 * altura) - 44.7;
    }
}

function eventoBtnCalcularPesoIdeal() {
    const valorAltura = Number(altura.value);
    const valorSexo = sexo.value;
    const saida = "Seu peso ideal é de: " + calcularPesoIdeal(valorAltura, valorSexo).toFixed(2) + " kg";

    resultado.innerText = saida;
}