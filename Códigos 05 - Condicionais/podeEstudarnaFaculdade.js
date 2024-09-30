// Função que verifica se a pessoa pode estudar na faculdade
function podeEstudarFaculdade(concluiuEnsinoMedio, idade, cursandoOutraFaculdade) {
    // Verifica se as três condições são atendidas
    if (concluiuEnsinoMedio && idade >= 18 && !cursandoOutraFaculdade) {
      return "Você pode estudar na faculdade."
    } else {
      return "Você NÃO pode estudar na faculdade."
    }
  }
  
  // Exemplo de chamada da função
  let concluiuEnsinoMedio = true // true se concluiu, false se não
  let idade = 20                  // idade da pessoa
  let cursandoOutraFaculdade = false // true se está cursando, false se não
  
  // Chama a função e exibe o resultado
  let resultado = podeEstudarFaculdade(concluiuEnsinoMedio, idade, cursandoOutraFaculdade);
  console.log(resultado)
  