/*
###################################################################################################
Título: Resto da Divisão
Existem casos em que a divisão não dá um número inteiro (sem vírgula)
Quando acontece isso, dizemos que há um resto na divisão
Por exemplo: dividir 20 por 3:
Dá o resultado 6, com resto 2
20 = 3 x 6 + 2 
---------------------------------------------------------------------------------------------------
Utilizamos o sinal %
###################################################################################################
*/
const primeiroValor = 11  // atribuindo o valor 11 na variável primeiroValor
const segundoValor = 4   // atribuindo o valor 4 na variável segundoValor

const restoDaDivisao = primeiroValor % segundoValor // calculando o resto da divisão
// Exibindo no console
console.log(restoDaDivisao) 