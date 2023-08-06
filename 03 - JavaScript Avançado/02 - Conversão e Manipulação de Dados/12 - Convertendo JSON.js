const people = [
    {
        id: 1,
        name: "Felipe",
        lastName: "Fontoura",
        bornDate: new Date(1982, 1, 18),
        address: {
            city: "São José dos Campos",
        },
    },
    {
        id: 2,
        name: "Eduardo",
        lastName: "Moraes",
        bornDate: new Date(2001, 3, 5),
        address: {
            city: "Recife",
        },
    },
]

// conversão obj -> string/JSON
console.log(JSON.stringify(people))

// conversão string/JSON -> obj
const dadosRecebidos = '[{"id":1,"name":"Felipe","lastName":"Fontoura","bornDate":"1982-02-18T03:00:00.000Z","address":{"city":"São José dos Campos"}},{"id":2,"name":"Eduardo","lastName":"Moraes","bornDate":"2001-04-05T03:00:00.000Z","address":{"city":"Recife"}}]'
const formatoObj = JSON.parse(dadosRecebidos)
console.log(formatoObj) // imprimirá o objeto no formato declarado mais acima