// Definindo os candidatos em um array
const candidatos = [
    { nome: "Candidato 1", votos: 0 },
    { nome: "Candidato 2", votos: 0 },
    { nome: "Candidato 3", votos: 0 }
  ];
  
  // Função para renderizar a lista de candidatos na tela
  function exibirCandidatos() {
    const candidatosDiv = document.getElementById("candidatos");
    candidatosDiv.innerHTML = ""; // Limpa o conteúdo anterior
  
    // Usamos um laço for para exibir todos os candidatos
    for (let i = 0; i < candidatos.length; i++) {
      const candidato = candidatos[i];
  
      // Criando o HTML para exibir cada candidato com seu botão de votar
      const candidatoDiv = document.createElement("div");
      candidatoDiv.classList.add("candidato");
      candidatoDiv.innerHTML = `
        <strong>${candidato.nome}</strong>
        <button onclick="votar(${i})">Votar</button>
      `;
      candidatosDiv.appendChild(candidatoDiv);
    }
  }
  
  // Função para votar em um candidato
  function votar(indice) {
    candidatos[indice].votos++; // Incrementa os votos do candidato escolhido
  }
  
  // Função para exibir o resultado da votação (quando o botão "Revelar Resultados" for clicado)
  function atualizarResultado() {
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = ""; // Limpa o resultado anterior
  
    // Usamos um laço for para exibir o nome e os votos de cada candidato
    for (let i = 0; i < candidatos.length; i++) {
      const candidato = candidatos[i];
  
      // Criando o HTML para exibir o resultado de cada candidato
      const resultadoLi = document.createElement("li");
      resultadoLi.innerHTML = `${candidato.nome}: ${candidato.votos} votos`;
      resultadoUl.appendChild(resultadoLi);
    }
  }
  
  // Função para revelar os resultados e tornar visível o título e a lista de resultados
  function revelarResultados() {
    document.getElementById("resultadoTitulo").style.display = "block"; // Mostra o título
    document.getElementById("resultado").style.display = "block"; // Mostra a lista de resultados
    atualizarResultado(); // Atualiza e exibe os resultados na tela
  }
  
  // Função para resetar os votos e esconder os resultados novamente
  function resetarVotos() {
    // Usamos um laço for para reiniciar os votos de todos os candidatos
    for (let i = 0; i < candidatos.length; i++) {
      candidatos[i].votos = 0; // Zera os votos
    }
    
    // Esconder os resultados e o título ao resetar
    document.getElementById("resultadoTitulo").style.display = "none"; 
    document.getElementById("resultado").style.display = "none";
    atualizarResultado(); // Atualiza o resultado exibido
  }
  
  // Inicializa a tela com os candidatos
  exibirCandidatos();
  