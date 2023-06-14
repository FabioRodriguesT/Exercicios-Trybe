/*Suponha que você esteja trabalhando para uma escola e precise fazer algumas atualizações no sistema. Para isso, considere a seguinte base de dados:*/

const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

// 2. Crie uma função que obtenha o valor da chave de acordo com sua posição no array.

const keyValueAccordingInArray = (object, position) => Object.values(object.lessons)[position]

console.log(keyValueAccordingInArray(school, 1))

// 3. Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
const sumTotalNumberStudentsAllCourses = (data) => {
  let sum = 0;
  dataLessons = data.lessons;
  for (let index = 0; index < dataLessons.length; index+= 1) {
    sum += dataLessons[index].students;
  }
  return sum
}

console.log("\n A soma do número total de estudantes em todos os cursos é " + sumTotalNumberStudentsAllCourses(school));

/*4. Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.*/

const checkKeyExistInArray = (data, key) => {
  dataLessons = data.lessons;
  for (let index = 0; index < dataLessons.length; index+= 1) {
    if (!dataLessons[index].hasOwnProperty(key)){
      return false;
    }
  }
  return true;
}

console.log("\n" + checkKeyExistInArray(school,'course'));

/*5. Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.*/

const changeNightInCourse = (data, courseName, courseShift) => {
  dataLessons = data.lessons;
  for (let index = 0; index < dataLessons.length; index+= 1) {    
    if (Object.values(school.lessons[index]).includes(courseName)) {
      dataLessons[index].shift = courseShift;      
    } else {
      return "Curso não encontrado!!!"
    }
  }  
  return (dataLessons);
}

console.log(changeNightInCourse(school, "Python", "Noite"));