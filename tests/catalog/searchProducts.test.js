
const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает [1]", () => {
    const result = searchProducts(products, 'Наушники');
    expect(result.map(product => product.id)).toEqual([1]);
  });

  test("'Чистый код' возвращает [6]", () => {
    const result = searchProducts(products, 'Чистый код');
    expect(result.map(product => product.id)).toEqual([6]);
  });

  test("'Настольная лампа' возвращает [4]", () => {
    const result = searchProducts(products, 'Настольная лампа');
    expect(result.map(product => product.id)).toEqual([4]);
  });

  test("'javascript' возвращает [3]", () => {
    const result = searchProducts(products, 'javascript');
    expect(result.map(product => product.id)).toEqual([3]);
  });

  test("'ЧЕХОЛ' возвращает [5]", () => {
    const result = searchProducts(products, 'ЧЕХОЛ');
    expect(result.map(product => product.id)).toEqual([5]);
  });

  test("'наушники' возвращает [1]", () => {
    const result = searchProducts(products, 'наушники');
    expect(result.map(product => product.id)).toEqual([1]);
  });

  test("пустая строка возвращает все товары", () => {
    const result = searchProducts(products, '');
    expect(result.map(product => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пробелы возвращают все товары", () => {
    const result = searchProducts(products, '   ');
    expect(result.map(product => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("табуляция и перенос строки возвращают все товары", () => {
    const result = searchProducts(products, '\t\n');
    expect(result.map(product => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
