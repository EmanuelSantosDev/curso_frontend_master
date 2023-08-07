/* 

    A Função Callback recebe quatro argumentos:

        'acumulator' - O valor retornado na última invocação do callback, 
        ou o argumento 'initialValue', se fornecido.

        'currentValue' - O elemento atual que está sendo processado no array.

        'indice' - O índice do elemento atual que está sendo processado no array.

        'array' - O array ao qual a função reduce foi chamada.

    'initialValue' - Opcional. Objeto a ser usado como o primeiro argumento 
    da primeira chamada da função callback.

*/

let valores = [1.5, 2, 4, 10]

function callback(acumulator, currentValue, indice, array) {
    console.log('acumulador', acumulator)
    console.log('currentValue', currentValue)
    console.log('indice', indice)
    console.log('array', array)
    return acumulator + 1
}

let arrayReduce = valores.reduce(callback, 0)
console.log(arrayReduce) // 4
/*
    acumulador 0
    currentValue 1.5
    indice 0
    array [ 1.5, 2, 4, 10 ]
    ---------------------------
    acumulador 1
    currentValue 2
    indice 1
    array [ 1.5, 2, 4, 10 ]
    ---------------------------
    acumulador 2
    currentValue 4
    indice 2
    array [ 1.5, 2, 4, 10 ]
    ---------------------------
    acumulador 3
    currentValue 10
    indice 3
    array [ 1.5, 2, 4, 10 ]
    ---------------------------
    4
*/


// Agregação
let soma = valores.reduce((total, item) => total + item, 0)
console.log('Soma = ', soma) // Soma =  17.5


// Posso Inicializar com um Array
let dobro = valores.reduce((valoresDobrados, numero) => {
    valoresDobrados.push(numero * 2)
    return valoresDobrados
}, [])

console.log(dobro) // [ 3, 4, 8, 20 ]