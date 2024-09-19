// Esse programa verifica o estado da conta bancária e sugere ações.
let saldo = -200;

// O if verifica se o saldo é maior que 0 (saldo positivo)
if (saldo > 0) {
  console.log("Sua conta está positiva com saldo de: R$" + saldo);
} 
// Verifica se o saldo é zero
else if (saldo === 0) {
  console.log("Sua conta está zerada.");
} 
// Se o saldo for menor que 0, o cliente está com saldo negativo
else {
  console.log("Sua conta está negativa com saldo de: R$" + saldo);
  console.log("Recomenda-se fazer um depósito para regularizar.");
}
