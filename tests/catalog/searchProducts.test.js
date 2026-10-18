const products = require('../../src/data/products');
const { searchProducts, filterByCategory } = require('../../src/catalog');

describe('searchProducts', () => {
  // test.todo("'Наушники' возвращает товар с ID 1");

  test("'Наушники' возвращает товар с ID 1", ()=>{
    expect(searchProducts(products, 'Наушники').map( o => o['id'])).toStrictEqual([1])
  })

  // test.todo("'Чистый код' возвращает товар с ID 6");

  test("'Чистый код' возвращает товар с ID 6", ()=>{
    expect(searchProducts(products, 'Чистый код').map( o => o['id'])).toStrictEqual([6])
  })

  // test.todo("'Настольная лампа' возвращает товар с ID 4");

  test("'Настольная лампа' возвращает товар с ID 4", ()=>{
    expect(searchProducts(products, 'Настольная лампа').map( o => o['id'])).toStrictEqual([4])
  })

  // test.todo("'javascript' возвращает товар с ID 3");

  test("'javascript' возвращает товар с ID 3", () => {
    expect(searchProducts(products, 'javascript').map( o => o['id'])).toStrictEqual([3])
  })

  // test.todo("'ЧЕХОЛ' возвращает товар с ID 5");

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    expect(searchProducts(products, 'ЧЕХОЛ').map( o => o['id'])).toStrictEqual([5])
  })

  // test.todo("'наушники' возвращает товар с ID 1");

  test("'наушники' возвращает товар с ID 1", () => {
    expect(searchProducts(products, 'наушники').map( o => o['id'])).toStrictEqual([1])
  })

  // test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '').map( o => o['id'])).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  // test.todo("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]");

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, ' ').map( o => o['id'])).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  // test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, "\t\n").map( o => o['id'])).toStrictEqual([1, 2, 3, 4, 5, 6])
  })
  
});

