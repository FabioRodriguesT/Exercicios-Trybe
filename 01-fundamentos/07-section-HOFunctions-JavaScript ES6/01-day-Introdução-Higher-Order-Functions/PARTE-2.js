
// Instruções para a realização dos exercícios
// Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

// Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código-base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função vazia.

// Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js, e assim por diante.

// 🚀 Organizando uma biblioteca
// Estes exercícios praticam os conceitos de Higher Order Functions associados a outros temas de fundamentos já vistos, como arrow functions, template literals e objetos. Essa mistura de conceitos é muito importante para o seu aprendizado, então use tudo o que sabe para resolver os exercícios!

// Utilize o seguinte código como template para realizar os exercícios:

// Adicione o código do exercício aqui:

const books = require('./books');

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const findAuthorBorn = (age) => {
  const author = books.find(element => element.author.birthYear === age);
  return `O autor que nasceu nesse ano é ${author.author.name}.`;
}

console.log(findAuthorBorn(1947));

// Retorne o nome do livro com menor número de caracteres (menor nome).

const leastCharacterBookName = () => {
  let book = books[0].name;

  books.forEach(element => {
    if (element.name.length < book.length) {
      book = element.name;
    }
  });
  return `O livro com o menor nome é ${book}.`;
}

console.log(leastCharacterBookName());

// Encontre o primeiro livro cujo nome possua 26 caracteres.

const findBook = (number) => {
  const book = books.find(element => element.name.length === number);
  return `O livro cujo o nome possui ${26} letras é ${book.name}.`
}

console.log(findBook(26));

//  Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  const result = books.every((element) => element.author.birthYear > 1901 && element.author.birthYear < 2001);

  return `Todos os autoraes nasceram no século XX: ${result}.`;
}
console.log(everyoneWasBornOnSecXX());

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.


const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
  const result = books.some((element) => element.releaseYear > 1979 && element.releaseYear < 1990);
  return result;
}

console.log(someBookWasReleaseOnThe80s());

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.

const expectedResult = false;

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());