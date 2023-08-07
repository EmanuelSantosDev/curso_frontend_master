const paisesArray1 = ['Brasil', 'Canadá', 'Austrália', 'Japão', 'Alemanha'];
const paisesArray2 = ['Argentina', 'França', 'México', 'Itália', 'Índia'];
const paisesArray3 = ['Espanha', 'China', 'Suécia', 'Egito', 'Canadá'];

// criando uma string (coerção)
let listaPaises = paisesArray1 + paisesArray2
console.log(listaPaises)
// Brasil,Canadá,Austrália,Japão,AlemanhaArgentina,França,México,Itália,Índia

// cria um array com 2 arrays
listaPaises = [paisesArray1, paisesArray2]
console.log(listaPaises)
/*
    [
        [ 'Brasil', 'Canadá', 'Austrália', 'Japão', 'Alemanha' ],
        [ 'Argentina', 'França', 'México', 'Itália', 'Índia' ]
    ]
*/

// concatenando 2 arrays
listaPaises = paisesArray1.concat(paisesArray2)
console.log(listaPaises)
/*
    [
        'Brasil',    'Canadá',
        'Austrália', 'Japão',
        'Alemanha',  'Argentina',
        'França',    'México',
        'Itália',    'Índia'
    ]
*/

// concatenando mais do que 2 arrays
listaPaises = paisesArray1.concat(paisesArray2).concat(paisesArray3)
console.log(listaPaises)
/*
    [
        'Brasil',    'Canadá',
        'Austrália', 'Japão',
        'Alemanha',  'Argentina',
        'França',    'México',
        'Itália',    'Índia',
        'Espanha',   'China',
        'Suécia',    'Egito',
        'Canadá'
    ]
*/

