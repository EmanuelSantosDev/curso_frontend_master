function soma() {
    let resultado = 0
    console.log(typeof arguments)
    // object
    console.log(arguments)
    // [Arguments] {'0': 3, '1': 5, '2': 12, '3': 4, '4': 2, '5': 23, '6': 35}
    for (const n of arguments) {
        resultado += n
    }
    return resultado
}

console.log(soma(3, 5, 12, 4, 2, 23, 35)) // 84
console.log(soma()) // 0
console.log(soma(10, 20)) // 30