const raio = 1;
const altura = 3;
const tipoFigura = 1;
let strFiguraGeometrica = "";

switch (tipoFigura) {
    case 1:
        strFiguraGeometrica = "Cone Reto";
        volume = (Math.PI * Math.pow(raio,2) * altura) / 3;
        area = Math.PI * raio * Math.sqrt(Math.pow(raio,2) + Math.pow(altura,2));
        break;
    case 2:
        strFiguraGeometrica = "Cilindro";
        volume = Math.PI * Math.pow(raio,2) * altura;
        area = 2 * Math.PI * raio * altura;
        break;
    case 3:
        strFiguraGeometrica = "Esfera";
        volume = (4/3) * Math.PI * Math.pow(raio,3);
        area = 4 * Math.PI * Math.pow(raio,2);
        break;        

    default:
        strFiguraGeometrica = "Opção de Figura Geométrica inválido";
        volume = 0;
        area = 0;
}
const saida = "Tipo de Figura Geométrica: " + strFiguraGeometrica;
   const saida2 = "Volume: " + volume.toFixed(2);
   const saida3 = "Área: " + area.toFixed(2);
   console.log(saida + "\n" + saida2 + "\n" + saida3);