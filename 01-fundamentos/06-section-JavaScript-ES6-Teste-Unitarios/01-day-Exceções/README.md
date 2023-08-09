# Parte II – Pedido de clientes

Imagine que você seja a pessoa responsável por cuidar de um sistema de entregas de uma loja virtual e que precise passar todas as informações para a pessoa que irá efetuar a entrega dos pedidos. Para isso, use o seguinte código:

```Javascript
const clients = [
  {
    name: 'João da Silva',
    age: 28,
    email: 'joao.silva@gmail.com',
    phone: '(11) 5555-5555',
    address: {
      street: 'Rua dos Lírios',
      number: 123,
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      cep: '01234-567',
    },
  },
  {
    name: 'Maria Souza',
    age: 35,
    email: 'maria.souza@hotmail.com',
    address: {
      street: 'Rua dos Cravos',
      number: 456,
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '12345-678',
    },
  },
  {
    name: 'Pedro Oliveira',
    age: 42,
    email: 'pedro.oliveira@gmail.com',
    address: {
      street: 'Rua das Margaridas',
      number: 789,
      neighborhood: 'Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '23456-789',
    },
  },
  {
    name: 'Ana Santos',
    age: 25,
    email: 'ana.santos@gmail.com',
    phone: '(71) 5555-5555',
    address: {
      street: 'Rua dos Girassóis',
      number: 1011,
      neighborhood: 'Barra',
      city: 'Salvador',
      state: 'BA',
      cep: '34567-890',
    },
  },
  {
    name: 'Luiz Costa',
    age: 32,
    email: 'luiz.costa@hotmail.com',
    address: {
      street: 'Rua das Acácias',
      number: 1213,
      neighborhood: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '45678-901',
    },
  },
  {
    name: 'Isabela Almeida',
    age: 37,
    email: 'isabela.almeida@gmail.com',
    phone: '(21) 5555-5555',
    address: {
      street: 'Rua das Hortênsias',
      number: 1415,
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '56789-012',
    },
  },
  {
    name: 'Rafael Ferreira',
    age: 29,
    email: 'rafael.ferreira@hotmail.com',
    address: {
      street: 'Rua das Orquídeas',
      number: 1617,
      neighborhood: 'Pinheiros',
      city: 'São Paulo',
      state: 'SP',
      cep: '67890-123',
    },
  },
];

const findPersonByName = (name) => {
  // seu código aqui
};

const findPersonByPosition = (position) => {
  // seu código aqui
};

const findPeopleByState = (state) => {
  // seu código aqui
};
```

1. A função findPersonByName() recebe um nome por parâmetro e retorna a string: 'Destinatário: Ana Santos. Endereço: Rua dos Girassóis, 1011, Barra, Salvador - BA. CEP: 34567-890 '.
Caso a função findPersonByName() não encontre pessoas na lista de clientes, lance uma exceção com a mensagem 'Pessoa não encontrada, tente novamente'.

2. A função findPersonByPosition() recebe uma posição (do array) por parâmetro e retorna uma string com o nome e o e-mail da pessoa. Cliente: João da Silva. email: joao.silva@gmail.com.
Caso a função findPersonByPosition() não localize uma pessoa por posição, lance uma exceção com a mensagem 'Posição inválida, tente novamente'.

3. A função findPeopleByState recebe um estado por parâmetro e retorna um 
array contendo o nome das pessoas que moram naquele estado.
Caso a função findPeopleByState localize nenhuma pessoa no estado, lance uma exceção com a mensagem 'Ops, nenhuma pessoa mora nesse estado, tente outro'

Dica: Analise o array e as informações que estão ali para conseguir acessar a propriedade de forma correta.

# Parte III – Trabalhando em uma autoescola

Suponha que você esteja trabalhando em uma autoescola e precise fazer o cadastro de uma nova pessoa que tem interesse em se tornar motorista. Para isso, o sistema que você vai desenvolver tem uma série de validações, que permitem ou não a pessoa a começar as aulas.

```JavaScript
const studentRegister = (name, age) => {
  // seu código aqui
}
```
1. A função studentRegister() recebe dois parâmetros: name, nome da pessoa que quer começar a fazer as aulas; e age, idade da pessoa no momento do cadastro.
2. Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.
3. Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'
4. Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) à AuTrybe!'