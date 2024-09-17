
/*
###################################################################################################
Título: Operadores Lógicos (operador E)
--------------------------------------------------------------------------------------------------

###################################################################################################
*/
// Criação das variáveis
let a = true
let b = false
let c = true

// Operações lógicas
let resultado1 = a && b  // a && b
let resultado2 = b && c // b && c
let resultado3 = a && c  // a && c
let resultado4 = a && b && c  // a && b && c

// Exibindo os resultados
console.log("a && b:", resultado1)  // false
console.log("b && c:", resultado2)  // false
console.log("a && c:", resultado3)  // true
console.log("a && b && c:", resultado4)  // false
