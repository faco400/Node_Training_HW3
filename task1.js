function calculateDiscountedPrice(productsArray, discount) {
  let discountedProducts = []

  discountedProducts = productsArray.map(product => {
    const discountedPrice = product.price - (product.price * (discount/100));
    return {...product, discountedPrice};
  });
  
  // console.log(productsArray);
  return discountedProducts;
}



function calculateTotalPrice (productsArray) {
  let totalPrice = 0;

    productsArray.map(product => {
      totalPrice += product.price;
  });

  // console.log(productsArray);
  return totalPrice;
}


// console.log(calculateDiscountedPrice([{name:'biscuit', price: 10}, {name:'ice cream', price:25}], 5));
// console.log(calculateTotalPrice([{name:'biscuit', price: 10}, {name:'ice cream', price:25}]));