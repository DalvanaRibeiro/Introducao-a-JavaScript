// Esse programa determina o tipo de triângulo com base nos comprimentos dos lados.
let lado1 = 5;
let lado2 = 5;
let lado3 = 8;

// Verifica se os três lados são iguais (triângulo equilátero)
if (lado1 === lado2 && lado2 === lado3) {
  console.log("O triângulo é equilátero.");
} 
// Verifica se dois lados são iguais (triângulo isósceles)
else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
  console.log("O triângulo é isósceles.");
} 
// Se todos os lados forem diferentes, o triângulo é escaleno
else {
  console.log("O triângulo é escaleno.");
}
