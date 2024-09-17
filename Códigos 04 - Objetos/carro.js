let carroDosSonhos = {
    marca: "Tesla",
    modelo: "Model 3",
    cor: "Branco",
    ano: 2024,
    combustivel: "Elétrico",
    quilometragem: 0,
    preco: 300000,
    ligado: false,
  
    ligar: function() {
      this.ligado = true;
      console.log("O carro está ligado.");
    }
  };
  
  // Testando o método de ligar o carro
  carroDosSonhos.ligar();

  console.log(carroDosSonhos)
  