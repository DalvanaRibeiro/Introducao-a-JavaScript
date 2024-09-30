// Função para resolver uma equação de segundo grau
// A equação de segundo grau tem a forma: ax² + bx + c = 0
function resolverEquacaoSegundoGrau(a, b, c) {
    // Passo 1: Calcular o discriminante (delta)
    // O discriminante nos ajuda a determinar o número de soluções reais.
    let delta = b * b - 4 * a * c;

    // Passo 2: Verificar se o delta é negativo, zero ou positivo
    if (delta < 0) {
        // Se delta for negativo, a equação não tem soluções reais
        console.log("A equação não tem soluções reais.");
    } else if (delta === 0) {
        // Se delta for zero, a equação tem uma solução real (raízes iguais)
        let x = -b / (2 * a);
        console.log("A equação tem uma solução real: x =", x);
    } else {
        // Se delta for positivo, a equação tem duas soluções reais diferentes
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("A equação tem duas soluções reais: x1 =", x1, "e x2 =", x2);
    }
}

// Exemplo de uso da função:
// Aqui a = 1, b = -3, c = 2. A equação é: x² - 3x + 2 = 0
resolverEquacaoSegundoGrau(1, -3, 2);
