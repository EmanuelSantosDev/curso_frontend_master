/*
    Evento "submit":

    - Disparado quando um formulário HTML é submetido pelo usuário.
    - Ativado ao pressionar um botão "submit".
    - Permite a execução de ações antes do envio dos dados do formulário:
        - Validação de dados inseridos pelo usuário.
        - Manipulação dos valores dos campos do formulário.
        - Prevenção do envio do formulário sob certas condições.
    
    'event.preventDefault()'

    - Extremamente útil, pois "impede" o envio do formulário antes
      da validação das informações
    
    'event.target':

    - Refere-se ao elemento que desencadeou o evento.
    - Durante um evento, o 'event.target' aponta para o elemento que foi 
      clicado, modificado, etc.
    - No exemplo abaixo é o elemento 'form'
*/

const formulario = document.querySelector('form')

formulario.addEventListener('submit', (event) => {
    const textoDaConsulta = event.target.querySelector('input[name=q]').value

    if (!textoDaConsulta) {
        event.preventDefault()
        alert('Campo de Pesquisa está vazio!')
    }
})