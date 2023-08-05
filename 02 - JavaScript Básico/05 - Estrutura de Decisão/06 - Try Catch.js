// Sintaxe
try {
    // executa algo...
    // consulta de API, Banco de Dados, Arquivo...
    // muito útil para comunicação com serviços externos
} catch (error) {
    // erro
} finally {
    // sempre executa ao final (opcional)
}


// Exemplo #1
try {
    console.log('Consultando o Banco de Dados')
    // aqui tem alguma linha de código que dará erro
    // usamos o 'throw' para lançar uma exceção com uma mensagem específica
    throw 'Erro 1032 ao conectar com o Banco de Dados'
} catch (error) {
    // Aqui executa alguma instrução para o usuário
    // Destaca a mensagem no console do navegador com uma cor avermelhada
    console.error(error)
} finally {
    console.log('Finalizando o Programa')
}
/*
 * Consultando o Banco de Dados
 * Erro 1032 ao conectar com o Banco de Dados
 * Finalizando o Programa
 */


// Exemplo #2
// Função que divide dois números e trata possíveis erros
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw 'Divisão por zero não é permitida.'
        }
        const result = a / b
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

const num1 = 10
const num2 = 0
const result = divideNumbers(num1, num2)

if (result !== null) {
    console.log(`O resultado da divisão é: ${result}`)
} else {
    console.log("Não foi possível realizar a divisão.")
}
// Divisão por zero não é permitida.
// Não foi possível realizar a divisão.