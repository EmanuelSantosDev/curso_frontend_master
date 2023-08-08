/*
    O 'setInterval' é usado para repetir a execução de uma função em 
    intervalos regulares de tempo.

    A função 'clearInterval' é usada para cancelar a execução de um 
    intervalo de tempo configurado previamente com a função 'setInterval'. 
*/


// Define uma função a ser executada repetidamente a cada 2 segundos
const minhaFuncao = () => {
    console.log("Essa função será repetida a cada 2 segundos!")
}

// Executa a função a cada 2 segundos usando setInterval
const intervalId = setInterval(minhaFuncao, 2000)

// Após 10 segundos, cancela a repetição do setInterval
setTimeout(() => {
    clearInterval(intervalId)
    console.log("Intervalo de repetição foi cancelado após 10 segundos.")
}, 10000)

/*
    Essa função será repetida a cada 2 segundos!
    Essa função será repetida a cada 2 segundos!
    Essa função será repetida a cada 2 segundos!
    Essa função será repetida a cada 2 segundos!
    Intervalo de repetição foi cancelado após 10 segundos.
*/