const numerosArray = [73, 12, 45, 88, 1, 67, 33, 96]
let maiorQue50


// Exemplo #1
function obtemMaiorQue50(n) {
    return n > 50
}

maiorQue50 = numerosArray.filter(obtemMaiorQue50)
console.log(maiorQue50) // [ 73, 88, 67, 96 ]


// Exemplo #2
maiorQue50 = numerosArray.filter(n => n > 50)
console.log(maiorQue50) // [ 73, 88, 67, 96 ]