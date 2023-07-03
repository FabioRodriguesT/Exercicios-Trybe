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

const checkingThePerson = (person) => {
  for (let index = 0; index < clients.length; index += 1) {
    if (clients[index].name === person) {
      return clients[index];
    }
  }
  throw new Error('Pessoa não encontrada, tente novamente');
}

const findPersonByName = (name) => {
  // A função findPersonByName() recebe um nome por parâmetro e retorna a string: 'Destinatário: Ana Santos. Endereço: Rua dos Girassóis, 1011, Barra, Salvador - BA. CEP: 34567-890 '.
  // Caso a função findPersonByName() não encontre pessoas na lista de clientes, lance uma exceção com a mensagem 'Pessoa não encontrada, tente novamente'.
  try {
    const client = checkingThePerson(name);

    const result = `Destinatário: ${client.name}. Endereço: ${client.address.street}, ${client.address.number}, ${client.address.neighborhood}, ${client.address.city} - ${client.address.state}. CEP: ${client.address.cep}.`;

    return result;
  }
  catch (e) {
    return e.message;
  }
};

const checkingThePosition = (position) => {
  if (clients[position] === undefined) {
    throw new Error('Posição inválida, tente novamente');
  }
  return clients[position];
}

const findPersonByPosition = (position) => {
  // A função findPersonByPosition() recebe uma posição (do array) por parâmetro e retorna uma string com o nome e o e-mail da pessoa. Cliente: João da Silva. email: joao.silva@gmail.com.
  // Caso a função findPersonByPosition() não localize uma pessoa por posição, lance uma exceção com a mensagem 'Posição inválida, tente novamente'.
  try {
    const client = checkingThePosition(position);

    const result = `Cliente: ${client.name}. email: ${client.email}`;

    return result;
  }
  catch (e) {
    return e.message;
  }
};

const checkingLivesState = (state) => {
  let peoples = []
  for (let index = 0; index < clients.length; index += 1) {
    if (clients[index].address.state === state) {
      peoples.push(clients[index].name);
    }
  }

  if (peoples.length === 0) {
    throw new Error('Ops, nenhuma pessoa mora nesse estado, tente outro');
  } else {
    return peoples;
  }
}

const findPeopleByState = (state) => {
  //  A função findPeopleByState recebe um estado por parâmetro e retorna um array contendo o nome das pessoas que moram naquele estado.
  // Caso a função findPeopleByState localize nenhuma pessoa no estado, lance uma exceção com a mensagem 'Ops, nenhuma pessoa mora nesse estado, tente outro'
  try {
    const peoples = checkingLivesState(state);
    return peoples;
  }
  catch (e) {
    return e.message;
  }
};

console.log(findPeopleByState('SP'));
