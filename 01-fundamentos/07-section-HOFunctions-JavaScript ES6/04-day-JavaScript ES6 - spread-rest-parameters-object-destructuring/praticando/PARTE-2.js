
// Para Fixar
// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
// Existem dois objetos referentes a uma pessoa usuária, um com informações pessoais e outro com informações referentes ao seu cargo na empresa trappistEnterprise. Você precisa criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
  name1: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const user2 = {
  name2: 'Maria',
  age2: 21,
  nationality2: 'Brazilian',
};

const jobInfos2 = {
  profession2: 'Software engineer',
  squad2: 'Rocket Landing Logic',
  squadInitials2: 'RLL',
};

const person = { ...user, ...jobInfos }

const person2 = { user2, jobInfos2 };

console.log(person);
console.log(person2);

// Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo: "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

const { name1, age, nationality, profession, squad, squadInitials } = person;

const {
  user2: {
    name2,
    age2,
    nationality2
  },
  jobInfos2: {
    profession2,
    squad2,
    squadInitials2,
  }
} = person2;


const textApresentation = `Hi, my name is ${name1}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`;

const textApresentation2 = `Hi, my name is ${name2}, I'm ${age2} years old and I'm ${nationality2}. I work as a ${profession2} and my squad is ${squadInitials2}-${squad2}.`;

console.log(textApresentation);
console.log(textApresentation2);