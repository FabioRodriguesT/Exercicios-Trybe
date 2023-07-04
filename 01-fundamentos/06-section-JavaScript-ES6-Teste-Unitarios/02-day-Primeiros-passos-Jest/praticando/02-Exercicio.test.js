// myFizzBuzz.js

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('Exercicio 01', () => {
  test('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Caso num seja um número divisível apenas por 3, a função retorna "fizz".', () => {
    expect(myFizzBuzz(9)).toBe("fizz");
  });
  test('Caso num seja um número divisível apenas por 5, a função retorna "buzz".', () => {
    expect(myFizzBuzz(10)).toBe("buzz");
  });
  test('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });
  test('Caso num não seja um número, a função retorna false.', () => {
    expect(myFizzBuzz('batata')).toBe(false);
  });
})

// A função myFizzBuzz(num) recebe um número num como parâmetro. Assim:

// Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
// Caso num seja um número divisível apenas por 3, a função retorna "fizz".
// Caso num seja um número divisível apenas por 5, a função retorna "buzz".
// Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
// Caso num não seja um número, a função retorna false.
// Realize os testes da função myFizzBuzz(num) para cada um dos cenários acima.