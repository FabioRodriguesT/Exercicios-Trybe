const createItem = require('./createItem');

describe('a função createItem', () => {
  // Construindo o teste, questione:

  test('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toMatchObject({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 });
  });

  test('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana','kg', 1.99)).toMatchObject({ name: 'banana', unit: 'kg', price: 1.99, quantity: 0 });
  });

  test('Lança um erro quando não recebe parâmetros', () => {
    expect(() => {createItem()}).toThrow(Error);
  });

  test('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {createItem(23,'kg', 1.99, 20)}).toThrow('O nome do item deve ser uma string'); 
  });

  test('Lança um erro se o preço é negativo', () => {
    expect(() => {createItem('banana','kg', -15, 20)}).toThrow('O preço do item deve ser maior que zero');
  });

  test('Lança um erro se o preço é zero', () => {
    expect(() => {createItem('banana','kg', 0, 20)}).toThrow('O preço do item deve ser maior que zero');
  });
});