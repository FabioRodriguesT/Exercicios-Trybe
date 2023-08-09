// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// Crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// Utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const createEmail = (name) => {
  const replaceName = name.replace(' ', '_').toLowerCase();
  return `${replaceName}@trybe.com`;
}

const newEmployees = (myFunction) => {
  const employees = {
    id1: myFunction('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: myFunction('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: myFunction('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
 
  return employees;
};

console.log(newEmployees(createEmail))

// SORTEADOR DE LOTERIA
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const verifyNumbers = (number, drawNumber) => (number === drawNumber) ? 'Parabéns, você ganhou!!!' : 'Tente novamente!!!';

const prizeDraw = (number, callback) => {
  const drawNumber = parseInt(Math.random() * (4) + 1);
  console.log(drawNumber);
  return callback(number, drawNumber)
}

console.log(prizeDraw(3, verifyNumbers));

// CORRETOR AUTOMATICO DE EXAME
// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const right_answers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student_answers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const scorePoints = (right, student) => {
  let rightQuestion = 0;
  let wrongQuestion = 0;

  for (let index = 0; index < student.length; index += 1) {
    if (right[index] === student[index]) {
      rightQuestion += 1;
    } else {
      wrongQuestion += 1;
    }
  }
  const score = (rightQuestion*1) - (wrongQuestion*0.5);
  return (`
    Questões Corretas: ${rightQuestion} = + ${rightQuestion*1} pontos
    Questões Erradas: ${wrongQuestion} = - ${wrongQuestion*0.5} pontos
    Resultado final: ${score} pontos.
  `)
}

const autoCorrectExaminator = (rightArr, studentArr, callback) => {
  return callback(rightArr, studentArr);
}

console.log(autoCorrectExaminator(right_answers, student_answers, scorePoints));

