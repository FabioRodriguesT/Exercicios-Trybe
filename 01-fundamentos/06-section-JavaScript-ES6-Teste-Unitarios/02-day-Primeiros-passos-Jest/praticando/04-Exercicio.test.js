// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array, a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
// {
//   tech: 'nomeTecnologia',
//   name: name,
// }
// Implemente a função techList a partir dos testes a seguir. É importante nunca alterar os testes ou as variáveis já escritas no código.
const techList = (array, name) => {
  const sortedList = array.sort();
  const techList = [];
  for (let index = 0; index < sortedList.length; index+= 1) {
    object = {
      tech: sortedList[index],
      name,
    };
    
    techList.push(object);
  }

  if (techList.length === 0) {
    return 'Vazio!';
  } else {
    return techList;
  }
};

// console.log(techList([], 'Lucas'));

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologia deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
