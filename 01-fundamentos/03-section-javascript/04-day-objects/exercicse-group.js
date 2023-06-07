// Exercicio extra que Enza passou na aula no dia 6 de junho.
const menu = {
  sandwiches: [
    {
      name: 'Big Mac',
      price: 26.90,
      ingredients: ['2 hambúrgueres', 'alface americana', 'queijo cheddar', 'molho especial', 'cebola', 'picles', 'pão com gergelim'],
      calories: 503,
    },
    {
      name: 'Duplo Quarterão',
      price: 39.90,
      ingredients: ['2 hambúrgueres', 'mostarda', 'ketchup', 'cebola', 'queijo cheddar', 'pão com gergelim'],
      calories: 762,
    },
    {
      name: 'Big Tasty',
      price: 39.90,
      ingredients: ['1 hambúrguer', 'queijo emental', 'tomate', 'alface americana', 'cebola', 'molho tasty', 'pão com gergelim'],
      calories: 944,
    },
  ],
  sideDishes: [
    {
      name: 'Chicken McNuggets - 10 unidades',
      price: 16.90,
      ingredients: ['frango empanado'],
      calories: 414,
    },
    {
      name: 'McFritas Kids',
      price: 8.90,
      ingredients: ['batata', 'sal'],
      calories: 90,
    },
    {
      name: 'McFritas Pequena',
      price: 11.90,
      ingredients: ['batata', 'sal'],
      calories: 211,
    },
    {
      name: 'McFritas Média',
      price: 13.90,
      ingredients: ['batata', 'sal'],
      calories: 295,
    },
    {
      name: 'McFritas Grande',
      price: 15.90,
      ingredients: ['batata', 'sal'],
      calories: 422,
    },
  ],
  desserts: [
    {
      name: 'McFlurry Ovomaltine Caramelo',
      price: 13.90,
      ingredients: ['bebida láctea sabor baunilha', 'flocos de ovomaltine', 'cobertura de caramelo'],
      calories: 462,
    },
    {
      name: 'Top Sundae Chocolate',
      price: 11.90,
      ingredients: ['bebida láctea sabor baunilha', 'cobertura de chocolate', 'farofa de paçoca', 'canudo'],
      calories: 377,
    },
    {
      name: 'Torta de Banana',
      price: 6.90,
      ingredients: ['banana', 'massa crocante'],
      calories: 222,
    },
  ],
  drinks: [
    {
      name: 'Coca-Cola 300ml',
      price: 13.90,
      calories: 129,
    },
    {
      name: 'Del Valle Uva 500ml',
      price: 11.90,
      calories: 200,
    }
  ],
}

// 1. Crie uma função que imprima o nome e o valor de todos os lanches disponíveis;

const allLanches = (data) => {
  const typesDatas = Object.keys(data);
  const listName = [];
  const listPrice = [];
  const list = [];

  for (let indexDeFora = 0; indexDeFora < typesDatas.length; indexDeFora += 1) {
    for (let indexDeDentro = 0; indexDeDentro < data[typesDatas[indexDeFora]].length; indexDeDentro += 1) {
      listName.push(data[typesDatas[indexDeFora]][indexDeDentro].name);
      listPrice.push(data[typesDatas[indexDeFora]][indexDeDentro].price);
    }
  }

  for (let index = 0; index < listName.length; index += 1) {
    list.push(`Lanche: ${listName[index]}, preço: ${listPrice[index]}`);
  }

  let word = list.join(", ");
  return word;
}

// 2. Crie uma função que ao passar o nome de um lanche, retorna o objeto completo dele.
const nomeLanche = (data, nome) => {
  const typesDatas = Object.keys(data);

  for (var indexDeFora = 0; indexDeFora < typesDatas.length; indexDeFora += 1) {
    for (var indexDeDentro = 0; indexDeDentro < data[typesDatas[indexDeFora]].length; indexDeDentro += 1) {
      if (data[typesDatas[indexDeFora]][indexDeDentro].name === nome) {
        return data[typesDatas[indexDeFora]][indexDeDentro];
      }
    }
  }
}

// 3. Crie uma função que ao passar o valor que eu tenho na carteira, retorna um array com o nome dos lanches que posso comprar. Exemplo de retorno: [ 'Big Mac', 'Duplo Quarterão', 'Big Tasty' ]

const quantoPossoComprar = (data, valorDinheiro) => {
  const typesDatas = Object.keys(data);
  let listPossoComprar = [];

  for (var indexDeFora = 0; indexDeFora < typesDatas.length; indexDeFora += 1) {
    for (var indexDeDentro = 0; indexDeDentro < data[typesDatas[indexDeFora]].length; indexDeDentro += 1) {
      if (data[typesDatas[indexDeFora]][indexDeDentro].price < valorDinheiro) {
        listPossoComprar.push(data[typesDatas[indexDeFora]][indexDeDentro].name);
      }
    }
  }
  return listPossoComprar;
}

// 4. Crie uma função que ao passar um nome de ingrediente, retorna um array com quais lanches tem aquele ingrediente
/*
Exemplo: ao colocar queijo cheddar, retorna:*/

const thatSnackThatContainstheRightIngredient = (data, ingredients) => {
  const typesDatas = Object.keys(data);
  const hasIngredientList = [];
 
  for (var indexDeFora = 0; indexDeFora < typesDatas.length; indexDeFora += 1) {
    for (var indexDeDentro = 0; indexDeDentro < data[typesDatas[indexDeFora]].length; indexDeDentro += 1) {
      if (data[typesDatas[indexDeFora]][indexDeDentro]["ingredients"] && data[typesDatas[indexDeFora]][indexDeDentro]["ingredients"].includes(ingredients)) {
        hasIngredientList.push(data[typesDatas[indexDeFora]][indexDeDentro])        
      }
    }
  }

  return hasIngredientList;
}

/*
[
  {
    name: 'Big Mac',
    price: 26.9,
    ingredients: [
      '2 hambúrgueres',
      'alface americana',
      'queijo cheddar',
      'molho especial',
      'cebola',
      'picles',
      'pão com gergelim'
    ],
    calories: 503
  },
  {
    name: 'Duplo Quarterão',
    price: 39.9,
    ingredients: [
      '2 hambúrgueres',
      'mostarda',
      'ketchup',
      'cebola',
      'queijo cheddar',
      'pão com gergelim'
    ],
    calories: 762
  }
]*/