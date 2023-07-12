const countries = require('./countries.js');

// Calcule a quantidade total da população de todos os países.

// Dica 👀: o valor inicial deve começar com 0, portanto o acumulador é um número.

const expectedResultPopulation = 120797034;
const getPopulation = () => {
  // retorne o seu código aqui 
  const result = countries.reduce((acc, cur) => {
    return acc + cur.population;
  }, 0)
  return result;
}

console.log(getPopulation());

// Calcule a área total de todos os países.

const expectedResultArea = 4311757;
const getTotalArea = () => {
  // retorne seu código aqui
  const result = countries.reduce((acc, cur) => {
    return acc + cur.area;
  }, 0)
  return result;
}

console.log(getTotalArea());

// Encontre o país com o maior nome.

const expectedResultLongestName = {
  name: 'American Samoa',
  region: 'Oceania',
  currencies: [{ code: 'USD', name: 'United States Dollar' }],
  capital: 'Pago Pago',
  population: 55197,
  area: 199
}

const longestName = () => {
  // retorne seu código aqui
  const result = countries.reduce((acc, cur) => {
    if (acc.name.length < cur.name.length) {
      return cur;
    } else {
      return acc;
    }
  }, {
    name: 'batata',
  })

  return result;
}

console.log(longestName());

// Retorne a quantidade de vezes que a letra 'a' maiúscula ou minúscula aparece no array de nomes.

// Dica 👀: faça com que o array de nomes seja um array de letras.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResultCountA = 20;
const countA = () => {
  // retorne seu código aqui
  const result = names.map((element) => {
    const nameToLow = element.toLowerCase();
    const arrayName = nameToLow.split('');
    const result2 = arrayName.reduce((acc, cur) => {
      if (cur === 'a') {
        return acc + 1
      } else {
        return acc
      }
    }, 0)
    return result2
  })

  const sumNumber = (acc, cur) => acc + cur;
  const sum = result.reduce(sumNumber, 0);

  return `A quantidade de letra a é ${sum}.`;

}

console.log(countA());

// Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const expectedResultStudentAverage = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
const studentAverage = () => {
  // retorne seu código aqui

  const calcAverage = (array) => {
    return array.reduce((acc, cur) => { return acc + cur }, 0);
  }

  const result = students.map((element, index) => {
    const object = {
      name: element,
      average: calcAverage(grades[index]) / grades[index].length,
    }
    return object;
  }
  )


  return result;
}

console.log(studentAverage());