// Criação do objeto livro
let livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    ano: 1954,
    disponivel: true
  };
  
  // Função para mostrar detalhes do livro
  function mostrarDetalhes(livro) {
    console.log(`Título: ${livro.titulo}`)
    console.log(`Autor: ${livro.autor}`)
    console.log(`Ano: ${livro.ano}`)
    console.log(`Disponível: ${livro.disponivel ? 'Sim' : 'Não'}`)
  }
  
  // Função para atualizar a disponibilidade do livro
  function atualizarDisponibilidade(livro) {
    livro.disponivel = !livro.disponivel
  }
  
  // Função para comparar anos de dois livros
  function compararAnos(livro1, livro2) {
    if (livro1.ano < livro2.ano) {
      return `${livro1.titulo} foi publicado antes de ${livro2.titulo}`
    } else if (livro1.ano > livro2.ano) {
      return `${livro2.titulo} foi publicado antes de ${livro1.titulo}`
    } else {
      return 'Ambos os livros foram publicados no mesmo ano'
    }
  }
  
  // Testando as funções
  mostrarDetalhes(livro)
  atualizarDisponibilidade(livro)
  mostrarDetalhes(livro)
  
  let livro2 = {
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
    ano: 1997,
    disponivel: true
  };
  
  console.log(compararAnos(livro, livro2))
  