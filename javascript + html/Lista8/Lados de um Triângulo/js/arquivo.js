const a = document.getElementById("idInValorA");
const b = document.getElementById("idInValorB");
const c = document.getElementById("idInValorC");
const resultado = document.getElementById("idOnResultado");

function calcularTriangulo(a, b, c) {
    if(Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2)){
        return "Triangulo Retângulo";
    } else if(Math.pow(a,2) > Math.pow(b,2) + Math.pow(c,2)){
        return "Triangulo Obtusângulo";
    } else if(Math.pow(a,2) < Math.pow(b,2) + Math.pow(c,2)){
        return "Triangulo Acutângulo";
    }
}

function eventoBtnCalcularTriangulo(){
    const valorA = Number(a.value);
    const valorB = Number(b.value);
    const valorC = Number(c.value);
    const valorFinal = calcularTriangulo(valorA, valorB, valorC);
    
    resultado.innerText = valorFinal;
}