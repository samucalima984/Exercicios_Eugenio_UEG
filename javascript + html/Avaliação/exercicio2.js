

function quadrante(x1, x2, y1, y2) {
    
if(x1 > 0 && y1 > 0){
console.log("Primeiro Quadrante");}

if(x1 < 0 && y1 > 0){
console.log("Segundo Quadrante");}

if(x1 < 0 && y1 < 0){
console.log("Terceiro Quadrante");}

if(x1 > 0 && y1 < 0){
console.log("Primeiro Quadrante");}

if(x1 == 0 && y1 != 0){
console.log("Eixo Y");
}
if(x1 != 0 && y1 == 0){
console.log("Eixo X");
}
if(x1 == 0 && y1 == 0){
console.log("Ponto Central");
}

}
const xA = -2;
const xB = 4;
const yA = -4;
const yB = 0;
let distancia = Math.sqrt((Math.pow((xB-xA),2)) + (Math.pow((yB-yA),2)));

quadrante(xA, xB, yA, yB);
console.log("Distancia = " + distancia.toFixed(2));
