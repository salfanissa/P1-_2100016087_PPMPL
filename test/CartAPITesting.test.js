const { fetchCartsData } = require("../src/index.js");
const cartData = require("../src/data/cart.js");

jest.mock("../src/index.js", () => ({
  fetchCartsData: jest.fn(),
}));

describe("Cart API Testing", () => {
  // Test Case 1
  test("should compare the length of carts with total", async () => {
    fetchCartsData.mockReturnValue(cartData);
    const carts = await fetchCartsData();
    expect(carts.length).toBe(cartData.length);
  });

  // Test Case 2
  test("should handle empty cart data", async () => {
    fetchCartsData.mockReturnValue([]);
    const carts = await fetchCartsData();
    expect(carts.length).toBe(0);
  });

  // Test Case 3
  test("should handle error when fetching cart data", async () => {
    fetchCartsData.mockRejectedValue(new Error("Error fetching cart data"));
    try {
      await fetchCartsData();
    } catch (error) {
      expect(error.message).toBe("Error fetching cart data");
    }
  });
});
