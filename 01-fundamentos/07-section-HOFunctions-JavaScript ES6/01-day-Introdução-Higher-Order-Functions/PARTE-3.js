// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status e, ao final, retornam os resultados da rodada.

// Para os próximos exercícios, copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

// Crie uma função que retorne o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = (person) => Math.round(Math.random() * (person.strength - 15) + 15);

console.log(dragonDamage(dragon));

// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDamage = (person) => Math.round(Math.random() * (person.strength * 2 - person.strength) + person.strength);

console.log(warriorDamage(warrior));

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const mageDamage = (person) => {
  const result = {
    damage: Math.round(Math.random() * (person.intelligence * 2 - person.intelligence) + person.intelligence),
    manaSpent: person.mana,
  }
  if (object.mana > 14) {
    person.mana = person.mana - 15;
  } else {
    object.damage = 'Não possui mana suficiente.';
  }

  return result;
}

console.log(mageDamage(mage))

// Crie a primeira HOF que compõe o objeto gameActions.

const gameActions = {

  // Devemos criar um objeto game actions que terá o turno do guerreiro com uma função. O parâmetro passado deverá ser nossa callback de dano do guerreiro. Dentro dela, executamos a função passando um objeto que representa o guerreiro. Subtraímos de dragon.healthPoints o resultado de warriorAttack. Por fim, vamos atribuir o dano a uma chave de dano do warrior. Assim, podemos trabalhar com estatísticas do turno depois.

  warriorTurn: (warriorDamage) => {
    const damage = warriorDamage(warrior);
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },

  // Crie a segunda HOF que compõe o objeto gameActions.
  // Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damage mana do mage.
  mageTurn: (mageDamage) => {
    const damage = mageDamage(mage);
    dragon.healthPoints -= damage.damage;
    mage.damage = damage;
  },

  // Crie a terceira HOF que compõe o objeto gameActions.
  // Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstr
  
  dragonTurn: (damageDragon) => {
    const damage = damageDragon(dragon)
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
    dragon.damage = damage;
  }
}



