let valor = 1234.59

console.log(valor.toFixed(1)) // 1234.6
console.log(Math.ceil(valor)) // 1235
console.log(Math.floor(valor)) // 1234
console.log(Math.round(valor)) // 1235 


// formatando para a moeda brasileira
const formatoMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(valor)

console.log(formatoMoeda) // R$ 1.234,59


// formatando para um número sem estilo
const formatoNumero = new Intl.NumberFormat('pt-BR').format(valor)
console.log(formatoNumero) // 1.234,59