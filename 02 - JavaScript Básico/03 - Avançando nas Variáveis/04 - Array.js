const pessoas = ['Emanuel', 'Laura', 'Sabrina', 'Antônio']

// acessando uma posição pelo índice
console.log(pessoas[2]) // Sabrina

// sobrescrevendo uma posição
pessoas[2] = 'Ronaldinho Gaúcho'
console.log(pessoas[2]) // Ronaldinho Gaúcho

// acessando a quantidade de elementos
console.log(pessoas.length) // 4

// podemos armazenar estruturas complexas
const cadastros = [
    { nome: 'Lucas', idade: 22 },
    { nome: 'Ana', idade: 33 },
    { nome: 'Yasmin', idade: 19 },
    { nome: 'Celso', idade: 56 },
]