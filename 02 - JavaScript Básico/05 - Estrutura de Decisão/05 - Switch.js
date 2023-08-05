let nota = 3
switch (nota) {
    case 5:
        console.log('Conceito A')
        break
    case 4:
        console.log('Conceito B')
        break
    case 3:
        console.log('Conceito C')
        break
    case 2:
        console.log('Conceito D')
        break
    case 1:
        console.log('Conceito E')
        break
    default:
        console.log('Nota fora do range permitido')
        break
}
// Saída => Conceito C


// Múltiplas Condições
let condicao = 6
switch (condicao) {
    case 1:
    case 2:
        console.log('Condição 1 ou 2')
        break
    case 3:
    case 4:
        console.log('Condição 3 ou 4')
        break
    case 5:
    case 6:
        console.log('Condição 5 ou 6')
        break
    default:
        console.log('Condição fora do range permitido')
        break
}
// Saída => Condição 5 ou 6