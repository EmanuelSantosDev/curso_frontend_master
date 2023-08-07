// criando um título
const subtitulo = document.createElement('h2')
subtitulo.innerHTML = 'Projetos Dinâmicos'
document.body.append(subtitulo)


// criando uma lista
const listaDeProjetos = document.createElement('ul')

const projeto1 = document.createElement('li')
const projeto2 = document.createElement('li')
const projeto3 = document.createElement('li')

projeto1.innerHTML = 'Site Responsivo'
projeto2.innerHTML = 'App de Entregas'
projeto3.innerHTML = 'SaaS'

listaDeProjetos.append(projeto1)
listaDeProjetos.append(projeto2)
listaDeProjetos.append(projeto3)

document.body.append(listaDeProjetos)


// deixando a lista ainda mais dinâmica
for (let index = 0; index < 11; index++) {
    projeto3.innerHTML = `SaaS ${index}`
    console.log(projeto3.innerHTML)
}
/*
    SaaS 0
    SaaS 1
    SaaS 2
    SaaS 3
    SaaS 4
    SaaS 5
    SaaS 6
    SaaS 7
    SaaS 8
    SaaS 9
    SaaS 10
*/