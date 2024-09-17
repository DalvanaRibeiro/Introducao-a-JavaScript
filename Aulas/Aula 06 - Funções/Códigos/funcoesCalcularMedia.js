
/*
###################################################################################################
Título: Função que calcula a média
---------------------------------------------------------------------------------------------------
A função calcula a média de acordo com a seguinte expressão:

média = (n1+n2+n3)/n
###################################################################################################
*/


function calcularMedia(n1, n2, n3) {
   
    let media = (n1 + n2 + n3) / 3
    return `Sua média é `, media
}

// Exemplo de uso:
let notasVagner = calcularMedia(8.5, 7.0, 6.5)
console.log("A nota do Vagner é: ",notasVagner)

let notasRobersvaldo = calcularMedia(8.5, 7.0, 6.5)
console.log("A nota do Robersvaldo é: ", notasRobersvaldo)
