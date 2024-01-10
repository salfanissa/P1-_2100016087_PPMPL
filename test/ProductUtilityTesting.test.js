const {
  convertToRupiah,
  countDiscount,
  setProductsCards,
} = require('../src/dataUtils.js'); // Update the path accordingly

test('should convert price to Rupiah format - Positive Case', async () => {
  const price = 100;
  const formattedPrice = await convertToRupiah(price);

  expect(typeof formattedPrice).toBe('string');
  expect(formattedPrice).toMatch(/^Rp\s\d+(\.\d{3})*(,\d{2})?$/);
});

test('should convert price to Rupiah format - Negative Case', async () => {
  const price = 'invalid';
  const formattedPrice = await convertToRupiah(price);

  expect(formattedPrice).toBe('RpNaN');
});

test('should count discount correctly - Positive Case', () => {
  const price = 100;
  const discountPercentage = 20;
  const discountedPrice = countDiscount(price, discountPercentage);

  expect(discountedPrice).toBeLessThan(price);
  expect(discountedPrice).toBeCloseTo(80, 1);
});

test('should count discount correctly - Negative Case', () => {
  const price = 'invalid';
  const discountPercentage = 20;
  const discountedPrice = countDiscount(price, discountPercentage);

  expect(discountedPrice).toBe(NaN);
});

test('should set product cards correctly', async () => {
  const productData = [
    { id: 1, title: 'Product 1', price: 100, discountPercentage: 10, image: 'url1' },
    // Add more sample data if needed
  ];

  const cards = await setProductsCards(productData);

  expect(cards).toHaveLength(productData.length);
  expect(cards[0]).toHaveProperty('id');
  expect(cards[0]).toHaveProperty('title');
  expect(cards[0]).toHaveProperty('price');
  // Add more assertions based on the structure of your product cards
});
