/*
    titulo.classList.contains('azul')
    titulo.classList.remove('azul')
    titulo.classList.add('vermelho')
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

botao.addEventListener('click', () => {
    // código aqui
})