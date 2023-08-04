const pessoa = {
    nome: 'Emanuel',
    idade: 37,
    endereco: {
        rua: 'Carlos Muttoni',
        numero: 78,
        casa: 65,
        bairro: 'Belém Velho',
        cidade: 'Porto Alegre',
        uf: 'RS'
    }
}

// utilizando JSON.stringify() para visualizar o objeto em uma interpolação
console.log(`Cadastro do Funcionário = ${JSON.stringify(pessoa)}`);

// acessando as propriedades
console.log(pessoa.nome); // Emanuel
console.log(pessoa.endereco.bairro); // Belém Velho

// atribuindo novos valores
pessoa.nome = 'Sebastião'
console.log(pessoa.nome) // Sebastião

// criando uma nova propriedade
pessoa.profissao = 'Programador'
console.log(pessoa)
/**
    {
      nome: 'Sebastião',
      idade: 37,
      endereco: {
        rua: 'Carlos Muttoni',
        numero: 78,
        casa: 65,
        bairro: 'Belém Velho',
        cidade: 'Porto Alegre',
        uf: 'RS'
      },
      profissao: 'Programador'
    }
*/