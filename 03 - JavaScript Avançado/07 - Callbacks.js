// Função de callback é uma função que é passada como argumento para outra função 
// call => chamo uma função
// back => volto para o fluxo normal

const calculadora = (n1, n2, operacao) => {
    const resultado = operacao(n1, n2)
    console.log(resultado)
}

const soma = (n1, n2) => n1 + n2
const subtracao = (n1, n2) => n1 - n2
const multiplicacao = (n1, n2) => n1 * n2
const divisao = (n1, n2) => n1 / n2

n1 = 10
n2 = 2

calculadora(n1, n2, soma) // 12
calculadora(n1, n2, subtracao) // 8
calculadora(n1, n2, multiplicacao) // 20
calculadora(n1, n2, divisao) // 5