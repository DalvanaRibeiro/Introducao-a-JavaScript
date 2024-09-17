// Receber o nome, ano de nascimento e ano atual
var nome = "Joaquina" // Erro 1: Falta de ponto e vírgula
var anoNascimento = 1980;
var anoAtual = 2024;

// Calcular a idade
var idade = anoAtual - anoNascimento;

// Verificar se é maior de idade (considerando 18 anos)
var maiorDeIdade = idade = 18;  // Erro 2: Operador de atribuição em vez de comparação

// Calcular a idade em 2050
var idadeEm2050 = 2050 - anoNascimento;

// Exibir os resultados no console
console.log("Nome da pessoa: " + nome);
console.log("Idade da pessoa: " + idade + " anos");
console.log("É maior de idade? " + maiorDeIdade);  // Erro 3: Espera-se um valor booleano mas está apresentando número
console.log("Idade que terá em 2050: " + idadeEm2050 + " anos");
console.log("Data de nascimento: " + anoNascimento +  " anos");  // Erro 4: Mensagem incorreta, "anos" não faz sentido aqui

// Erro 5: Comentário incorreto (não é um erro de código, mas pode confundir)
// // Abaixo o cálculo da idade
// var idade = anoAtual - anoNascimento; 

// Erro 6: Uso incorreto de variável não declarada
// var idadeFutura = 2050 - anoAtual;

// Erro 7: Variável não inicializada
// var idadeNaoDefinida;

// Erro 8: Não uso de `console.log` corretamente
// console.log("A idade em 2050 será" idadeEm2050);  // Falta de operador de concatenação ou vírgula
