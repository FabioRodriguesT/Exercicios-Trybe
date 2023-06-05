/* 1- Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:*/


const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

/*
2. Complete a função customerInfo() para que seu retorno seja: 
  'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
Dica: Note que o parâmetro da função já está sendo passado na chamada da função.*/

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  const deliveryName = fullOrder.order.delivery.deliveryPerson;
  const clientName = fullOrder.name;
  const clientPhoneNumber = fullOrder.phoneNumber;
  const clientAddress = fullOrder.address.street;
  const clientHouseNumber = fullOrder.address.number;
  const clientApartmentNumber = fullOrder.address.apartment;

  return `Olá, ${deliveryName}, entrega para: ${clientName}, Telefone: ${clientPhoneNumber}, ${clientAddress}, Número: ${clientHouseNumber}, AP: ${clientApartmentNumber}. `
}

console.log(customerInfo(order));

/* 
3. Complete a função orderModifier() para que seu retorno seja: 
  'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.

4. Modifique o nome da pessoa compradora para Luiz Silva;

5. Modifique o valor total da compra para R$ 50,00.*/

  const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    fullOrder.name = "Luiz Silva";
    fullOrder.payment = 60;

    const pizzasTypes = Object.keys(fullOrder.order.pizza);
    const drinksCoke = fullOrder.order.drinks.coke.type;
    

    return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzasTypes[0]}, ${pizzasTypes[1]} e ${drinksCoke} é R$${fullOrder.payment}.`
  }
  
  console.log(orderModifier(order));

