const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

const getIds = (items) => items.map((item) => item.id);

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(getIds(sortProductsByPrice(products, 'asc'))).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    expect(getIds(sortProductsByPrice(products))).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
    expect(getIds(sortProductsByPrice(subset, 'asc'))).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(getIds(sortProductsByPrice(products, 'desc'))).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const subset = products.filter(({ id }) => [3, 1, 4].includes(id));
    expect(getIds(sortProductsByPrice(subset, 'desc'))).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const subset = products.filter(({ id }) => [5, 2, 6].includes(id));
    expect(getIds(sortProductsByPrice(subset, 'desc'))).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(subset, 'asc');
    expect(getIds(subset)).toEqual([1, 3, 4]);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const subset = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(subset, 'desc');
    expect(getIds(subset)).toEqual([1, 3, 4]);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const initialIds = getIds(products);
    sortProductsByPrice(products);
    expect(getIds(products)).toEqual(initialIds);
  });
});