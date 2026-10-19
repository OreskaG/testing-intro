const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  // test.todo("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]");

  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", ()=>{
    expect(filterByCategory(products, 'all').map(o => o['id'])).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  // test.todo("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]");

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", ()=>{
    expect(filterByCategory(products, undefined).map(o => o['id'])).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  // test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", ()=>{
    expect(filterByCategory(products, '').map(o => o['id'])).toStrictEqual([1,2,3,4,5,6])
  })

  // test.todo("'electronics' возвращает товары с ID [1, 2]");

  test("'electronics' возвращает товары с ID [1, 2]", ()=>{
    expect(filterByCategory(products, 'electronics').map(o => o['id'])).toStrictEqual([1,2])
  })

  // test.todo("'books' возвращает товары с ID [3, 6]");

  test("'books' возвращает товары с ID [3, 6]", ()=>{
    expect(filterByCategory(products, 'books').map(o => o['id'])).toStrictEqual([3,6])
  })

  // test.todo("'home' возвращает товары с ID [4, 5]");

  test("'home' возвращает товары с ID [4, 5]", ()=>{
    expect(filterByCategory(products, 'home').map(o => o['id'])).toStrictEqual([4, 5])
  })

  // test.todo("'clothes' возвращает пустой массив");

  test("'clothes' возвращает пустой массив", ()=>{
    expect(filterByCategory(products, 'clothes').map(o => o['id'])).toStrictEqual([])
  })

  // test.todo("'toys' возвращает пустой массив");

  test("'toys' возвращает пустой массив", ()=>{
    expect(filterByCategory(products, 'toys').map(o => o['id'])).toStrictEqual([])
  })

  // test.todo("'sports' возвращает пустой массив");
  
  test("'sports' возвращает пустой массив", ()=>{
    expect(filterByCategory(products, 'sports').map(o => o['id'])).toStrictEqual([])
  })
})
