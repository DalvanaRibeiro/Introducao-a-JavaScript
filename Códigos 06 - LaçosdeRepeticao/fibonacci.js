let n1 = 0, n2 = 1; // Os dois primeiros números da sequência
let proximo;
let contador = 1;

console.log(n1); // Imprime o primeiro número da sequência
console.log(n2); // Imprime o segundo número da sequência

while (contador <= 8) { // Já temos dois números, então repetimos mais 8 vezes
  proximo = n1 + n2; // O próximo número é a soma dos dois anteriores
  console.log(proximo);
  
  n1 = n2; // Avança os números na sequência
  n2 = proximo;
  
  contador++; // Incrementa o contador para seguir até o décimo número
}
