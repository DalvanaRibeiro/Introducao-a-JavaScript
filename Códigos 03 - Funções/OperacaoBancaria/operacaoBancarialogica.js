// Variável que armazena o saldo inicial da conta
let saldo = 0;

// Função para atualizar o saldo na tela
function atualizarSaldo() {
    // Seleciona o elemento do saldo e atualiza o texto com o valor formatado
    document.geFtElementById('saldo').textContent = saldo.toFixed(2);
    /*
    document.getElementById('saldo'):

document: É um objeto global que representa o documento HTML carregado.
getElementById('saldo'): É um método que busca e retorna o elemento HTML que tem o id especificado, que neste caso é 'saldo'. Se houver um elemento com id="saldo" no HTML, esse método o retorna; se não houver, retorna null.

.textContent: Após obter o elemento com getElementById, você pode acessar ou modificar o conteúdo de texto desse elemento usando a propriedade textContent.
textContent: É uma propriedade que representa o texto contido no elemento HTML. Quando você lê essa propriedade, ela retorna o texto que está entre as tags do elemento. Quando você define essa propriedade, ela altera o texto exibido dentro do elemento.
    */
}

// Função que realiza o depósito
function depositar() {
    // Obtém o valor digitado pelo usuário e converte para número decimal
    const valor = parseFloat(document.getElementById('valor').value);

    // Verifica se o valor é válido (maior que 0 e numérico)
    if (isNaN(valor) || valor <= 0) {
        /* A expressão if (isNaN(valor) || valor <= 0) é uma condição em JavaScript que verifica se o valor da variável valor não é um número ou é um número menor ou igual a zero. Vamos detalhar o que cada parte faz:

Componentes da Condição
isNaN(valor):

isNaN: É uma função que verifica se o valor fornecido não é um número (Not-a-Number).
valor: É a variável que você está verificando. Se valor não for um número (ou seja, se for algo como uma string que não representa um número ou um valor indefinido), isNaN(valor) retornará true.
valor <= 0:

valor <= 0: Verifica se valor é menor ou igual a zero. Esta condição é verdadeira se valor for zero ou um número negativo.
Operador Lógico ||
||: É o operador lógico OU (OR). Ele retorna true se qualquer uma das condições ao seu redor for verdadeira. */
        // Exibe alerta se o valor for inválido
        alert("Por favor, insira um valor válido.");
        return; // Interrompe a execução da função
    }

    // Adiciona o valor ao saldo
    saldo += valor;

    // Atualiza o saldo na tela
    atualizarSaldo();

    // Exibe uma mensagem confirmando o depósito
    alert("Depósito de R$ " + valor.toFixed(2) + " realizado com sucesso!");
}

// Função que realiza o saque
function sacar() {
    // Obtém o valor digitado pelo usuário e converte para número decimal
    const valor = parseFloat(document.getElementById('valor').value);

    // Verifica se o valor é válido (maior que 0 e numérico)
    if (isNaN(valor) || valor <= 0) {
        // Exibe alerta se o valor for inválido
        alert("Por favor, insira um valor válido.");
        return; // Interrompe a execução da função
    }

    // Verifica se o saldo é suficiente para o saque
    if (valor > saldo) {
        // Exibe alerta se o saldo for insuficiente
        alert("Saldo insuficiente!");
        return; // Interrompe a execução da função
    }

    // Subtrai o valor do saldo
    saldo -= valor;

    // Atualiza o saldo na tela
    atualizarSaldo();

    // Exibe uma mensagem confirmando o saque
    alert("Saque de R$ " + valor.toFixed(2) + " realizado com sucesso!");
}
