const { setProductsCards, convertToRupiah, countDiscount } = require('../src/dataUtils');
const { products } = require('../src/data/product');
const hasProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

// Test Case 1: should return product data with id 1
test('should return product data with id 1', () => {
  const productWithId1 = setProductsCards([products[0]]);
  const expectedProduct = {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    after_discount: 477.8496,
  };

  // Assertion
  const receivedProduct = productWithId1[0] || {}; // Handle potential undefined
  expect(receivedProduct.id).toEqual(expectedProduct.id);
  expect(receivedProduct.title).toEqual(expectedProduct.title);
  expect(receivedProduct.price).toEqual(expectedProduct.price);
  expect(receivedProduct.after_discount).toEqual(expectedProduct.after_discount);

  // Format the price for comparison
  const formattedPrice = convertToRupiah(receivedProduct.after_discount);
  const expectedFormattedPrice = convertToRupiah(expectedProduct.after_discount);
  expect(formattedPrice).toEqual(expectedFormattedPrice);
});


// Test Case 2: should check products.length with limit
test('should check products.length with limit', () => {
  const productCards = setProductsCards(products);
  // Assertion
  expect(productCards.length).toEqual(products.length);
});

// Test Case 3: Validate if discounted price is correctly calculated
test('should validate if discounted price is correctly calculated', () => {
  const product = products[2]; // Assuming product with index 2 for testing
  const discountedPrice = countDiscount(product.price, product.discountPercentage);
  // Assertion
  expect(discountedPrice).toEqual(1055.9046);
});


