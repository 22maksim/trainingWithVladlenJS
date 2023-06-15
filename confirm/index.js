//считаем стоимость товара
let two = (value) => {
	let sum;
	if (groceries[value].discount > 0) {
		sum = groceries[value].price + (groceries[value].price * (groceries[value].discount / 100));
	 } else {
		sum = groceries[value].price;
	 }
	 return sum.toFixed(2);
}

const getTotalPriceOfShoppingBag = (shoppingBagArray) => {
	// cчитаем общую стоимость
	let total = shoppingBagArray.reduce((item, value) => {
		item += two(value.productId) * value.count;
		return item
	}, 0)
	return total.toFixed(2);
};

const groceries = {
  "73Wakv": {
    name: "Orange Juice",
    price: 1.5,
    discount: 10
  },
  "5L3db9": {
    name: "Chocolate",
    price: 2,
    discount: 0
  }
};

const shoppingBag = [
  { productId: "73Wakv", count: 55 },
  { productId: "5L3db9", count: 0 }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice);