// Solicita ao usuário que insira um número n
let n = 12; // Neste exemplo, definimos n como 10, mas você pode alterar esse valor conforme necessário

// Inicializa as variáveis para armazenar os primeiros números da sequência
let fibonacci = []; // Array para armazenar a sequência de Fibonacci
let a = 0; // Primeiro número da sequência
let b = 1; // Segundo número da sequência
let contador = 0; // Contador para controlar quantos números já foram gerados

// Usa o laço while para calcular a sequência de Fibonacci
while (contador < n) {
  // Adiciona o número atual da sequência ao array
  fibonacci.push(a); // Adiciona o valor de a (0, 1, 1, 2, 3, ...) ao array
  
  // Atualiza os valores de a e b para os próximos números da sequência
  let temp = a; // Armazena o valor atual de a em uma variável temporária
  a = b; // Atualiza a para ser o próximo número (b)
  b = temp + b; // Atualiza b para ser a soma dos dois últimos números (anterior e atual)

  // Incrementa o contador
  contador++; // Aumenta o contador em 1 para indicar que mais um número foi gerado
}

// Exibe a sequência de Fibonacci no console
console.log(`Os primeiros ${n} números da sequência de Fibonacci são: ${fibonacci.join(", ")}`);
