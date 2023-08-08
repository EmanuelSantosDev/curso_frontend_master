const formulario = document.querySelector('input[type=text]')


// evento 'keydown' (é o mais utilizado)
// o parâmetro 'event' retorna duas informações inportantes:
// 'key': informação da tecla pressionada
// 'keyCode': código da tecla na tabela ASCII
formulario.addEventListener('keydown', (event) => {
    console.log('keydown', event)
    console.log(event.key)
    console.log(event.keyCode)

    // capturando o valor digitado em um campo input
    // ao clicar no 'Enter'
    if (event.keyCode === 13) {
        alert(formulario.value)
    }
})


// evento 'keyup'
formulario.addEventListener('keyup', (event) => {
    console.log('keyup')
})