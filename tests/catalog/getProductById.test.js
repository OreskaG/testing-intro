const products = require("../../src/data/products");
const { getProductById } = require("../../src/catalog");

describe("getProductById", () => {
  // test.todo('ID 1 возвращает products[0]');
  test("ID 1 возвращает products[0]", () => {
    expect(getProductById(products, 1)).toEqual(products[0]);
  });
  // test.todo('ID 4 возвращает products[3]');
  test("ID 4 возвращает products[3]", () => {
    expect(getProductById(products, 4)).toEqual(products[3]);
  });
  // test.todo('ID 6 возвращает products[5]');
  test("ID 6 возвращает products[5]", () => {
    expect(getProductById(products, 6)).toEqual(products[5]);
  });
  // test.todo('ID 0 возвращает null');
  test("ID 0 возвращает null", () => {
    expect(getProductById(products, 0)).toBeNull();
  });
  // test.todo('ID 999 возвращает null');
  test("ID 999 возвращает null", () => {
    expect(getProductById(products, 999)).toBeNull();
  });
  // test.todo('ID -1 возвращает null');
  test("ID -1 возвращает null", () => {
    expect(getProductById(products, -1)).toBeNull();
  });
  // test.todo("строковый ID '1' возвращает null");
  test("строковый ID '1' возвращает null", () => {
    expect(getProductById(products, "1")).toBeNull();
  });
  // test.todo('ID undefined возвращает null');
  test("ID undefined возвращает null", () => {
    expect(getProductById(products, undefined)).toBeNull();
  });
  // test.todo("ID NaN возвращает null");
  test("ID NaN возвращает null", () => {
    expect(getProductById(products, NaN)).toBeNull();
  });
});
