/*
    titulo.classList.contains('nomeClasse')
    titulo.classList.remove('nomeClasse')
    titulo.classList.add('nomeClasse')
    titulo.classList.toggle('nomeClasse')
*/

const titulo = document.querySelector('#title')
const botao = document.querySelector('#alterar-classe')
const botao2 = document.querySelector('#alterar-classe-toggle')

botao.addEventListener('click', () => {
    if (titulo.classList.contains('azul')) {
        titulo.classList.remove('azul')
        titulo.classList.add('vermelho')
    } else {
        titulo.classList.remove('vermelho')
        titulo.classList.add('azul')
    }
})

// 'toggle' adiciona uma classe se ela não estiver presente 
// e remove a classe se ela já estiver presente
botao2.addEventListener('click', () => {
    titulo.classList.toggle('letra-grande')
})