const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  // test.todo("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]");

  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products, 'asc').map( o => o['id'])).toStrictEqual([3, 6, 5, 4, 2, 1])
  })

  // test.todo('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]');

  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products).map( o => o['id'])).toStrictEqual([3, 6, 5, 4, 2, 1])
  })

  // test.todo("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]");

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    expect(sortProductsByPrice([products[0], products[2], products[3]]).map( o => o['id'])).toStrictEqual([3, 4, 1])
  })

  // test.todo("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]");

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(sortProductsByPrice(products, 'desc').map( o => o['id'])).toStrictEqual([1, 2, 4, 5, 6, 3])
  })

  // test.todo("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]");

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    expect(sortProductsByPrice([products[2], products[0], products[3]], 'desc').map( o => o['id'])).toStrictEqual([1, 4, 3])
  })

  // test.todo("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]");

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    expect(sortProductsByPrice([products[4], products[1], products[5]], 'desc').map( o => o['id'])).toStrictEqual([2, 5, 6])
  })

  // test.todo("'asc' не меняет исходный массив [1, 3, 4]");

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    products[0].price = 1
    products[2].price = 3
    products[3].price = 4

    expect(sortProductsByPrice([products[0], products[2], products[3]], 'asc').map( o => o['id'])).toStrictEqual([1, 3, 4])
  })

  // test.todo("'desc' не меняет исходный массив [1, 3, 4]");

  test("'desc' не меняет исходный массив [1, 3, 4]]", () => {
    products[0].price = 4 
    products[2].price = 3 
    products[3].price = 1 

    expect(sortProductsByPrice([products[0], products[2], products[3]], 'desc').map( o => o['id'])).toStrictEqual([1, 3, 4])
  })
  
  test.todo('направление по умолчанию не меняет исходный массив всех товаров');

  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    products[0].price = 1
    products[1].price = 2
    products[2].price = 3
    products[3].price = 4
    products[4].price = 5 
    products[5].price = 6 

    expect(sortProductsByPrice(products).map( o => o['id'])).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

});
