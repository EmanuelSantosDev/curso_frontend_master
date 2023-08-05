// Iterando sobre um Array
const frutas = ['Maçã', 'Banana', 'Uva', 'Morango', 'Melância']

for (const indice in frutas) {
    console.log(`${indice}: ${frutas[indice]}`)
}
/*
    0: Maçã
    1: Banana
    2: Uva
    3: Morango
    4: Melância
*/


// Iterando sobre um Objeto
const cadastro = {
    nome: 'Emanuel',
    sobrenome: 'Santos',
    idade: 37,
    endereco: {
        rua: 'Carlos Muttoni',
        numero: 78,
        bairro: 'Belém Velho'
    }
}

for (const propriedade in cadastro) {
    console.log(`${propriedade}: ${cadastro[propriedade]}`)
}
/*
    nome: Emanuel
    sobrenome: Santos
    idade: 37
    endereco: [object Object]
*/