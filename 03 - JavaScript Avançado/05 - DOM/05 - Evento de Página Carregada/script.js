/*
    Este script está sendo chamado na página HTML antes 
    da página renderizar o 'h1' (ver o arquivo index.html), 
    gerando duas saídas diferentes no console.

    O local onde invocamos o script é muito importante!
    
    O evento 'DOMContentLoaded' previne que o código tenha
    erro de carregamento.
*/


console.log(document.querySelector('#titulo-pagina'))
// null


// utilizando o evento 'DOMContentLoaded'
const funcaoImprimirTitulo = () => {
    console.log(document.querySelector('#titulo-pagina'))
}

document.addEventListener('DOMContentLoaded', funcaoImprimirTitulo)
// <h1 id="titulo-pagina" class="text">Título da Página</h1>

