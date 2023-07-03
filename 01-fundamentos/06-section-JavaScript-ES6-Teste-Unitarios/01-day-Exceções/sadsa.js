const verifyIsANumber = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Error, é necessário digitar um número válido.')
  }
}

const newFunction = (...number) => {
  try {
    const numbers = [...number];
    let sum = 0;

    for (let index = 0; index < numbers.length; index += 1) {
      verifyIsANumber(numbers[index]);
      sum += numbers[index];
    }
    let result = sum / numbers.length;
    return result;
  }
  catch (error) {
   return error.message
  }
}

console.log(newFunction(1, 2, 3, 4, 5, 6, 'jabuticaba'));