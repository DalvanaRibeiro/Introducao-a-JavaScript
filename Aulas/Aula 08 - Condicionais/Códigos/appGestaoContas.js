// Opção escolhida no menu (valor pode vir de alguma interação com o usuário)
let opcao = 2
let saldo = 1000 // Saldo inicial

// Estrutura switch para realizar ações diferentes de acordo com a opção
switch (opcao) {
  case 1:
    // Caso 1: Consultar saldo
    console.log("Seu saldo atual é R$" + saldo.toFixed(2))
    break

  case 2:
    // Caso 2: Fazer depósito
    let valorDeposito = 500 // Valor a ser depositado
    saldo += valorDeposito // Adiciona o valor ao saldo
    console.log("Depósito realizado. Seu novo saldo é R$" + saldo.toFixed(2))
    break

  case 3:
    // Caso 3: Sacar dinheiro
    let valorSaque = 200; // Valor a ser sacado
    if (valorSaque <= saldo) {
      saldo -= valorSaque; // Subtrai o valor do saldo
      console.log("Saque realizado. Seu novo saldo é R$" + saldo.toFixed(2))
    } else {
      console.log("Saldo insuficiente para o saque.")
    }
    break

  case 4:
    // Caso 4: Sair
    console.log("Saindo da conta...")
    break;

  default:
    // Opção inválida
    console.log("Opção inválida. Tente novamente.")
}
