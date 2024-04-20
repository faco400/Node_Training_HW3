function calculateDiscountedPrice(productsArray, discount) {
  let discountedProducts = []

  discountedProducts = productsArray.map(product => {
    const discountedPrice = product.price - (product.price * (discount/100));
    return {...product, discountedPrice};
  });
  
  return discountedProducts;
}
// --------------------
// debug DiscountPrice
// console.log(calculateDiscountedPrice([{name:'biscuit', price: 10}, {name:'ice cream', price:25}], 5));
// --------------------

function calculateTotalPrice (productsArray) {
  let totalPrice = 0;

    productsArray.map(product => {
      totalPrice += product.price;
  });

  return totalPrice;
}


// console.log(calculateTotalPrice([{name:'biscuit', price: 10}, {name:'ice cream', price:25}]));