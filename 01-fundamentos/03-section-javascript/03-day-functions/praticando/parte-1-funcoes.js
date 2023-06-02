/*Para fixar, parte 1
1. Desenvolva o exercício a seguir com o uso de funções.
2. Considere a variável balance, que representa a quantia em conta da pessoa cliente do TrybeBank e escreva quatro funções que:
3. Adiciona um valor ao balance;
4. Subtraia um valor do balance;
5. Multiplique o valor do balance por uma taxa;
6. Divida o valor do balance.*/

let balance = 1500;
let otherValue = 600;

function somaBalance(num1, num2) {
  return num1 + num2;
}

function subtraiaBalance(num1, num2) {
  return num1 - num2;
}

function multipliqueBalance(num1, num2) {
  return num1 * num2;
}

function dividaBalance(num1, num2) {
  return num1 / num2;
}

console.log(somaBalance(balance, otherValue).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
console.log(subtraiaBalance(balance, otherValue).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
console.log(multipliqueBalance(balance, otherValue).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
console.log(dividaBalance(balance, otherValue).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));