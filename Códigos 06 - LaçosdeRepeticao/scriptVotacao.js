// Inicializamos as variáveis para contar os votos de cada candidato
let votosA = 0; // Contador de votos para o Candidato A
let votosB = 0; // Contador de votos para o Candidato B
let votosC = 0; // Contador de votos para o Candidato C

// Função para atualizar os resultados na tela
function atualizarResultados() {
  // Atualiza o conteúdo do elemento <span> para o Candidato A com o número atual de votos
  document.getElementById("resultadoA").textContent = votosA;
  // Atualiza o conteúdo do elemento <span> para o Candidato B com o número atual de votos
  document.getElementById("resultadoB").textContent = votosB;
  // Atualiza o conteúdo do elemento <span> para o Candidato C com o número atual de votos
  document.getElementById("resultadoC").textContent = votosC;
}

// Adicionamos os event listeners aos botões para registrar os votos
// Ao clicar no botão "Votar no Candidato A"
document.getElementById("votoA").addEventListener("click", function() {
  votosA++; // Incrementa o contador de votos do Candidato A
  atualizarResultados(); // Chama a função para atualizar a tela
});

// Ao clicar no botão "Votar no Candidato B"
document.getElementById("votoB").addEventListener("click", function() {
  votosB++; // Incrementa o contador de votos do Candidato B
  atualizarResultados(); // Chama a função para atualizar a tela
});

// Ao clicar no botão "Votar no Candidato C"
document.getElementById("votoC").addEventListener("click", function() {
  votosC++; // Incrementa o contador de votos do Candidato C
  atualizarResultados(); // Chama a função para atualizar a tela
});
