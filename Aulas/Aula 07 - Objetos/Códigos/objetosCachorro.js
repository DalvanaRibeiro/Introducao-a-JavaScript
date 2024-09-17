// Definindo o objeto cachorro
const cachorro = {
     nome: 'Rex',
     idade: 5,
     raca: 'Labrador',
     cor: 'Amarelo',
     latir: function() {
         console.log('Au Au!');
     },
     comer: function(comida) {
         console.log(`${this.nome} está comendo ${comida}.`);
     },
     descrever: function() {
         console.log(`Este é o ${this.nome}, um ${this.raca} de ${this.idade} anos e cor ${this.cor}.`);
     }
 };
 
 // Usando o objeto cachorro
 cachorro.latir(); // Saída: Au Au!
 cachorro.comer('ração'); // Saída: Rex está comendo ração.
 cachorro.descrever(); // Saída: Este é o Rex, um Labrador de 5 anos e cor Amarelo.
 