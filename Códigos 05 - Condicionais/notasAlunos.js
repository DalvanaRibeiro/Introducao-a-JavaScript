// Esse programa classifica um aluno com base na sua média de notas.
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.0;
let media = (nota1 + nota2 + nota3) / 3;

// O if verifica se a média é maior ou igual a 7 (Aprovado)
if (media >= 7) {
  console.log("Aluno aprovado com média: " + media);
} 
// Verifica se a média está entre 5 e 7 (Recuperação)
else if (media >= 5 && media < 7) {
  console.log("Aluno em recuperação com média: " + media);
} 
// Caso contrário, o aluno está reprovado
else {
  console.log("Aluno reprovado com média: " + media);
}
