/*
###################################################################################################
Título: Função que divide array
---------------------------------------------------------------------------------------------------
Receba um array de números; 
Retorne um novo array com dois elementos: 
o último e o primeiro número do array recebido divididos por dois.

###################################################################################################
*/


// Função para retornar um novo array com o primeiro e o último número divididos por dois
function dividirPrimeiroUltimoPorDois(numeros) {
    let primeiro = numeros[0] / 2  // Divide o primeiro número por 2
    let ultimo = numeros[numeros.length - 1] / 2  // Divide o último número por 2
    return [primeiro, ultimo] // Retorna um novo array com os dois valores
}

// Exemplo de uso:
let arrayNumeros = [10, 20, 30, 40, 50] // Um array de exemplo
let resultado = dividirPrimeiroUltimoPorDois(arrayNumeros);  // Chama a função e armazena o resultado

console.log(`Novo array: [${resultado}]`)  // Imprime o novo array no console
