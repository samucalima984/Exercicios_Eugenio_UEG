const numero = document.getElementById("idInNumero");
const btnParOuImpar = document.getElementById("btnParOuImpar");
const resultado = document.getElementById("idOnResultado");

function verificarParOuImpar(n) {
    
const resto = n % 2;
 if(resto == 0) return "PAR";
   else return "IMPAR";

}

function eventoBtnVerificarParOuImpar() {
    
    const numeroX = Number(numero.value);
    const parImpar = verificarParOuImpar(numeroX);
    const saida = "O número " + numero.value + " é " + parImpar;

    resultado.innerText = saida;
}