/*
###################################################################################################
Este exercício ajuda a praticar a manipulação de arrays com o uso do método push em JavaScript. 
Ele permite criar um array para representar o guarda-roupa e  permite ao usuário adicionar novas 
peças de roupa ao array usando o método push. Além disso, é possível selecionar um look para sair. 
###################################################################################################
*/

// Criando o Guarda-roupa 
let guardaRoupa = ["Camisa Branca", "Jaqueta de Couro", "Calça Jeans", "Tênis Branco", "Óculos de Sol"];

// Exibindo as opções do guarda-roupa
console.log("Seu guarda-roupa:", guardaRoupa);

// Selecionando um look para sair
let lookSelecionado = [];
lookSelecionado.push(guardaRoupa[0]); // push adiciona o valor do índice 0 da array (Camisa Branca)
lookSelecionado.push(guardaRoupa[2]); // push adiciona o valor do índice 2 da array (Calça Jeans)
lookSelecionado.push(guardaRoupa[3]); // push adiciona o valor do índice 3 da array (Tênis Branco)

// Exibindo o look escolhido
console.log("Seu look para sair:", lookSelecionado);
