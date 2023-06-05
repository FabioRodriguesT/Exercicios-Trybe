/* 1- Por meio do array de frutas chamado basket, crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.
Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'] deverá retornar:*/

/*
{ 
  Melancia: 3,
  Abacate: 1,
  Uva: 1 
}
*/
/*
2. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates....

O array basket a ser utilizado:*/

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const array = ["Abacate", "Melancia", "Uva", "Laranja", "Jaca", "Pera"];
const numbersOfTimes = (data) => {
  let object = {
    Abacate: 0,
    Banana: 0,
    Jaca: 0,
    Laranja: 0,
    Melancia: 0,
    Pera: 0,
    Uva: 0,
  }
  for (let index = 0; index < data.length; index += 1) {
    switch (data[index]) {
      case 'Abacate':
        object.Abacate += 1;
        break;
      case 'Banana':
        object.Banana += 1;
        break;
      case 'Jaca':
        object.Jaca += 1;
        break;
      case 'Laranja':
        object.Laranja += 1;
        break;
      case 'Melancia':
        object.Melancia += 1;
        break;
      case 'Pera':
        object.Pera += 1;
        break;
      case 'Uva':
        object.Uva += 1;
        break;
      default:
        console.log(`${data[index]}: Fruta não encontrada.`);
    }
  }
  return object

};

const newObjectFruits = numbersOfTimes(basket)

console.log(Object.entries(newObjectFruits));
console.log(Object.entries(newObjectFruits).join(', '));

console.log(Object.entries(newObjectFruits).join(', ').replaceAll(",", ": "));



console.log(`Sua cesta possui: ${Object.entries(newObjectFruits).join(': ').replaceAll(",", ":").replaceAll(": ", ", ").replaceAll(":",": ")}`);
