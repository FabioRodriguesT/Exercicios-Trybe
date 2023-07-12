// Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumbers = numbers.filter((element) => element % 2 === 0);

const sumEvenNumbers = evenNumbers.reduce((acc, cur) => acc + cur, 0);

const sumEvenNumbers2 = numbers.reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc, 0)

console.log(sumEvenNumbers);
console.log(sumEvenNumbers2);

// Crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele!

const estudantes = require('./estudantes.js');

const result = estudantes.map((element) => {
  const object = {}
  object.name = element.nome;

  object.materia = element.materias.reduce((acc, cur) => {   
    if (acc.nota < cur.nota) {
      const object = {}
      object.name = cur.name;
      object.nota = cur.nota  
      return object
    } else {
      return acc;
    }
  }, {
    name: 'joao',
    nota: 0,
  }).name;

  return object;
})

console.log(result);