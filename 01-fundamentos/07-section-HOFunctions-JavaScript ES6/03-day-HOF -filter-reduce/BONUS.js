// Todos os exercícios devem ser realizados utilizando reduce e, se necessário, use outra HOF. A informação será citada no enunciado.

// 1 - Dada uma matriz, transforme em um array.

const books = require('./books.js')

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => {
  // retorne seu código aqui
  const result = arrays.reduce((acc, cur) => {
    return acc.concat(cur);
  }, [])

  return result
}

console.log(flatten());

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResultReduceNames = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
  // retorne seu código aqui
  const result = books.reduce((acc, cur) => {
    if (acc === '') {
      return acc + cur.author.name
    } else {
      return acc + ', ' + cur.author.name
    }
  }, '')
  const pointResult = result + '.'
  return pointResult;
}

console.log(reduceNames());

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResultAverageAge = 43;

const averageAge = () => {
  // retorne seu código aqui
  const result = books.reduce((acc, cur) => {
    const calcAge = cur.releaseYear - cur.author.birthYear;
    return acc + calcAge;
  }, 0)

  return result/books.length;
}

console.log(averageAge());

// 4 - Encontre o livro com o maior nome.

const expectedResulLongestNamedBook = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = () => {
  // retorne seu código aqui
  const result = books.reduce((acc, cur) => {
    if (acc.name.length < cur.name.length) {
      return acc = cur;
    } else {
      return acc;
    }    
  }, {name: ''})

  return result
}

console.log(longestNamedBook());