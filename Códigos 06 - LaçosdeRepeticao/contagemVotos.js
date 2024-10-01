// Array representando uma sequência de votos: 1 para candidato A, 2 para B, 3 para C
let votos = [1, 2, 1, 3, 1, 2, 3, 1, 2, 1];

// Variáveis para contar os votos de cada candidato
let votosA = 0, votosB = 0, votosC = 0;

// Laço for para percorrer o array de votos
for (let i = 0; i < votos.length; i++) {
  // Se o voto for 1, incrementamos a contagem de votosA
  if (votos[i] === 1) votosA++;
  // Se o voto for 2, incrementamos a contagem de votosB
  else if (votos[i] === 2) votosB++;
  // Se o voto for 3, incrementamos a contagem de votosC
  else if (votos[i] === 3) votosC++;
}

// Exibimos o total de votos para cada candidato
console.log("Candidato A: " + votosA + " votos.");
console.log("Candidato B: " + votosB + " votos.");
console.log("Candidato C: " + votosC + " votos.");
