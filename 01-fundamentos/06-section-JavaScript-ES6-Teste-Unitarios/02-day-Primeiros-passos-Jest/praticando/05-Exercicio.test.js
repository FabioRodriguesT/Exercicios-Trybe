// A função hydrate recebe uma string no formato “número bebida” e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água, a fim de evitar ressaca. Exemplo de saída:


// string recebida
// '1 cerveja'
// retorno da função
// '1 copo de água'

// string recebida
// '1 cerveja, 2 shots e 1 catuaba'
// retorno da função
// '4 copos de água'

// string recebida
// '2 caipirinhas'
// retorno da função
// '2 copos de água'


// Implemente a função hydrate a partir dos testes a seguir. É importante nunca alterar os testes ou as variáveis já escritas no código.

const hydrate = (drinks) => {
  const withoutAnd = drinks.replace(' e ', ',')
  const drinksDrunk = withoutAnd.split(',');
  let quantityWater = 0;
  
  for (let index = 0; index < drinksDrunk.length; index += 1) {
    const quantityDrink = parseInt(drinksDrunk[index]);
    if (quantityDrink) {
      quantityWater += quantityDrink;
    }
  }

  if (quantityWater === 1 ) {
    return `${quantityWater} copo de água`;
  }
  return `${quantityWater} copos de água`;
};

console.log(hydrate('1 cachaça'));

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cerveja e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
