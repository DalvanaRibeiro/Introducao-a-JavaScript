/*
###################################################################################################
Título: Função que calcula a idade de cachorro
---------------------------------------------------------------------------------------------------
Uma forma muito famosa de como saber a idade de um cachorro é a proporção 1 para 7. Ou seja: cada 
ano canino é considerado sete anos humanos. 

###################################################################################################
*/


// Função para converter a idade de um cachorro para anos humanos
function idadeCanina(idadeCachorro) {
    // Cada ano canino equivale a 7 anos humanos
    return idadeCachorro * 7;
  }
  
  // Exemplo de uso da função
  let idadeCachorro = 5; // 5 anos caninos
  console.log(idadeCanina(idadeCachorro)); // Exibe a idade em anos humanos
  