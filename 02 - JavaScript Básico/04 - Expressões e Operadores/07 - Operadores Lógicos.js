// OR
console.log(false || false) // false
console.log(true || false) // true
console.log(false || true) // true
console.log(true || true) // true

// AND
console.log(false && false) // false
console.log(true && false) // false
console.log(false && true) // false
console.log(true && true) // true

// Múltiplos Operadores Lógicos
console.log(false && false && true) // false
console.log(false || false || true) // true
console.log(false || (false && true)) // false

// NOT
console.log(!true) // false
console.log(!(23 < 24)) // false