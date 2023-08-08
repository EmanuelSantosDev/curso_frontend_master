const botao = document.querySelector('button')
const hyperlink = document.querySelector('a')


// interagindo com um botão
botao.addEventListener('click', () => {
    console.log('Você clicou no botão')
})


// previnindo o comportamento padrão do hiperlink
// (ir para outra página)
hyperlink.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Você clicou no hyperlink')
})