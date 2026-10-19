
const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает все товары", () => {
    const result = filterByCategory(products, 'all');
    expect(result.map(product => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('undefined возвращает все товары', () => {
    const result = filterByCategory(products, undefined);
    expect(result.map(product => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('пустая строка возвращает все товары', () => {
    const result = filterByCategory(products, '');
    expect(result.map(product => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает [1, 2]", () => {
    const result = filterByCategory(products, 'electronics');
    expect(result.map(product => product.id)).toEqual([1, 2]);
  });

  test("'books' возвращает [3, 6]", () => {
    const result = filterByCategory(products, 'books');
    expect(result.map(product => product.id)).toEqual([3, 6]);
  });

  test("'home' возвращает [4, 5]", () => {
    const result = filterByCategory(products, 'home');
    expect(result.map(product => product.id)).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'clothes')).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'toys')).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'sports')).toEqual([]);
  });
});
