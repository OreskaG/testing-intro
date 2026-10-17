const { sortProductsByPrice } = require('../../src/catalog');
const products = require('../../src/data/products');

describe('sortProductsByPrice', () => {
  test('сортирует все товары по возрастанию ("asc")', () => {
    expect(sortProductsByPrice(products, 'asc').map(p => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('сортирует все товары по возрастанию (по умолчанию)', () => {
    expect(sortProductsByPrice(products).map(p => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('сортирует выбранные товары [1, 3, 4] по возрастанию', () => {
    const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
    expect(sortProductsByPrice(subset, 'asc').map(p => p.id)).toEqual([3, 4, 1]);
  });

  test('сортирует все товары по убыванию ("desc")', () => {
    expect(sortProductsByPrice(products, 'desc').map(p => p.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test('сортирует выбранные товары [3, 1, 4] по убыванию', () => {
    const subset = products.filter(({ id }) => [3, 1, 4].includes(id));
    expect(sortProductsByPrice(subset, 'desc').map(p => p.id)).toEqual([1, 4, 3]);
  });

  test('сортирует выбранные товары [5, 2, 6] по убыванию', () => {
    const subset = products.filter(({ id }) => [5, 2, 6].includes(id));
    expect(sortProductsByPrice(subset, 'desc').map(p => p.id)).toEqual([2, 5, 6]);
  });

  test('не меняет исходный массив при сортировке "asc"', () => {
    const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(subset, 'asc');
    expect(subset.map(p => p.id)).toEqual([1, 3, 4]);
  });

  test('не меняет исходный массив при сортировке "desc"', () => {
    const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(subset, 'desc');
    expect(subset.map(p => p.id)).toEqual([1, 3, 4]);
  });

  test('не меняет исходный массив при сортировке по умолчанию', () => {
    sortProductsByPrice(products);
    expect(products.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});