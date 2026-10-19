
const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, 'Наушники');

    expect(result.map((product) => product.id)).toEqual([1]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const result = searchProducts(products, 'Чистый код');

    expect(result.map((product) => product.id)).toEqual([6]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const result = searchProducts(products, 'Настольная лампа');

    expect(result.map((product) => product.id)).toEqual([4]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const result = searchProducts(products, 'javascript');

    expect(result.map((product) => product.id)).toEqual([3]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const result = searchProducts(products, 'ЧЕХОЛ');

    expect(result.map((product) => product.id)).toEqual([5]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, 'наушники');

    expect(result.map((product) => product.id)).toEqual([1]);
  });

  test('пустая строка возвращает все товары', () => {
    const result = searchProducts(products, '');

    expect(result.map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('строка из пробелов возвращает все товары', () => {
    const result = searchProducts(products, '   ');

    expect(result.map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('строка из табуляции и переноса строки возвращает все товары', () => {
    const result = searchProducts(products, '\t\n');

    expect(result.map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
