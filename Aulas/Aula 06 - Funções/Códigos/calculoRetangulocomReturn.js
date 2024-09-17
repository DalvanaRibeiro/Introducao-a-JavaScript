/*
###################################################################################################
Título: Função que calcula a área de um retângulo
---------------------------------------------------------------------------------------------------
Para calcular a área de um retângulo, temos a seguinte equação:
area = altura x largura

###################################################################################################
*/

// Função para calcular a área de um retângulo
function calcularAreaRetangulo(base, altura) {
    return base * altura  // Retorna o cálculo da área
}

// Reutilizando a função para diferentes valores de base e altura

let base1 = 5
let altura1 = 10
let area1 = calcularAreaRetangulo(base1, altura1)  // Chamada da função para o primeiro retângulo
console.log(`A área do retângulo 1 é: ${area1}`)  // Imprime o resultado

// A função pode ser reutilizada várias vezes com diferentes valores de base e altura
