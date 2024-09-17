/* 

###################################################################################################

Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:	
O nome da pessoa
A idade dessa pessoa
Um true ou false que diz se ela é maior de idade
Quantos anos ela terá em 2050

###################################################################################################

*/


// Receber o nome, ano de nascimento e ano atual
var nome = "Joaquina"
var anoNascimento = 1980
var anoAtual = 2024 

// Calcular a idade
var idade = anoAtual - anoNascimento;

// Verificar se é maior de idade (considerando 18 anos)
var maiorDeIdade = idade >= 18;

// Calcular a idade em 2050
var idadeEm2050 = 2050 - anoNascimento;

// Exibir os resultados no console
console.log("Nome da pessoa: " + nome);
console.log("Idade da pessoa: " + idade + " anos");
console.log("É maior de idade? " + maiorDeIdade);
console.log("Idade que terá em 2050: " + idadeEm2050 + " anos");
