// @ Try to check and change the return value of setProductsCards function
const setProductsCards = (products) => {
  return products.map((product) => {
    const discountedPrice = countDiscount(product.price, product.discountPercentage);
    const formattedPrice = convertToRupiah(product.price);

    return {
      id: product.id,
      title: product.title,
      price: product.price,
      after_discount: discountedPrice,
      image: product.image,
      formattedPrice: formattedPrice,
    };
  });
};


// ! Dont change this code
const convertToRupiah = (price) => {
  const convertedPrice = price * 15_436;
  const rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(convertedPrice);
  return rupiah.toString();
};

const countDiscount = (price, discount) => {
  const discountPrice = price * (discount / 100);
  const afterDiscount = price - discountPrice;
  return afterDiscount;
};

module.exports = { setProductsCards, convertToRupiah, countDiscount };
