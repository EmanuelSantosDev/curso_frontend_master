/*
    CSS Seletors:

    Universal: *
    Id: #od
    Tag: <el>
    Class: .class
    Atributos: [attr=value]
    Grupos (vírgula): el,el
    Descendentes (espaço): el el
    Childs (>): el > el
*/


console.log(document.querySelectorAll('*'))
// NodeList(13) 
console.log(document.querySelector('#person-name'))
// <h1 id="person-name" class="text">Emanuel Santos</h1>
console.log(document.querySelectorAll('p'))
// NodeList(2) [p.text, p]
console.log(document.querySelectorAll('.text'))
// NodeList(2) [h1#person-name.text, p.text]
console.log(document.querySelectorAll('a[href]'))
// NodeList(2) [a, a]
console.log(document.querySelectorAll('a[href="https://www.globo.com"]'))
// NodeList [a]


// iterando usobre uma NodeList (imprimirá toda a árvore DOM no console)
for (const elemento of document.querySelectorAll('*')) {
    console.log(elemento)
}
