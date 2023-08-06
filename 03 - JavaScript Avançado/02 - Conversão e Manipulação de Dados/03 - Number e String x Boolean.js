console.log(Boolean('')) // false
console.log(Boolean('abc')) // true
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean(5)) // true

console.log(String(true)) // true
console.log(typeof String(true)) // string
console.log(String(false)) // false
console.log(typeof String(false)) // string

console.log(Number(true)) // 1
console.log(Number(false)) // 0