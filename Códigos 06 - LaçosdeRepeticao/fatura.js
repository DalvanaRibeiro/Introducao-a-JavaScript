// Array com os preços de 10 produtos
let produtos = [15.99, 29.99, 49.99, 10.50, 7.30, 12.00, 20.00, 5.99, 8.25, 17.80];

// Variável para acumular o total da fatura
let totalFatura = 0;

// Laço for para percorrer o array de produtos
for (let i = 0; i < produtos.length; i++) {
  // Somamos o valor de cada produto ao total da fatura
  totalFatura += produtos[i];
}

// Exibimos o total da fatura com duas casas decimais
console.log("O total da fatura é: R$ " + totalFatura.toFixed(2));
