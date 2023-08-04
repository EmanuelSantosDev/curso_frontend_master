# Date

## Referências

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
- https://www.w3schools.com/jsref/jsref_obj_date.asp

1. Date é um tipo específico do JS
2. Possuem métodos próprios para manipulação get e set.
3. São melhores quando se utilizados com bibliotecas (moment.js e date-fns)

## Como se declara uma variável Date no JS

```javascript
new Date() // inicializa com a data e hora atual do computador.
new Date(year, month, day, hours, minutes, seconds, milliseconds) // inicializa com valores pré-definidos.
new Date(dateString) // inicializa a partir de uma string.
```

## Principais métodos

- `getDay()` e `setDay()` - Retorna / define o dia da semana (0-6).
- `getDate()` e `setDate()` - Retorna / define o dia do mês (1-31).
- `getMonth()` e `setMonth()` - Retorna / define o mês (0-11).
- `getFullYear()` e `setFullYear()` - Retorna / define o ano.
- `getHours()` e `setHours()` - Retorna / define a hora (0-23).
- `getMinutes()` e `setMinutes()` - Retorna / define os minutos (0-59).
- `getSeconds()` e `setSeconds()` - Retorna / define os segundos (0-59).
- `parse()` - Recupera uma data a partir de uma string.
- `toString()` - Retorna uma data como string.
- `toISOString()` - Retorna uma data como string no padrão ISO.
- `toTimeString()` - Retorna a hora apenas.


## Codificando
````javascript
// const bornDate = new Date()
// const bornDate = new Date(1982, 1, 18, 6)
// const bornDate = new Date("Feb 18 1982 06:00:00")
const bornDate = new Date("1982-02-18T09:00:00.000Z")
const today = new Date()

console.log(bornDate)
console.log(bornDate.toISOString())

console.log("dia", bornDate.getDate()) // dia 18
console.log("mês", bornDate.getMonth() + 1) // mês 2
console.log("ano", bornDate.getFullYear()) // ano 1982

// Diferença de Datas
console.log("idade", today.getFullYear() - bornDate.getFullYear())
// idade 41
````
