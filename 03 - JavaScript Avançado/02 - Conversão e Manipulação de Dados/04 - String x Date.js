console.log(new Date('30/04/2022')) // Invalid Date

// Date -> formato ISO de data (mm/dd/yyyy)
console.log(new Date('04/30/2022')) // 2022-04-30T03:00:00.000Z
console.log(new Date('04/30/2022 12:00')) // 2022-04-30T25:00:00.000Z
console.log(new Date('2022-04-30')) // 2022-04-30T00:00:00.000Z
console.log(new Date('2022 04 30')) // 2022-04-30T00:00:00.000Z

console.log(new Date().toString())
// Sun Aug 06 2023 09:51:11 GMT-0300 (Horário Padrão de Brasília)
console.log(new Date().toISOString())
// 2023-08-06T12:52:33.536Z
// o formato toISOString() é o formato mais padrão para se trabalhar