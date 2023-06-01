const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Percorrendo o array e imprimindo seus valores.

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// 2 - Somando todos o valores e imprimindo o resultado.

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

console.log(`\nA soma do array numbers é ${sum}.`);

// 3 - Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let media = sum/numbers.length;

console.log(`A media dos elementos do array numbers é ${media}.`);

// 4 - Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

if (media > 20) {
  console.log("O valor da média aritmética é maior que 20.");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20.");
}

// 5 - Utilizando for, descubra o maior valor contido no array e imprima-o.

let itsBigger = 0

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > itsBigger){
    itsBigger = numbers[index];
  }
}

console.log(`O maior valor contido no array é ${itsBigger}.`);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let isOdd = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    isOdd += 1;
  }
}
if (isOdd === 0) {
  console.log("Nehum valor ímpar encontrado.");
} else {  
  console.log(`A quantidade de números ímpares no array é ${isOdd}.`);
}

// 7 - Crie um algoritmo que imprima na tela o fatorial de 10. 4! = 4 x 3 x 2 x 1 = 24.
// 10! = 10 x 9 = 90 x 8 = 720 x 7 = 5040 x 6 = 30240 x 5 = 151200 x 4 = 604800 x 3 = 1814400 x 2 = 3628800 x 1 = 3628800  


let numberFactorial = 10
let totalMult = 1;

for (index = numberFactorial; index > 0; index -=1 ){
  totalMult *= index;  
}

console.log(`O fatorial de ${numberFactorial} é ${totalMult}.`)

// 8 - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

//let word = 'tryber';

let word = 'tryber';
let arrayWord = word.split('');
let arrayReverse = [];

for (let index = 0; index < arrayWord.length; index += 1) {
    arrayReverse.unshift(arrayWord[index]);
}

let wordReverse = arrayReverse.join('');

console.log(`A palavra ${word} invertida é ${wordReverse}.`); // Forma usando o for.
console.log(`A palavra ${word} invertida é ${arrayWord.reverse().join('')}.`); // Forma usando function do próprio javascript.

// 9 - Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

   
//  n = 5

//  *****
//  *****
//  *****
//  *****
//  *****

let squareNumber = 5;
let squareMessage = '';

console.log('\nQuadrado feito de asteriscos\n');

for (index = 0; index < squareNumber; index += 1) {
  squareMessage += '*';
}

for (index = 0; index < squareNumber; index +=1) {
  console.log(squareMessage);  
}

// 10 - Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let triangleNumber = 5;
let triangleMessage = '';

console.log('\nTriângulo feito de asteriscos\n');

for (index = 0; index < triangleNumber; index += 1) {
  triangleMessage += '*';
  console.log(triangleMessage);
}

// 11 - Agora, inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let triangleNumberReverse = 5;
let triangleMessageReverse = '';
let inputPosition = triangleNumberReverse - 1;
4


console.log('\nTriângulo reverso feito de asteriscos\n');

for (indexLine = 0; indexLine < triangleNumberReverse; indexLine += 1 ) {
  for (indexcollum = 0; indexcollum < triangleNumberReverse; indexcollum += 1) {
    if(indexcollum < inputPosition) {
      triangleMessageReverse += ' ';
    } else {
      triangleMessageReverse += '*'    
    }   
  }
  console.log(triangleMessageReverse);
  triangleMessageReverse = '';
  inputPosition -= 1;
}