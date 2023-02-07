export default function filterFoodByPrice(foodList: object[]) {
	let newFoodList: object[] = [];

	// get the highest price from foodlist
	let highestDishPrice = 0;

	foodList.forEach((dish: any) => {
		if (dish.price > highestDishPrice) {
			highestDishPrice = dish.price;
		}
	});

	const foodPriceMinMax = {
		min: 0,
		max: highestDishPrice + 10,
	};

	const foodPriceMin: any = document.getElementById("food-price-min-inp");
	if (foodPriceMin.value) {
		foodPriceMinMax.min = parseFloat(foodPriceMin?.value);
	}

	const foodPriceMax: any = document.getElementById("food-price-max-inp");
	if (foodPriceMax.value) {
		foodPriceMinMax.max = parseFloat(foodPriceMax?.value);
	}

	//if minimum food price is greater than maximum food price set the value of maximum food price to be equal to highest dish price to prevent confilt of values when filtering list
	if (foodPriceMinMax.min > foodPriceMinMax.max) {
		foodPriceMinMax.max = highestDishPrice;
	}

	const newFoodListByPrice: object[] = [];

	foodList.forEach((dish: any) => {
		if (
			dish.price >= foodPriceMinMax.min &&
			dish.price <= foodPriceMinMax.max
		) {
			newFoodListByPrice.push(dish);
		}
	});

	newFoodList = newFoodListByPrice;

	if (newFoodList.length) return newFoodList;
	else return foodList;
}
