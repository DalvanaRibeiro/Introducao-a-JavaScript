// Função que recebe um array de números e retorna o maior número
function encontrarMaiorNumero(numeros) {
    // Verifica se o array está vazio
    if (numeros.length === 0) {
      return "O array está vazio."; // Retorna uma mensagem caso o array esteja vazio
    }
  
    // Inicializa a variável maior com o primeiro elemento do array
    let maior = numeros[0]; // Assume que o primeiro número é o maior inicialmente
  
    // Laço para percorrer todos os números do array
    for (let i = 1; i < numeros.length; i++) {
      // Compara o número atual com o maior encontrado até agora
      if (numeros[i] > maior) {
        maior = numeros[i]; // Atualiza maior se o número atual for maior
      }
    }
  
    // Retorna a mensagem com o maior número encontrado
    return `O maior número é ${maior}`;
  }
  
  // Exemplo de uso da função
  const arrayNumeros = [11, 15, 18, 14, 12, 13]; // Array de exemplo
  const resultado = encontrarMaiorNumero(arrayNumeros); // Chama a função e armazena o resultado
  console.log(resultado); // Exibe o resultado no console
  