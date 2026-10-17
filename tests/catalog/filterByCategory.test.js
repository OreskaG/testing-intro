const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

const mapId = (result) => result.map((p) => p.id);
describe("filterByCategory", () => {
  // test.todo("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, "all");
    expect(mapId(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  // test.todo("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, undefined);
    expect(mapId(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  // test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, "");
    expect(mapId(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  // test.todo("'electronics' возвращает товары с ID [1, 2]");
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const result = filterByCategory(products, "electronics");
    expect(mapId(result)).toEqual([1, 2]);
  });
  // test.todo("'books' возвращает товары с ID [3, 6]");
  test("'books' возвращает товары с ID [3, 6]", () => {
    const result = filterByCategory(products, "books");
    expect(mapId(result)).toEqual([3, 6]);
  });
  // test.todo("'home' возвращает товары с ID [4, 5]");
  test("'home' возвращает товары с ID [4, 5]", () => {
    const result = filterByCategory(products, "home");
    expect(mapId(result)).toEqual([4, 5]);
  });
  // test.todo("'clothes' возвращает пустой массив");
  test("'clothes' возвращает пустой массив", () => {
    const result = filterByCategory(products, "clothes");
    expect(result).toEqual([]);
  });
  // test.todo("'toys' возвращает пустой массив");
  test("'toys' возвращает пустой массив", () => {
    const result = filterByCategory(products, "toys");
    expect(result).toEqual([]);
  });
  // test.todo("'sports' возвращает пустой массив");
  test("'sports' возвращает пустой массив", () => {
    const result = filterByCategory(products, "sports");
    expect(result).toEqual([]);
  });
});
