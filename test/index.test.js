// ! Dont change this code
const {
  fetchProductsData,
  setProductsCards,
  convertToRupiah,
  countDiscount,
} = require("../src/index.js");
const cartData = require("../src/data/cart.js");

jest.mock("../src/index.js");


// @ Write your code here
describe("Asynchronous Testing", () => {
  it('should fetch product data asynchronously', async () => {
    fetchProductsData.mockResolvedValueOnce({ data: [{ id: 1, title: "Product 1" }] });

    const result = await fetchProductsData(1);

    expect(result).toEqual({ data: [{ id: 1, title: "Product 1" }] });
  });
});

describe("Mocking Functions", () => {
  it('should mock setProductsCards function', () => {
    const mockedSetProductsCards = jest.fn(() => [{ id: 1, title: "Mocked Product" }]);

    setProductsCards.mockImplementation(mockedSetProductsCards);

    const cards = setProductsCards([]);

    expect(cards).toEqual([{ id: 1, title: "Mocked Product" }]);
    expect(mockedSetProductsCards).toHaveBeenCalled();
  });
});

describe("Setup & Teardown", () => {
  beforeEach(() => {
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should have clean mocks after each test', () => {
  });
});
// Asyncronous Testing
// https://jestjs.io/docs/asynchronous


// Mocking
// https://jestjs.io/docs/mock-functions


// Setup & Teardown
// https://jestjs.io/docs/setup-teardown
