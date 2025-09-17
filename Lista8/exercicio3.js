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
triangulo(5, 2, 2);