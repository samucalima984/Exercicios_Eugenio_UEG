const nome = document.getElementById("idInNome");
const salario = document.getElementById("idInSalario");
const btnCalcularReajuste = document.getElementById("btnCalcularReajuste");
const resultado = document.getElementById("idOnResultado");

function calcularReajuste(valor) {
 
    if(valor <= 1412){
    let salarioReajustado = (valor * 0.5) + valor; 
    return salarioReajustado;}
if(valor > 1412){
    let salarioReajustado = (valor * 0.4) + valor;
    return salarioReajustado;}
}

function eventoBtnCalcularReajuste() {
    
    const salarioX = Number(salario.value);
    const calculoReajuste = calcularReajuste(salarioX);
    const saida = "O salário reajustado do " + nome.value + " é: " + calculoReajuste;

    resultado.innerText = saida;
}