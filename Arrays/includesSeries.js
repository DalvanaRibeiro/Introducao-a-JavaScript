/*
###################################################################################################
Título: Usando o método includes para verificar séries 
---------------------------------------------------------------------------------------------------
Este exercício ajuda a praticar a manipulação de arrays com o uso do método includes em JavaScript. 
Ele permite criar um array com séries boas. Usando o método includes é possível ver se uma determinada
série está dentro da array. 
###################################################################################################
*/

// criando uma array de Séries Boas :)
const seriesBoas = ["Breaking Bad", "Brooklyn Nine-nine", "Friends", "Stranger Things"] 
seriesBoas.includes("Breaking Bad") // verifica se Breaking Bad está dentro da array seriesBoas
seriesBoas.includes("Game of Thrones") // verifica se Game of Thrones está dentro da array seriesBoas

// Imprimindo
console.log("A série Breaking Bad está dentro de seriesBoas? ", seriesBoas.includes("Breaking Bad")) 

console.log("A série Game of Thrones está dentro de seriesBoas? ", seriesBoas.includes("Game of Thrones")) 

// O exercício devolve valores booleanos true ou false.
