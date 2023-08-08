/*

    Os Nós da Árvore DOM

    Documento: estes são os nós superiores na hierarquia do DOM. 
    Há apenas um nó de nó raiz em cada documento HTML.
    
    Elementos: estes são os nós que representam elementos HTML individuais, 
    como divs, spans e links.
    
    Atributos: estes são os nós que representam atributos de elementos HTML, 
    como o atributo href de um link.

    Texto: estes são os nós que representam o texto de um documento HTML.

    Comentários: estes são os nós que representam comentários em um documento HTML.

*/


// acessando o 'document' e seus nós filhos


console.log(document)
console.log(document.head)
console.log(document.body)


// acessando os demais nós do DOM


// document.getElementById()
const elementoNomeAutor = document.getElementById('person-name')
console.log(elementoNomeAutor) // <h1 id="person-name" class="text">Emanuel Santos</h1>

// document.getElementsByTagName()
const paragrafos = document.getElementsByTagName('p')
console.log(paragrafos) // HTMLCollection(2) [p.text, p]

// document.getElementsByClassName()
const elementosClasse = document.getElementsByClassName('text')
console.log(elementosClasse) // HTMLCollection(2) [h1#person-name.text, p.text]