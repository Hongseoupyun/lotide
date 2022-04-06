let shoppingCart = {
  four: 'SPAM',
  6: 'folders',
  two: 'Brush',
  one: 'Toothpaste',
  three: 'toilet paper',
  7: 'Chrismas Tree',
  five: 'toilet brush'
};

// I want to print each item (value) in our object

const printCart = function(cart) {
  // console.log(cart);
  // I want to loop over an object
  // METHOD 1 --- Using the IN
  for (let item in shoppingCart) {
    console.log(shoppingCart[item]);
  }
}