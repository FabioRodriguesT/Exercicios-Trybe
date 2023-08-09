function removeItem(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

describe('Exercicio 01', () => {
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

// A função removeItem(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array.

// Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.
// Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
// Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.
