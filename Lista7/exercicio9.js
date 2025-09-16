function triangulo(a, b ,c) {

if (a < b + c && b < a + c && c < a + c) {
  
  if (a == b && b == c) {
    console.log("Triângulo Equilátero");
  } else if (a == b || a == c || b == c) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Não é um triângulo");
}
}
const v1 = 1;
const v2 = 3;
const v3 = 3;
triangulo(v1, v2, v3);