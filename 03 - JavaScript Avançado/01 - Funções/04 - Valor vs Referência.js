// em variávies 'comuns' é passado para a função o seu VALOR
let num = 10

function multiplicacao(n) {
    return n *= n
}

console.log(multiplicacao(num)) // 100
console.log(num) // 10 (a variável não foi alterada)


// em variáveis do tipo object é passado para a função a sua REFERÊNCIA
const numeroObj = { valor: 10 }

function multiplicacaoObj(numeroObj) {
    return numeroObj.valor *= numeroObj.valor
}

console.log(multiplicacaoObj(numeroObj)) // 100
console.log(numeroObj.valor) // 100 (o valor da propriedade foi alterado)