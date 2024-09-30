// Função que solicita números ao usuário e calcula a soma
function solicitarNumeros() {
    let soma = 0; // Variável para armazenar a soma dos números inseridos
    let numero;   // Variável para armazenar o número inserido pelo usuário
    let index = 1; // Índice para indicar a ordem das entradas do usuário

    // Loop do...while que continua até o usuário inserir o número 0
    do {
        // Solicita ao usuário que insira um número, com a indicação do índice
        numero = parseInt(prompt("Insira o número " + index + " (0 para sair): "));

        // Verifica se o valor inserido é um número válido
        if (!isNaN(numero)) {
            soma += numero; // Soma o número inserido ao total
            index++;        // Incrementa o índice para a próxima entrada
        } else {
            // Caso o valor inserido não seja um número, exibe um alerta
            alert("Por favor, insira um número válido.");
        }

    } while (numero !== 0); // O loop para quando o usuário insere '0'

    // Exibe a soma dos números no elemento HTML com id 'resultado'
    document.getElementById("resultado").innerHTML = "A soma dos números é: " + soma;
}
