
const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test('сортирует все товары по возрастанию', () => {
    const result = sortProductsByPrice(products, 'asc');
    expect(result.map(p => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('по умолчанию сортирует по возрастанию', () => {
    const result = sortProductsByPrice(products);
    expect(result.map(p => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('сортирует выбранные товары по возрастанию', () => {
    const selected = products.filter(p => [1, 3, 4].includes(p.id));
    const result = sortProductsByPrice(selected, 'asc');
    expect(result.map(p => p.id)).toEqual([3, 4, 1]);
  });

  test('сортирует все товары по убыванию', () => {
    const result = sortProductsByPrice(products, 'desc');
    expect(result.map(p => p.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test('сортирует [3, 1, 4] по убыванию', () => {
    const selected = [3, 1, 4].map(id => products.find(p => p.id === id));
    const result = sortProductsByPrice(selected, 'desc');
    expect(result.map(p => p.id)).toEqual([1, 4, 3]);
  });

  test('сортирует [5, 2, 6] по убыванию', () => {
    const selected = [5, 2, 6].map(id => products.find(p => p.id === id));
    const result = sortProductsByPrice(selected, 'desc');
    expect(result.map(p => p.id)).toEqual([2, 5, 6]);
  });

  test('не изменяет исходный массив при asc', () => {
    const selected = products.filter(p => [1, 3, 4].includes(p.id));
    sortProductsByPrice(selected, 'asc');
    expect(selected.map(p => p.id)).toEqual([1, 3, 4]);
  });

  test('не изменяет исходный массив при desc', () => {
    const selected = products.filter(p => [1, 3, 4].includes(p.id));
    sortProductsByPrice(selected, 'desc');
    expect(selected.map(p => p.id)).toEqual([1, 3, 4]);
  });

  test('не изменяет исходный массив без направления', () => {
    const original = [...products];
    sortProductsByPrice(products);
    expect(products).toEqual(original);
    expect(products.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
