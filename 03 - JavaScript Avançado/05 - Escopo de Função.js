// Podemos invocar uma função antes da sua declaração
soma(3, 5) // 8

function soma(n1, n2) {
    console.log(n1 + n2)
}

// Podemos atribuir uma função à uma variável
const subtracao = function (n1, n2) {
    console.log(n1 - n2)
}

subtracao(3, 5) // -2

// Porém, quando atribuimos à uma variável, precisamos inicializá-la primeiro
divisao(3, 5) // Cannot access 'divisao' before initialization

const divisao = function (n1, n2) {
    console.log(n1 / n2)
}

