
const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  test('возвращает товар с ID 1', () => {
    expect(getProductById(products, 1)).toEqual(products[0]);
  });

  test('возвращает товар с ID 4', () => {
    expect(getProductById(products, 4)).toEqual(products[3]);
  });

  test('возвращает товар с ID 6', () => {
    expect(getProductById(products, 6)).toEqual(products[5]);
  });

  test('возвращает null для ID 0', () => {
    expect(getProductById(products, 0)).toBeNull();
  });

  test('возвращает null для ID 999', () => {
    expect(getProductById(products, 999)).toBeNull();
  });

  test('возвращает null для ID -1', () => {
    expect(getProductById(products, -1)).toBeNull();
  });

  test("возвращает null для строкового ID '1'", () => {
    expect(getProductById(products, '1')).toBeNull();
  });

  test('возвращает null для undefined', () => {
    expect(getProductById(products, undefined)).toBeNull();
  });

  test('возвращает null для NaN', () => {
    expect(getProductById(products, NaN)).toBeNull();
  });
});
