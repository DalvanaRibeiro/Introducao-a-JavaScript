// Função que recebe um array de palavras e retorna uma string com as palavras unidas por espaços
function unirPalavras(palavras) {
    // Verifica se o array está vazio
    if (palavras.length === 0) {
      return "O array está vazio."; // Retorna uma mensagem caso o array esteja vazio
    }
  
    // Usa o método join para unir as palavras em uma única string, separadas por espaços
    const mensagem = palavras.join(" "); // O método join une os elementos do array com o separador especificado (neste caso, um espaço)
  
    // Retorna a mensagem resultante
    return mensagem; // Retorna a string formada com as palavras unidas
  }
  
  // Exemplo de uso da função
  const arrayPalavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]; // Array de exemplo
  const resultado = unirPalavras(arrayPalavras); // Chama a função e armazena o resultado
  console.log(resultado); // Exibe o resultado no console
  