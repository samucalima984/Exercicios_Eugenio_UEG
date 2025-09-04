const n1 = 7.5;
const n2 = 8.4;
const n3 = 9.1;
const nNotas = 3;
const tipoMedia = 1;
let strMedia = "";

switch (tipoMedia) {
    case 1:
        strMedia = "Aritmética";
        calculo = (n1 + n2 + n3) / nNotas;
        break;
    case 2:
        strMedia = "Ponderada";
        calculo = ((n1 * 3) + (n2 * 3) + (n3 * 4)) / (3 + 3 + 4);
        break;
    case 3:
        strMedia = "Harmônica";
        calculo = nNotas / ((1 / n1) + (1 / n2) + (1 / n3));
        break;
    case 4:
        strMedia = "Geométrica";
        calculo = Math.pow((n1 * n2 * n3),1/3);
        break;
    case 5:
        strMedia = "Quadrática";
        calculo = Math.sqrt(((Math.pow(n1,2) + Math.pow(n2,2) + Math.pow(n3,2))) / 3);
        break;                    

    default:
        strMedia = "Esta opção de média é inválida";
        calculo = 0;
}
   const saida = "Tipo de Média: " + strMedia;
   const saida2 = "Resultado: " + calculo.toFixed(2);
   console.log(saida + "\n" + saida2);