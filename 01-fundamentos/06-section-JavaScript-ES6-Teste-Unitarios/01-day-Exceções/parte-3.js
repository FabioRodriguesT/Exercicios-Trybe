const verifyIsNull = (name, age) => {
  if (name === null || age === null) {
    throw new Error('Todas as informações são necessárias');
  }
}

const verifyOlderAge = (age) => {
  const numberAge = Number(age);
  
  if (Number.isNaN(numberAge) || numberAge < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
}

const studentRegister = (name, age) => {
  // A função studentRegister() recebe dois parâmetros: name, nome da pessoa que quer começar a fazer as aulas; e age, idade da pessoa no momento do cadastro.
  try {
    // Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.
    verifyIsNull(name, age);
    // Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'
    verifyOlderAge(age)
    // Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) à AuTrybe!'
    const result = `${name}, seja bem-vindo(a) à AuTrybe!`;
    return result
  }
  catch (e) {
    return e.message;
  }
}
