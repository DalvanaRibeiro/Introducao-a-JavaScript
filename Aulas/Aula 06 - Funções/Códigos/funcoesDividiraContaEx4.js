
/*
###################################################################################################
Título: Função que divide o valor de uma conta entre os integrantes de uma equipe
---------------------------------------------------------------------------------------------------

###################################################################################################
*/

// Função para dividir o valor de uma conta por um número de pessoas
function dividirDespesas(valorConta, numeroPessoas) {
    return valorConta / numeroPessoas;
}

// Exemplo de uso:
let totalConta = 300 // Valor total da conta
let pessoas = 4 // Número de pessoas dividindo

let valorPorPessoa = dividirDespesas(totalConta, pessoas)
console.log(`Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);
