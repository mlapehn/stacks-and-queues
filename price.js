var q = [
  { name: 'banana',  price: .29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'shake', price: 3.00 },
  { name: 'eggs', price: 2.00 },
  { name: 'milk', price: 5.00 },
  { name: 'bread', price: 3.50 },
  { name: 'corn', price: 1.00 },
  { name: 'cheese', price: 2.00 },
  { name: 'tuna', price: .50 },
  { name: 'noodles', price: 1.50 },
  { name: 'coffee', price: 8.00 },
  { name: 'creamer', price: 2.00 },
  { name: 'beans', price: .75 },
  { name: 'bacon', price: 4.00 },
  { name: 'car', price: 10000 }
];
// every 3rd item is 10% off 
// every 5th item is 20% off 
// items that are 3rd and 5th are 30% off
function calculateTotal (array) {
  var count = 1;
  var priceArray = [];
  var items = array;
  var currentProduct = items.shift();
  while (currentProduct !== undefined) {
    if (count%15 === 0) {
      priceArray.push(currentProduct.price * 0.7);
    } else if (count%5 === 0) {
      priceArray.push(currentProduct.price * 0.8);
    } else if (count%3 === 0) {
      priceArray.push(currentProduct.price * 0.9);
    } else {
      priceArray.push(currentProduct.price);
    }
  currentProduct = items.shift();
  count += 1;
  }
  console.log(priceArray);
  var sum = priceArray.reduce(function(a, b) { return a + b; }, 0);
  return sum;
}

var total = calculateTotal(itemQueue);
console.log(total);