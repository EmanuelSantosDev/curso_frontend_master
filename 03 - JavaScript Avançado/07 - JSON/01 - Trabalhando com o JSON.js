/*
    JSON.stringify(obj) // converte para string
    JSON.parse(str) // converte para objeto
*/

const funcionario = {
    nome: "João Silva",
    cargo: "Desenvolvedor Web",
    salario: 5000,
    endereco: {
        rua: "Rua das Flores, 123",
        cidade: "São Paulo",
        estado: "SP",
        cep: "12345-678"
    }
}

console.log(typeof funcionario) // object


const dadosEnviados = JSON.stringify(funcionario)
console.log(dadosEnviados)
console.log(typeof dadosEnviados)
/*
    {"nome":"João Silva","cargo":"Desenvolvedor Web","salario":5000,
    "endereco":{"rua":"Rua das Flores, 123","cidade":"São Paulo",
    "estado":"SP","cep":"12345-678"}}
    string
*/


const dadosRecebidos = JSON.parse(dadosEnviados)
console.log(dadosRecebidos)
console.log(typeof (dadosRecebidos))
/*
    {
      nome: 'João Silva',
      cargo: 'Desenvolvedor Web',
      salario: 5000,
      endereco: {
        rua: 'Rua das Flores, 123',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '12345-678'
      }
    }
    object
*/