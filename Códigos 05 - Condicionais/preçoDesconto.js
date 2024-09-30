// Esse programa calcula o preço final de um produto com base na categoria do cliente.
let precoOriginal = 100;
let categoriaCliente = "premium"; // Categorias: normal, premium, vip
let precoFinal;

// O if verifica se o cliente é "vip" e aplica 20% de desconto
if (categoriaCliente === "vip") {
  precoFinal = precoOriginal * 0.8;
  console.log("Cliente VIP: Preço final com 20% de desconto: R$" + precoFinal);
} 
// Verifica se o cliente é "premium" e aplica 10% de desconto
else if (categoriaCliente === "premium") {
  precoFinal = precoOriginal * 0.9;
  console.log("Cliente Premium: Preço final com 10% de desconto: R$" + precoFinal);
} 
// Se for um cliente "normal", não há desconto
else {
  precoFinal = precoOriginal;
  console.log("Cliente Normal: Sem desconto. Preço final: R$" + precoFinal);
}
