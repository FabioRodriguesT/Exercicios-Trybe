/*## Para fixar, parte 2
1. Desenvolva cada exercício a seguir com o uso de funções.

2. Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, imprimir a mensagem: “O parâmetro passado deve ser do tipo string”.*/

const trybeBank = [];

function addCustomer(element) {
  if (typeof element === "string"){
    trybeBank.push(element);
    return trybeBank;
  } else {
    return "O parâmetro passa deve ser do tipo string.";
  } 
}

console.log(addCustomer('Joao'));
console.log(addCustomer('Maria'));
console.log(addCustomer('Jose'));

/*
3. Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.*/

/*4. Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso o parâmetro não seja do tipo string, imprimir a mensagem: “Todos os valores precisam ser strings.”.

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];*/
//const myFish =["angel", "clown", "drum", "mandarin", "surgeon"]
//console.log(myFish.splice(3, 1));
//console.log(myFish)

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
const newClients = ['Joao', 'Maria', 'Jose'];

console.log('\n');

function addCustomers(array) {
  const saveInitalArray = array ;  
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] === "string") {
      trybeBankCustomers.push(array[index]);     
    } else {      
      trybeBankCustomers.splice(trybeBankCustomers.length-saveInitalArray.length, index)
      return "Todos os valores precisam ser strings."
    }
  } 
  return trybeBankCustomers;
}

console.log(addCustomers(newClients));
