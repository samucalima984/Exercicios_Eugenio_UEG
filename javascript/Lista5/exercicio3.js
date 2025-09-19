const a = 10;
const b = 3;
const c= 4;

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