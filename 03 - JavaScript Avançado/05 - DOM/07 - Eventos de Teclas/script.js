const formulario = document.querySelector('input[type=text]')


// evento 'keydown' (é o mais utilizado)
// o parâmetro 'event' retorna duas informações inportantes:
// 'key': informação da tecla pressionada
// 'keyCode': código da tecla na tabela ASCII
formulario.addEventListener('keydown', (event) => {
    console.log('keydown', event)
    console.log(event.key)
    console.log(event.keyCode)

    if (event.keyCode === 13) {
        alert('Você clicou no ENTER')
    }
})


// evento 'keyup'
formulario.addEventListener('keyup', (event) => {
    console.log('keyup')
})