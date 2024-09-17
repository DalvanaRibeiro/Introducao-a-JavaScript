
/*
###################################################################################################
Título: Função que gera aleatoriamente adjetivos
---------------------------------------------------------------------------------------------------
A função usa uma array para armazenar vários adjetivos e return para retornar esses adjetivos
###################################################################################################
*/


// Função para gerar um adjetivo de qualidade 
function gerarAdjetivo(nome) {
    // Lista de apelidos possíveis
    const apelidos = ["Bravura", "Dedicação", "Inteligente", "Coragem", "Sabedoria"]
    
    // Gera um índice aleatório para escolher um apelido da lista
    const indiceAleatorio = Math.floor(Math.random() * apelidos.length)

    // Math.floor arredonda o numero para baixo
     // Gera um índice aleatório para escolher um apelido da lista
  // Math.random() gera um número decimal aleatório entre 0 e 1
  // Multiplica esse número pelo comprimento da lista de apelidos
  // Math.floor() arredonda para baixo, garantindo que o índice esteja entre 0 e o comprimento da lista - 1
    
    // Retorna o nome combinado com o apelido escolhido
    //return `${nome} "é ou tem" ${apelidos[indiceAleatorio]}`
    return nome + "  você é ou tem "  + apelidos[indiceAleatorio]
    

    
  }
  
  // Exemplo de uso da função
  console.log(gerarAdjetivo("Dalvana")); // Exibe um adjetivo aleatório para "João"
  
  // Função gerarAdjetivo(nome): Recebe um nome e combina com um adjetivo aleatório.
  // Geração Aleatória: Math.random() e Math.floor() são usados para escolher um índice aleatório da lista de apelidos.
