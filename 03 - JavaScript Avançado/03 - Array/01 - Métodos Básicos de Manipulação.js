const frutas = ['maçã', 'banana', 'laranja', 'uva', 'morango', 'abacaxi']

// Obter comprimento do array
console.log(frutas.length) // 6

// Retornar elementos específicos de um array
console.log(frutas[3]) // uva
console.log(frutas[frutas.length - 1]) // abacaxi

// Retornar as "farias" de um array
console.log(frutas.slice(2)) // [ 'laranja', 'uva', 'morango', 'abacaxi' ]
console.log(frutas.slice(2, 4)) // [ 'laranja', 'uva' ]
console.log(frutas.slice(-2)) // [ 'laranja', 'uva' ] // [ 'morango', 'abacaxi' ]
console.log(frutas.slice(1, -2)) // slice [ 'banana', 'laranja', 'uva' ]

// Adicionar novos elementos no array (início e fim)
frutas.unshift('melância')
frutas.push('carambola')
console.log(frutas)
/*
    [
    'melância', 'maçã',
    'banana',   'laranja',
    'uva',      'morango',
    'abacaxi',  'carambola'
    ]
*/

// Remover elementos no array (início e fim)
let objetoRetornadoInicio = frutas.shift()
let objetoRetornadoFim = frutas.pop()
console.log(objetoRetornadoInicio) // melância
console.log(objetoRetornadoFim) // carambola
console.log(frutas) // [ 'maçã', 'banana', 'laranja', 'uva', 'morango', 'abacaxi' ]

// Remover "fatias" de um array
frutas.splice(2, 3)
console.log(frutas) // [ 'maçã', 'banana', 'abacaxi' ]

// Localizar elementos
let index = frutas.indexOf('abacaxi')
console.log(index) // 2
index = frutas.indexOf('mamão')
console.log(index) // -1

// Remover elementos pelo índice
index = frutas.indexOf('abacaxi')
frutas.splice(index, 1)
console.log(frutas) // [ 'maçã', 'banana' ]
