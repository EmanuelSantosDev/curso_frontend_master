/*
    Na programação assíncrona, as operações não bloqueiam 
    o fluxo de execução do programa. 

    O 'setTimeout' é útil para atrasar a execução de código 
    em um determinado intervalo de tempo. Isso pode ser usado 
    para criar atrasos entre ações, agendar tarefas ou criar 
    animações com base no tempo.
*/


// Define uma função a ser executada após 3000 milissegundos (3 segundos)
const minhaFuncao = () => {
    console.log("A função foi executada após 3 segundos!")
}

// Agenda a execução da função após 3 segundos usando setTimeout
setTimeout(minhaFuncao, 3000)

console.log("Aguardando a função ser executada...")

/*
    Aguardando a função ser executada...
    A função foi executada após 3 segundos!
*/