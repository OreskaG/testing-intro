const { filterByCategory } = require('../../src/catalog');
const products = require('../../src/data/products');

describe('filterByCategory', () => {
  test('возвращает все товары для категории "all"', () => {
    expect(filterByCategory(products, 'all').map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('возвращает все товары для undefined', () => {
    expect(filterByCategory(products, undefined).map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('возвращает все товары для пустой строки', () => {
    expect(filterByCategory(products, '').map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('фильтрует по категории "electronics"', () => {
    expect(filterByCategory(products, 'electronics').map(p => p.id)).toEqual([1, 2]);
  });

  test('фильтрует по категории "books"', () => {
    expect(filterByCategory(products, 'books').map(p => p.id)).toEqual([3, 6]);
  });

  test('фильтрует по категории "home"', () => {
    expect(filterByCategory(products, 'home').map(p => p.id)).toEqual([4, 5]);
  });

  test('возвращает пустой массив для несуществующей категории "clothes"', () => {
    expect(filterByCategory(products, 'clothes').map(p => p.id)).toEqual([]);
  });

  test('возвращает пустой массив для несуществующей категории "toys"', () => {
    expect(filterByCategory(products, 'toys').map(p => p.id)).toEqual([]);
  });

  test('возвращает пустой массив для несуществующей категории "sports"', () => {
    expect(filterByCategory(products, 'sports').map(p => p.id)).toEqual([]);
  });
});