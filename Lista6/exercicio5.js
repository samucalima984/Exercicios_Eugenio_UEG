let nomeUsuario = "Pedro";
let tipoPulverizacao = 1;   
const area = 300;
let precoPorAcre = 0;
let strTipoPulverizacao = "";


switch (tipoPulverizacao) {
    case 1:
        strTipoPulverizacao = "Pulverização contra ervas daninhas.";      
        precoPorAcre = 50.00;
        break;

    case 2:
        strTipoPulverizacao = "Pulverização contra gafanhotos.";
        precoPorAcre = 100.00;
        break;

    case 3:
        strTipoPulverizacao = "Pulverização contra broca.";
        precoPorAcre = 150.00;
        break;

    case 4:
        strTipoPulverizacao = "Pulverização contra tudo.";
        precoPorAcre = 250.00;
        break;
        
    default:
        console.log("Tipo de pulverização inválido!");
}

custo = precoPorAcre * area;


switch (true) {
    case (area > 300):
        custo = custo + (custo * 0.05);
        break;
    default:
        
        break;
}

switch (true) {
    case (custo > 10750):
        let excedente = custo - 10750;
        custo = 10750 + (excedente * 0.1);
        break;
    default:
        
        break;
}

console.log("Usuário: " + nomeUsuario);
console.log("Tipo de Pulverização: " + strTipoPulverizacao);
console.log("Valor a ser pago: R$ " + custo.toFixed(2));