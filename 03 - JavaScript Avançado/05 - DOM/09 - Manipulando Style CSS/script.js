const titulo = document.querySelector('#title')
const botao = document.querySelector('#mudar-cor')

botao.addEventListener('click', () => {
    let corDoTitulo = titulo.style.color
    if (corDoTitulo === 'red') {
        titulo.style.color = 'blue'
        titulo.style.fontStyle = 'normal'
    } else {
        titulo.style.color = 'red'
        titulo.style.fontStyle = 'italic'
    }
})