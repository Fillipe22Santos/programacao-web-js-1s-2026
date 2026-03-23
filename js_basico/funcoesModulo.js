/** 
 * cria uma função que imprime um dado texto
*/

function imprimirtexto(texto){
    console.log(texto);
}

// testa a função com diferentes argumentos
imprimirtexto("olá, web!");
imprimirtexto("Vai teia...");

/**
 * recebe dois números (a, b)
 * retorna a soma entre (a, b)
 * retorna a + b
 */
function subtrair(a, b){
    return a - b; 
}
    function somar(a, b){
    return a + b; 
}


console.log(`3 - 5 = ${executarOperacao(subtrair, 3, 5)}`);
console.log(`3 + 5 = ${executarOperacao(somar, 3, 5)}`);
/**
 * função que imprime o resultado
 * de uma operação dada
 */
function executarOperacao(operacao, a, b){
    return operacao(a, b);
}

module.exports = {
    somar, 
    subtrair,
    executarOperacao 
}