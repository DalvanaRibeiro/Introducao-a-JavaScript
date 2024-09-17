
/*
###################################################################################################
Título: Função que calcula desconto
---------------------------------------------------------------------------------------------------
A função calcula descondo de acordo com a seguinte fórmula:

𝑃𝑟𝑒𝑐𝑜𝐶𝑜𝑚𝐷𝑒𝑠𝑐𝑜𝑛𝑡𝑜=𝑃𝑟𝑒𝑐𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙−(𝑃𝑟𝑒𝑐𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙×𝐷𝑒𝑠𝑐𝑜𝑛𝑡𝑜/100)
###################################################################################################
*/

// Declarando a função
function calcularDesconto(precoOriginal, percentualDesconto) {
    return precoOriginal - (precoOriginal * percentualDesconto / 100)
    // return é usada dentro de uma função para especificar o valor que a função deve devolver quando é chamada
}

// Exemplo de uso da função
const precoOriginal = 100 // Preço original do produto
const percentualDesconto = 15 // Percentual de desconto

const precoComDesconto = calcularDesconto(precoOriginal, percentualDesconto)

console.log(`Preço original: R$ ${precoOriginal.toFixed(2)}`)

console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`) // toFixed arredonda as casas decimais para 2 após a vírgula ;)
