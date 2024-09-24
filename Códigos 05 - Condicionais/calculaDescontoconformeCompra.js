// Valor da compra
let valorCompra = 350

// Verifica a faixa de desconto e calcula o valor final
if (valorCompra <= 100) {
  console.log("Valor final: R$" + valorCompra.toFixed(2))
} else if (valorCompra > 100 && valorCompra <= 500) {
  let desconto = valorCompra * 0.10 // Calcula 10% de desconto
  console.log("Valor final: R$" + (valorCompra - desconto).toFixed(2))
} else {
  let desconto = valorCompra * 0.15 // Calcula 15% de desconto
  console.log("Valor final: R$" + (valorCompra - desconto).toFixed(2))
}
