// "var" é equivalente a uma "variável global"

var x
console.log(x) // undefined

// alteração de escopo
{
    var y = 5
}

console.log(y) // 5