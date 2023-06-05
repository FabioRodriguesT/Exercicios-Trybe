/*Adicione as propriedades email, fone, userGithub e linkedIn ao objeto customer (do exemplo anterior), chamando a função addProperty.*/


const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
  if (object[key] === undefined) {
    object[key] = value;
  }
}

addProperty(customer, "email", "cebolinha@hotmail.com");
addProperty(customer, "fone", "9599-4979");
addProperty(customer, "userGithub", "github.com");
addProperty(customer, "linkedIn", "linkedin.com");

console.log(customer);