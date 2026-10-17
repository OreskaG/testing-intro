const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");
const mapId = (result) => result.map((p) => p.id);

describe("searchProducts", () => {
  // test.todo("'Наушники' возвращает товар с ID 1");
  test("'Наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, "Наушники");
    expect(mapId(result)).toEqual([1]);
  });
  // test.todo("'Чистый код' возвращает товар с ID 6");
  test("'Чистый код' возвращает товар с ID 6", () => {
    const result = searchProducts(products, "Чистый код");
    expect(mapId(result)).toEqual([6]);
  });
  // test.todo("'Настольная лампа' возвращает товар с ID 4");
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const result = searchProducts(products, "Настольная лампа");
    expect(mapId(result)).toEqual([4]);
  });
  // test.todo("'javascript' возвращает товар с ID 3");
  test("'javascript' возвращает товар с ID 3", () => {
    const result = searchProducts(products, "javascript");
    expect(mapId(result)).toEqual([3]);
  });
  // test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const result = searchProducts(products, "ЧЕХОЛ");
    expect(mapId(result)).toEqual([5]);
  });
  // test.todo("'наушники' возвращает товар с ID 1");
  test("'наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, "наушники");
    expect(mapId(result)).toEqual([1]);
  });
  // test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, "");
    expect(mapId(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  // test.todo("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, "   ");
    expect(mapId(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  // test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = searchProducts(products, "\t\n");
    expect(mapId(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
